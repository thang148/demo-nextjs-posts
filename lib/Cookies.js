import Cookies from "js-cookie"

export function getUser() {
  const item = Cookies.get("userInfo", { domain: process.env.NEXT_PUBLIC_DOMAIN_COOKIES })
  if (item) {
    return JSON.parse(item)
  }
  return false
}

export function setUser(item) {
  if (item) {
    Cookies.set("userInfo", JSON.stringify(item), { domain: process.env.NEXT_PUBLIC_DOMAIN_COOKIES })
  } else {
    console.log("userInfo is null")
  }
}

export function removeToken() {
  Cookies.remove("accessToken", { domain: process.env.NEXT_PUBLIC_DOMAIN_COOKIES })
  Cookies.remove("refreshToken", { domain: process.env.NEXT_PUBLIC_DOMAIN_COOKIES })
  Cookies.remove("userInfo", { domain: process.env.NEXT_PUBLIC_DOMAIN_COOKIES })
  Cookies.remove("sign_key", { domain: process.env.NEXT_PUBLIC_DOMAIN_COOKIES })
}

export function getAccessToken() {
  const item = Cookies.get("accessToken", { domain: process.env.NEXT_PUBLIC_DOMAIN_COOKIES })
  if (item) {
    return item
  }
  return false
}

export function getRefreshToken() {
  const item = Cookies.get("refreshToken", { domain: process.env.NEXT_PUBLIC_DOMAIN_COOKIES })
  if (item) {
    return item
  }
  return false
}

export function setAccessToken(accessToken) {
  Cookies.set("accessToken", accessToken, { domain: process.env.NEXT_PUBLIC_DOMAIN_COOKIES })
}

export function setRefreshToken(refreshToken) {
  Cookies.set("refreshToken", refreshToken, { domain: process.env.NEXT_PUBLIC_DOMAIN_COOKIES })
}
