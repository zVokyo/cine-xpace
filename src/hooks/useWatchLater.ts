import {
  useEffect,
  useState,
} from "react"

import { STORAGE_KEYS } from "../constants/storage"
import {
  load,
  save,
} from "../utils/storageHelper"

function getInitialWatchLater(): string[] {
  const savedWatchLater = load<unknown>(
    STORAGE_KEYS.watchLater,
    []
  )

  if (
    Array.isArray(savedWatchLater) &&
    savedWatchLater.every(
      (item) => typeof item === "string"
    )
  ) {
    return savedWatchLater
  }

  return []
}

export function useWatchLater() {
  const [watchLater, setWatchLater] =
    useState<string[]>(getInitialWatchLater)

  useEffect(() => {
    save(
      STORAGE_KEYS.watchLater,
      watchLater
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
