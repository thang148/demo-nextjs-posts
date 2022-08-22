import Input from "components/ui/Input"
import { apiUser } from "api"
import { useState, useEffect, useRef } from "react"
import OtpInput from "react-otp-input"
import cn from "classnames"
import { notification } from "components/ui"
import Cookies from "js-cookie"

export default function Register({ onLogin, isResetPassword }) {
  const [step, setStep] = useState(1)
  const [otp, setOtp] = useState("")
  const [phone, setPhone] = useState("")
  const __user = useRef({})
  function onChangePhone(e) {
    const { value } = e.target
    const __value = value[value.length - 1]
    if (value.length > 0 && !Number(__value) && __value !== "0") {
      notification.error({
        message: "Điện thoại phải là số!"
      })
      return
    }
    setPhone(value)
  }
  async function sendOtp() {
    try {
      if (!phone?.length) {
        notification.error({
          message: "Số điện thoại không cần để trống!"
        })
        return
      }
      if (!isResetPassword) {
        const { data } = await apiUser.checkPhoneExist({ phone })
        if (data?.verified) {
          notification.error({
            message: "Số điện thoại đã đăng ký!"
          })
          return
        }
      }
      await apiUser.sendOtp({ phone })
      setStep(2)
    } catch (error) {
      notification.error({
        message: "Bạn đã vượt quá số lần nhận mã OTP!"
      })
    }
  }

  async function verifyOtp() {
    try {
      if (otp?.length < 6) {
        notification.error({ message: "OTP không hợp lệ!" })
        return
      }
      const { data, success } = await apiUser.verifyOtp({ phone, otp_code: otp })
      if (success) {
        Cookies.set("accessToken", data?.access_token, { expires: 1 })
        // setToken(data?.access_token)
        __user.current = data
        setStep(3)
      }
    } catch (error) {
      notification.error({
        message: "Mã OTP sai hoặc đã hết hạn!"
      })
    }
  }

  function onFinish() {
    onLogin(__user.current)
    notification.success({
      message: "Đặt lại mật khẩu thành công!"
    })
  }

  return (
    <div>
      {step > 1 && (
        <button onClick={() => setStep((c) => c - 1)} className="absolute left-2 top-2">
          {icBack}
        </button>
      )}
      <h1 className="text-3xl text-center font-bold text-secondary mb-12 mt-4">
        {step === 1 && <span>{isResetPassword ? "ĐẶT LẠI MẬT KHẨU" : "ĐĂNG KÝ"}</span>}
        {step === 2 && "XÁC THỰC"}
        {step === 3 && "ĐẶT MẬT KHẨU"}
      </h1>
      {step === 1 && (
        <div>
          <Input onChange={onChangePhone} placeholder={"Số điện thoại..."} name="phone" value={phone} />
          <div>
            <button
              onClick={sendOtp}
              className={cn(
                "m-auto rounded py-2 px-4 text-lg flex items-center mb-4 space-x-4 hover:bg-primary-700",
                phone?.length === 10 ? "bg-primary-500 text-white" : "bg-primary-900 text-dark-700"
              )}
            >
              <span>TIẾP TỤC</span>
              <span>{ic}</span>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="mb-4 text-center">Nhập mã OTP được gửi tới SĐT của bạn</div>
          <div className="flex justify-center mb-6">
            <OtpInput
              value={otp}
              onChange={(e) => setOtp(e)}
              numInputs={6}
              isInputNum={true}
              separator={<span> &nbsp;</span>}
              inputStyle={"input_otp"}
            />
          </div>
          <div>
            <Coundown expired={60} sendOtp={sendOtp} />
          </div>
          <div>
            <button
              onClick={verifyOtp}
              className={cn(
                "m-auto rounded py-2 px-4 text-lg flex items-center mb-4 space-x-4 hover:bg-primary-700",
                otp?.length === 6 ? "bg-primary-500 text-white" : "bg-primary-900 text-dark-700"
              )}
            >
              <span>TIẾP TỤC</span>
              {ic}
            </button>
          </div>
        </div>
      )}

      {step === 3 && <SetupPassword {...__user.current} onLogin={onFinish} />}

      {/* <button onClick={() => setStep(step + 1)}>next</button> */}
    </div>
  )
}

function SetupPassword({ user_id, phone, onLogin }) {
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()
  function onChangePassword(e) {
    setPassword(e.target.value)
  }
  function onChangePassword2(e) {
    setPassword2(e.target.value)
  }

  async function onFinish() {
    try {
      await apiUser.setPassword(user_id, { new_password: password })
      onLogin()
    } catch (error) {
      console.log(error)
    }
  }

  const check = password?.length > 5 && password === password2

  return (
    <div>
      <div className="text-center">
        Xin chào, <span className="font-semibold">{phone}</span>
      </div>
      <div className="mb-4 text-center">vui lòng tạo mật khẩu lớn hơn 6 ký tự</div>
      <Input onChange={onChangePassword} type="password" name="phone" value={password} />
      <Input onChange={onChangePassword2} type="password" name="phone" value={password2} />
      <div>
        <button
          onClick={onFinish}
          className={cn(
            "m-auto rounded-lg text-white py-2 px-4 text-lg flex items-center mb-4 space-x-4",
            check ? "bg-secondary hover:bg-blue-600" : "bg_btn_next"
          )}
        >
          <span>HOÀN TẤT</span>
          <span>{ic}</span>
        </button>
      </div>
    </div>
  )
}

function Coundown({ sendOtp, expired }) {
  const [counter, setCounter] = useState(expired)

  function reSend() {
    sendOtp()
    setCounter(expired)
  }

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  return (
    <div className="flex justify-center mb-4">
      {counter > 0 ? (
        <div className="text-center h3">Vui lòng chờ {counter} để gửi lại</div>
      ) : (
        <div className="text-sm flex">
          Bạn không nhận được mã? &nbsp;
          <div onClick={reSend} onKeyUp={reSend} role="button" tabIndex="0">
            <span className="text-blue-500 cursor-pointer">Gửi lại</span>
          </div>
        </div>
      )}
    </div>
  )
}
const ic = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

const icBack = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
)
