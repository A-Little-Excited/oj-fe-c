import Cookies from "js-cookie"
const tokenKey = "Oj-C-Token"  // Cookie 是 key-value 结构

export function getToken() {
  return Cookies.get(tokenKey)
}

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

export function removeToken() {
  return Cookies.remove(tokenKey)
}