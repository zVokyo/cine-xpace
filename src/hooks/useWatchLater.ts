import { useEffect, useState } from "react"

const WATCH_LATER_STORAGE_KEY =
  "cine-xpace-watch-later"

function getInitialWatchLater(): string[] {
  const savedWatchLater = localStorage.getItem(
    WATCH_LATER_STORAGE_KEY
  )

  if (!savedWatchLater) {
    return []
  }

  try {
    const parsedWatchLater: unknown =
      JSON.parse(savedWatchLater)

    if (
      Array.isArray(parsedWatchLater) &&
      parsedWatchLater.every(
        (item) => typeof item === "string"
      )
    ) {
      return parsedWatchLater
    }

    return []
  } catch {
    return []
  }
}

export function useWatchLater() {
  const [watchLater, setWatchLater] =
    useState<string[]>(getInitialWatchLater)

  useEffect(() => {
    localStorage.setItem(
      WATCH_LATER_STORAGE_KEY,
      JSON.stringify(watchLater)
    )
  }, [watchLater])

  function toggleWatchLater(
    channelName: string
  ) {
    setWatchLater((currentList) => {
      if (currentList.includes(channelName)) {
        return currentList.filter(
          (name) => name !== channelName
        )
      }

      return [
        ...currentList,
        channelName,
      ]
    })
  }

  return {
    watchLater,
    toggleWatchLater,
  }
}
