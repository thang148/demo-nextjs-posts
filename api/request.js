/* eslint-disable no-undef */
import axios from "axios"
import createAuthRefreshInterceptor from "axios-auth-refresh"
import { getAccessToken, setAccessToken, getRefreshToken, setRefreshToken, removeToken } from "lib/Cookies"

const refreshAuthLogic = (failedRequest) =>
  axios
    .post(
      `${process.env.NEXT_PUBLIC_DOMAIN_AUTH}/api/token/refresh`,
      {},
      {
        headers: {
          Authorization: "Bearer " + getRefreshToken()
        }
      }
    )
    .then((tokenRefreshResponse) => {
      // console.log(tokenRefreshResponse)
      const { data, success } = tokenRefreshResponse.data
      if (success) {
        setAccessToken(data.access_token)
        setRefreshToken(data.refresh_token)
        failedRequest.response.config.headers["Authorization"] = "Bearer " + data.access_token
      } else {
        removeToken()
        window.location.href = "/"
      }
      return Promise.resolve()
    })
    .catch((e) => {
      removeToken()
      console.log(e)
      window.location.href = "/"
    })

export default function getInstanceAxios(baseAPI, notToken) {
  const instance = axios.create({
    baseURL: baseAPI
  })
  instance.defaults.timeout = 3000
  instance.interceptors.request.use(
    function (config) {
      config.headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
      if (!notToken) {
        config.headers["Authorization"] = getAccessToken() ? `Bearer ${getAccessToken()}` : undefined
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    function (response) {
      try {
        if (response?.status >= 200 && response?.status < 300) return response?.data
        return Promise.reject(response?.data)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async function (error) {
      if (error.response) {
        const { response } = error
        const data = response?.data
        if (data?.message && response?.config?.method !== "get") {
          if (data?.details && data?.details?.length > 0) {
            // notification.error({
            //   message: data.details[0].msg
            // })
          } else {
            // notification.error({
            //   message: data.message
            // })
          }
        }
      }
      return Promise.reject(error)
    }
  )

  createAuthRefreshInterceptor(instance, refreshAuthLogic)
  return instance
}
