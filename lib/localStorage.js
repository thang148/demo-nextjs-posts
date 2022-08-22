export function getUser() {
  const item = process.browser && localStorage.getItem("userInfo")
  if (item) {
    return JSON.parse(item)
  }
  return false
}

export function setUser(item) {
  if (item) {
    localStorage.setItem("userInfo", JSON.stringify(item))
  } else {
    console.log("userInfo is null")
  }
}

export function removeToken() {
  localStorage.clear()
  document.cookie = 'accessToken=""'
}
