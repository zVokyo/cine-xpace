import {
  useEffect,
  useState,
} from "react"

import type { Theme } from "../types"

const THEME_STORAGE_KEY =
  "cine-xpace-theme"

function getInitialTheme(): Theme {
  const savedTheme =
    localStorage.getItem(
      THEME_STORAGE_KEY
    )

  return savedTheme === "light"
    ? "light"
    : "dark"
}

export function useTheme() {
  const [theme, setTheme] =
    useState<Theme>(
      getInitialTheme
    )

  useEffect(() => {
    document.documentElement.dataset.theme =
      theme

    localStorage.setItem(
      THEME_STORAGE_KEY,
      theme
    )
  }, [theme])

  return {
    theme,
    setTheme,
  }
}
