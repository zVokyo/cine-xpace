import { useEffect } from "react"

type Props = {
  toggleCinemaMode: () => void
}

function KeyboardShortcuts({ toggleCinemaMode }: Props) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const key = event.key.toLowerCase()

      if (key === "f") {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen()
        }
      }

      if (key === "c") {
        toggleCinemaMode()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [toggleCinemaMode])

  return null
}

export default KeyboardShortcuts
