import Image from "next/image"
import { useEffect, useState } from "react"
import { Layout } from "components/common"
import { Divider } from "components/ui"
import { useRouter } from "next/router"
import { removeToken, getRefreshToken } from "lib/Cookies"
import { apiUser } from "api"
import useStore from "components/ui/Context"
import { notification } from "components/ui"
import { api } from "apiServer"
let check = false
export default function Profile() {
  const { setUser: resetUser } = useStore()
  const router = useRouter()
  const [user, setUser] = useState({})

  async function fetch() {
    try {
      const { data } = await apiUser.getMe()
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  function onChangeData(k, value) {
    check = true
    setUser((s) => ({ ...s, [k]: value }))
  }

  async function onSave() {
    if (!check) return
    try {
      const { data } = await apiUser.updateProfile(user.id, {
        fullname: user.fullname,
        email: user.email,
        avatar: user.avatar
      })
      const { fullname, avatar } = data
      resetUser({ fullname, avatar })
      notification.success({ message: "Cập nhập thành công!" })
      check = false
    } catch (error) {
      console.log(error)
    }
  }

  async function onLogOut() {
    try {
      const dataBody = { refresh_token: getRefreshToken() }
      console.log(dataBody, " databody")
      await apiUser?.logOut(dataBody)
      removeToken()
      resetUser(false)
      router.push("/")
      notification.success({ message: "Đăng xuất thành công" })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  const { fullname, email, avatar, phone } = user

  return (
    <section className="max_layout max-w-screen-sm">
      <div className="text-xl font-semibold mb-4 rounded">
        <Divider /> TÀI KHOẢN CỦA TÔI
      </div>
      <div className="bg-white p-2 md:p-4 rounded">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="text-2xl">
              {avatar ? <Image alt={avatar} src={avatar} width={45} height={45} className="rounded-full" /> : DfAvatar}
            </div>
            <div>
              <div className="text-title">{fullname || phone}</div>
              <div className="text-time text-sm">Thành viên</div>
            </div>
          </div>
          <div>
            <button
              onClick={onLogOut}
              className="border rounded border-gray-200 text-time flex py-1 px-4 space-x-2 hover:bg-gray-100"
            >
              {iconLogout} <div>Đăng xuất</div>
            </button>
          </div>
        </div>

        <div className="py-4">
          <div className="mb-6">
            <div className="font-semibold text-title text-lg">Thông tin cá nhân</div>
          </div>

          <FormItem
            title="Tên hiển thị"
            name="fullname"
            value={fullname}
            onChange={(e) => onChangeData("fullname", e.target.value)}
          />

          <FormItem name="email" value={email} title="Email" onChange={(e) => onChangeData("email", e.target.value)} />
          <FormItem
            title="Số điện thoại"
            name="phone"
            notUpdate={true}
            value={phone}
            onChange={(e) => onChangeData("phone", e.target.value)}
          />

          <div className="flex justify-end mb-4">
            <button
              onClick={onSave}
              className="border rounded text-white border-gray-200 bg-secondary flex py-1 px-4 space-x-2 hover:bg-blue-600"
            >
              {iconSave} <div>Lưu lại</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

Profile.Layout = Layout

export async function getServerSideProps() {
  let menus = []

  try {
    const { data } = await api.getCategories()
    menus = data
  } catch (error) {
    console.log(error)
  }

  return { props: { menus } }
}

function ItemInput({ value, onChange, notUpdate }) {
  return (
    <div>
      <input
        className="outline-none border border-gray-300 py-1.5 w-100 rounded mb-1 px-2 w-full"
        value={value}
        disabled={notUpdate}
        onChange={onChange}
      />
    </div>
  )
}
function FormItem({ title, value, onChange, notUpdate }) {
  return (
    <div className="grid grid-cols-4 mb-6">
      <div className="col-span-1 text-sm md:text-base flex items-center">{title}</div>
      <div className="col-span-3 text-sm md:text-base">
        <ItemInput value={value} onChange={onChange} title={title} notUpdate={notUpdate} />
      </div>
    </div>
  )
}

const iconLogout = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
)

const iconSave = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
    />
  </svg>
)
const DfAvatar = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
      clipRule="evenodd"
    />
  </svg>
)
