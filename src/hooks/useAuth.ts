import { useState } from "react"
import { getLogin } from "../utils/storage"

export function useAuth() {
  const [loggedIn, setLoggedIn] = useState(getLogin())

  function login() {
    setLoggedIn(true)
  }

  function logout() {
    setLoggedIn(false)
  }

  return {
    loggedIn,
    login,
    logout,
    setLoggedIn,
  }
}
