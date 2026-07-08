import { load, save } from "./storageHelper"

const KEY = "watchLater"

export function getWatchLater() {
  return load<string[]>(KEY, [])
}

export function saveWatchLater(list: string[]) {
  save(KEY, list)
}
