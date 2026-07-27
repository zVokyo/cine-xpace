import { STORAGE_KEYS } from "../constants/storage"
import {
  load,
  remove,
  save,
} from "./storageHelper"

export function getUser(): string {
  return load<string>(
    STORAGE_KEYS.user,
    "Usuário"
  )
}

export function saveUser(
  name: string
): void {
  const normalizedName = name.trim()

  if (!normalizedName) {
    return
  }

  save(
    STORAGE_KEYS.user,
    normalizedName
  )
}

export function clearUser(): void {
  remove(STORAGE_KEYS.user)
}
