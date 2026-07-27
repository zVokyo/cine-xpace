import { STORAGE_KEYS } from "../constants/storage"
import {
  load,
  remove,
  save,
} from "./storageHelper"

export function getHistory(): string[] {
  const history = load<unknown>(
    STORAGE_KEYS.history,
    []
  )

  if (
    Array.isArray(history) &&
    history.every(
      (item) => typeof item === "string"
    )
  ) {
    return history
  }

  return []
}

export function saveHistory(
  history: string[]
): void {
  save(
    STORAGE_KEYS.history,
    history
  )
}

export function clearHistory(): void {
  remove(STORAGE_KEYS.history)
}
