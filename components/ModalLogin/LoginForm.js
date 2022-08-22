import Input from "components/ui/Input"
import { apiUser } from "api"
import LoginGoogleAndFacebook from "./LoginGoogleAndFacebook"
import { useEffect, useRef, useState } from "react"
import useStore from "components/ui/Context"
import cn from "classnames"
import { notification } from "components/ui"
import { setAccessToken, setRefreshToken } from "lib/Cookies"
import Register from "./Register"
import Cookies from "js-cookie"
import QRCode from "./QRcode"

const initParams = { phone: "", password: "" }
export default function LoginForm({ onCancel }) {
  const { setUser } = useStore()
  const [view, setView] = useState("login")
  const [validate, setValidate] = useState(false)
  const [params, setParams] = useState(initParams)
  const [errors, setErrors] = useState(initParams)
  const __forgotPassword = useRef(false)

  async function onSubmit() {
    const { phone, password } = params
    let _error = {}
    if (!phone) _error.phone = "Số điện thoại không được để trống!"
    if (Number(phone) && phone.length !== 10) _error.phone = "Phone gồm 10 số bắt đầu từ số 0!"
    if (password.length < 6) {
      _error.password = "Mật khẩu lớn hơn 6 ký tự!"
    }

    if (Object.keys(_error).length > 0) {
      setErrors(_error)
      return
    } else {
      setErrors(initParams)
    }

    try {
      let res
      if (view) {
        const _params = { name: params.phone, password: params.password }
        res = await apiUser.login(_params)
        notification.success({ message: "Đăng nhập thành công!" })
        if (res.success) onLogin(res.data)
      } else {
        const _params = { phone: params.phone, password: params.password }
        res = await apiUser.register(_params)
        notification.success({ message: "Đăng ký thành công xin vui lòng đăng nhập!" })
        setView(true)
      }
    } catch (error) {
      let _message = "Hệ thống bị gián đoạn xin vui lòng thử lại sau!"
      const data = error?.response?.data
      if (data) {
        _message = data?.error_message
      }
      notification.error({
        message: _message
      })
    }
  }

  async function onLogin(res) {
    const { access_token, refresh_token } = res
    setAccessToken(access_token)
    setRefreshToken(refresh_token)
    // Cookies.set("accessToken", access_token, { expires: 7 })
    // Cookies.set("refreshToken", refresh_token, { expires: 30 })
    try {
      const { data, success } = await apiUser.getMe()
      const dataSignKey = await apiUser.getKey()
      Cookies.set("sign_key", dataSignKey?.data?.sign_key, { expires: 7 })
      if (success) {
        const { fullname, avatar } = data
        setUser({ fullname, avatar })
      }
    } catch (e) {
      console.log(e)
      throw e
    }

    onCancel()
  }

  function onChangeData(k, value) {
    const __value = value[value.length - 1]
    if (!view && k === "password" && __value === " ") {
      notification.error({
        message: "Mật khẩu không được chứa dấu cách!"
      })
      return
    }
    if (k === "phone" && value.length > 0 && !Number(__value) && __value !== "0") {
      notification.error({
        message: "Điện thoại phải là số!"
      })
      return
    }
    setParams((s) => ({ ...s, [k]: value }))
  }

  function onChangePassword() {
    __forgotPassword.current = true
    setView(false)
  }
  function onChangeView(v) {
    __forgotPassword.current = false
    setView(v)
    setParams(initParams)
  }
  useEffect(() => {
    const { phone, password } = params
    if (phone.length === 10 && password.length > 5) {
      setValidate(true)
    } else {
      setValidate(false)
    }
  }, [params])

  const { password, phone } = params
  return (
    <div className="flex justify-between flex-col modal_login  text-dark-900 rounded">
      <div className="p-4 flex-grow flex-col flex justify-center sm:p-8 md:p-10">
        {view === "login" && (
          <div>
            <h1 className="text-3xl text-center font-bold text-blue-700 mb-6"> ĐĂNG NHẬP</h1>
            <Input
              onChange={(e) => onChangeData("phone", e.target.value.trim())}
              placeholder={"Nhập số điện thoại của bạn"}
              error={errors.phone}
              name="phone"
              value={phone}
            />

            <Input
              onChange={(e) => onChangeData("password", e.target.value)}
              placeholder="Nhập mật khẩu"
              type="password"
              name="password"
              error={errors.password}
              value={password}
            />

            <button
              onClick={onSubmit}
              className={cn(
                "m-auto rounded  py-2 px-8 text-lg flex items-center mb-4 space-x-4 hover:bg-primary-700",
                validate ? "bg-primary-500 text-white" : "bg-primary-900 text-dark-700"
              )}
            >
              <span>ĐĂNG NHẬP</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <div className="text-center">
              <button className="text-blue-500 underline" onClick={onChangePassword}>
                Bạn quên mật khẩu?
              </button>
            </div>
          </div>
        )}

        {view === "qr" && <QRCode onChangeView={onChangeView} onLogin={onLogin} />}

        {view === "register" && <Register onLogin={onLogin} isResetPassword={__forgotPassword.current} />}

        {view === "login" && (
          <div>
            <div className="text-dark-600 text-center mt-8 text-sm mb-2">hoặc đăng nhập bằng</div>
            <LoginGoogleAndFacebook onChangeView={onChangeView} onLogin={onLogin} />
          </div>
        )}
      </div>

      {view === "login" && (
        <div className="text-center bg_footer px-4 py-2 br-b-8">
          <div className="text-sm text-black-500 ">Bạn chưa có tài khoản?</div>
          <button
            className={"text-blue-600 cursor-pointer font-bold text-lg "}
            onClick={() => onChangeView("register")}
          >
            ĐĂNG KÝ
          </button>
        </div>
      )}

      {view === "register" && (
        <div className="text-center bg_footer  py-2 px-4 br-b-8">
          <div className="text-sm text-black-500">Bạn đã có tài khoản?</div>
          <button className="text-blue-100 cursor-pointer font-semibold text-lg" onClick={() => onChangeView("login")}>
            ĐĂNG NHẬP
          </button>
        </div>
      )}
    </div>
  )
}

const app = (
  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 8H14V14H8V8ZM24 8V14H18V8H24ZM18 19H20V17H18V15H20V17H22V15H24V17H22V19H24V22H22V24H20V22H17V24H15V20H18V19ZM20 19V22H22V19H20ZM8 24V18H14V24H8ZM10 10V12H12V10H10ZM20 10V12H22V10H20ZM10 20V22H12V20H10ZM8 15H10V17H8V15ZM13 15H17V19H15V17H13V15ZM15 10H17V14H15V10ZM6 6V10H4V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H10V6H6ZM26 4C26.5304 4 27.0391 4.21071 27.4142 4.58579C27.7893 4.96086 28 5.46957 28 6V10H26V6H22V4H26ZM6 22V26H10V28H6C5.46957 28 4.96086 27.7893 4.58579 27.4142C4.21071 27.0391 4 26.5304 4 26V22H6ZM26 26V22H28V26C28 26.5304 27.7893 27.0391 27.4142 27.4142C27.0391 27.7893 26.5304 28 26 28H22V26H26Z"
      fill="#006DFF"
    />
  </svg>
)
