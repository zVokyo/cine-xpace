import { useEffect, useState } from "react"

import type { Theme } from "../types"

const THEME_STORAGE_KEY = "cine-xpace-theme"

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(
    THEME_STORAGE_KEY
  )

  if (
    savedTheme === "dark" ||
    savedTheme === "light"
  ) {
    return savedTheme
  }

  return "dark"
}

export function useTheme() {
  const [theme, setTheme] =
    useState<Theme>(getInitialTheme)

  useEffect(() => {
    localStorage.setItem(
      THEME_STORAGE_KEY,
      theme
    )

    document.documentElement.dataset.theme =
      theme
  }, [theme])

  return {
    theme,
    setTheme,
  }
}
