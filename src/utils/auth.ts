import { useEffect, useState } from "react"

import { STORAGE_KEYS } from "../constants/storage"
import {
  remove,
  load,
  save,
} from "../utils/storageHelper"

function getInitialLoggedIn(): boolean {
  return load<boolean>(
    STORAGE_KEYS.loggedIn,
    false
  )
}

export function useAuth() {
  const [loggedIn, setLoggedIn] =
    useState<boolean>(getInitialLoggedIn)

  useEffect(() => {
    save(
      STORAGE_KEYS.loggedIn,
      loggedIn
    )

    if (!loggedIn) {
      remove(STORAGE_KEYS.user)
    }
  }, [loggedIn])

  return {
    loggedIn,
    setLoggedIn,
  }
}
