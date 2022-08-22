import { useReducer, useMemo, createContext, useContext } from "react"
import { getUser as getU, setUser as setU } from "lib/Cookies"
import KEY from "./Const"

const dfUserInfo = {
  fullname: "",
  avatar: ""
}
const dfToast = {
  display: false,
  type: "success",
  title: "Thông báo !",
  message: "",
  duration: 3000
}

const initialState = {
  userInfo: getU() || dfUserInfo,
  toast: dfToast,
  isShowModalLogin: false,
  modalLive: {
    show: false,
    info: {}
  }
}

function reducer(state, action) {
  switch (action.type) {
    case KEY.SET_USER:
      return { ...state, userInfo: action.value ? action.value : dfUserInfo }
    case KEY.SHOW_TOAST:
      return { ...state, toast: { ...dfToast, ...action.value, display: true } }
    case KEY.CLOSE_TOAST:
      return { ...state, toast: dfToast }
    case KEY.MODAL_LOGIN:
      return { ...state, isShowModalLogin: !state.isShowModalLogin }
    case KEY.MODAL_LIVE:
      return { ...state, modalLive: action.value }
    default:
      throw new Error()
  }
}

const MyContext = createContext(initialState)
MyContext.displayName = "MyContext"

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setUser = (value) => {
    setU(value)
    return dispatch({ type: KEY.SET_USER, value })
  }
  const showToast = (value) => dispatch({ type: KEY.SHOW_TOAST, value })
  const closeToast = () => dispatch({ type: KEY.CLOSE_TOAST })
  const togleModalLogin = () => dispatch({ type: KEY.MODAL_LOGIN })
  const setModalLive = (value) => dispatch({ type: KEY.MODAL_LIVE, value })
  const value = useMemo(
    () => ({
      ...state,
      setUser,
      showToast,
      closeToast,
      togleModalLogin,
      setModalLive
    }),
    [state]
  )
  return <MyContext.Provider value={value} {...props} />
}

const useStore = () => {
  const context = useContext(MyContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export default useStore
