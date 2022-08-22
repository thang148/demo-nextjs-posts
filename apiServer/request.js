/* eslint-disable no-undef */
import axios from "axios"
// import { setupCache } from "axios-cache-adapter"
const baseDomain = process.env.NEXT_PUBLIC_DOMAIN_API
const baseURL = `${baseDomain}/`
// const cache = setupCache({
//   maxAge: 60 * 1000
// })
const instance = axios.create({
  baseURL: baseURL
  // adapter: cache.adapter
})
// axios.defaults.timeout = 3000
instance.interceptors.response.use(
  async function (response) {
    try {
      if (response?.status >= 200 && response?.status < 300) return response?.data
      console.log("response", response)
      return Promise.reject(response?.data)
    } catch (error) {
      console.log("error", error)
      return Promise.reject(error)
    }
  },
  async function (error) {
    console.log("Error:", error?.config?.url + "--" + error?.message)
    if (error?.response) {
      const { response } = error
      const data = response?.data
      if (data?.message && response?.config?.method !== "get") {
        notification.error({
          message: data?.message || "Network Error "
        })
      }
    }
    return Promise.reject(error)
  }
)

export default function getInstanceAxios(token) {
  instance.interceptors.request.use(
    function (config) {
      config.headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
      if (token) config.headers.authorization = `Bearer ${token}`
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )
  return instance
}
