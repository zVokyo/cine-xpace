import { useState } from "react"
import { getWatchLater, saveWatchLater } from "../utils/watchLater"

export function useWatchLater() {
  const [watchLater, setWatchLater] = useState<string[]>(getWatchLater())

  function toggleWatchLater(channelName: string) {
    const updated = watchLater.includes(channelName)
      ? watchLater.filter((name) => name !== channelName)
      : [...watchLater, channelName]

    setWatchLater(updated)
    saveWatchLater(updated)

    return updated
  }

  return {
    watchLater,
    toggleWatchLater,
  }
}
