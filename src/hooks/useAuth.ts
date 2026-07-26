import { useEffect, useState } from "react"

const AUTH_STORAGE_KEY =
  "cine-xpace-logged-in"

function getInitialLoggedIn() {
  return (
    localStorage.getItem(
      AUTH_STORAGE_KEY
    ) === "true"
  )
}

export function useAuth() {
  const [loggedIn, setLoggedIn] =
    useState(getInitialLoggedIn)

  useEffect(() => {
    localStorage.setItem(
      AUTH_STORAGE_KEY,
      String(loggedIn)
    )
  }, [loggedIn])

  return {
    loggedIn,
    setLoggedIn,
  }
}
