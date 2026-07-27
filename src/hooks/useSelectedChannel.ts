import { useEffect, useState } from "react"

import { load, remove, save } from "../utils/storageHelper"

const STORAGE_KEY = "selectedChannel"

export function useSelectedChannel() {
  const [selectedChannel, setSelectedChannel] =
    useState<string | null>(() =>
      load<string | null>(STORAGE_KEY, null)
    )

  useEffect(() => {
    if (selectedChannel) {
      save(STORAGE_KEY, selectedChannel)
    } else {
      remove(STORAGE_KEY)
    }
  }, [selectedChannel])

  return {
    selectedChannel,
    setSelectedChannel,
  }
}
