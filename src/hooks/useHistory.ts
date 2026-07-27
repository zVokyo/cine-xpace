import {
  useEffect,
  useState,
} from "react"

import { STORAGE_KEYS } from "../constants/storage"
import {
  load,
  save,
} from "../utils/storageHelper"

function getInitialHistory(): string[] {
  const savedHistory = load<unknown>(
    STORAGE_KEYS.history,
    []
  )

  if (
    Array.isArray(savedHistory) &&
    savedHistory.every(
      (item) => typeof item === "string"
    )
  ) {
    return savedHistory
  }

  return []
}

export function useHistory() {
  const [history, setHistory] =
    useState<string[]>(getInitialHistory)

  useEffect(() => {
    save(
      STORAGE_KEYS.history,
      history
    )
  }, [history])

  function addToHistory(
    channelName: string
  ) {
    setHistory((currentHistory) => {
      const updatedHistory =
        currentHistory.filter(
          (name) => name !== channelName
        )

      return [
        channelName,
        ...updatedHistory,
      ].slice(0, 20)
    })
  }

  function clearHistory() {
    setHistory([])
  }

  return {
    history,
    addToHistory,
    clearHistory,
  }
}
