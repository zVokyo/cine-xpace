import {
  useEffect,
  useState,
} from "react"

import { STORAGE_KEYS } from "../constants/storage"

import type { Theme } from "../types"

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(
    STORAGE_KEYS.theme
  )

  return savedTheme === "light"
    ? "light"
    : "dark"
}

export function useTheme() {
  const [theme, setTheme] =
    useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme =
      theme

    localStorage.setItem(
      STORAGE_KEYS.theme,
      theme
    )
  }, [theme])

  return {
    theme,
    setTheme,
  }
}
