import { useState } from "react"

export function useCinemaMode() {
  const [cinemaMode, setCinemaModeState] = useState(
    localStorage.getItem("cinemaMode") === "true"
  )

  function setCinemaMode(value: boolean) {
    setCinemaModeState(value)
    localStorage.setItem("cinemaMode", String(value))
  }

  return {
    cinemaMode,
    setCinemaMode,
  }
}
