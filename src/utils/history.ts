import { load, save } from "./storageHelper"

const KEY = "history"

export function getHistory() {
  return load<string[]>(KEY, [])
}

export function saveHistory(history: string[]) {
  save(KEY, history)
}
