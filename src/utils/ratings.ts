import { load, save } from "./storageHelper"

const KEY = "ratings"

export function getRatings() {
  return load<Record<string, number>>(KEY, {})
}

export function saveRatings(ratings: Record<string, number>) {
  save(KEY, ratings)
}
