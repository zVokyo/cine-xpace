import { useState } from "react"
import { getHistory, saveHistory } from "../utils/history"

export function useHistory() {
  const [history, setHistory] = useState<string[]>(getHistory())

  function addToHistory(channelName: string) {
    const updated = [
      channelName,
      ...history.filter((item) => item !== channelName),
    ].slice(0, 5)

    setHistory(updated)
    saveHistory(updated)
  }

  function clearHistory() {
    setHistory([])
    saveHistory([])
  }

  return {
    history,
    addToHistory,
    clearHistory,
  }
}
