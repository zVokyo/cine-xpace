import { useEffect, useState } from "react"

import { STORAGE_KEYS } from "../constants/storage"

function getInitialLoggedIn() {
  return (
    localStorage.getItem(
      STORAGE_KEYS.loggedIn
    ) === "true"
  )
}

export function useAuth() {
  const [loggedIn, setLoggedIn] =
    useState(getInitialLoggedIn)

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.loggedIn,
      String(loggedIn)
    )

    if (!loggedIn) {
      localStorage.removeItem(
        STORAGE_KEYS.user
      )
    }
  }, [loggedIn])

  return {
    loggedIn,
    setLoggedIn,
  }
}
