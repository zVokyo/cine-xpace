import { load, save } from "./storageHelper"

const KEY = "favorites"

export function getFavorites() {
  return load<string[]>(KEY, [])
}

export function saveFavorites(favorites: string[]) {
  save(KEY, favorites)
}
