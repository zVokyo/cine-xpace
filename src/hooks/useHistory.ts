import { useEffect, useState } from "react"

const HISTORY_STORAGE_KEY =
  "cine-xpace-history"

function getInitialHistory(): string[] {
  const savedHistory = localStorage.getItem(
    HISTORY_STORAGE_KEY
  )

  if (!savedHistory) {
    return []
  }

  try {
    const parsedHistory: unknown =
      JSON.parse(savedHistory)

    if (
      Array.isArray(parsedHistory) &&
      parsedHistory.every(
        (item) => typeof item === "string"
      )
    ) {
      return parsedHistory
    }

    return []
  } catch {
    return []
  }
}

export function useHistory() {
  const [history, setHistory] =
    useState<string[]>(getInitialHistory)

  useEffect(() => {
    localStorage.setItem(
      HISTORY_STORAGE_KEY,
      JSON.stringify(history)
    )
  }, [history])

  function addToHistory(
    channelName: string
  ) {
    setHistory((currentHistory) => {
      const historyWithoutChannel =
        currentHistory.filter(
          (name) => name !== channelName
        )

      return [
        channelName,
        ...historyWithoutChannel,
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
