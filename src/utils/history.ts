const KEY = "cinexpace-history"

export function getHistory(): string[] {
  const data = localStorage.getItem(KEY)

  if (!data) {
    return []
  }

  try {
    return JSON.parse(data)
  } catch {
    return []
  }
}

export function saveHistory(history: string[]) {
  localStorage.setItem(KEY, JSON.stringify(history))
}

export function clearHistory() {
  localStorage.removeItem(KEY)
}
