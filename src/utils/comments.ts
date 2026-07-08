import { load, save } from "./storageHelper"

const KEY = "comments"

export function getComments() {
  return load<Record<string, string[]>>(KEY, {})
}

export function saveComments(comments: Record<string, string[]>) {
  save(KEY, comments)
}
