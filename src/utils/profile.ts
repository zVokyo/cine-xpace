import { STORAGE_KEYS } from "../constants/storage"
import {
  load,
  remove,
  save,
} from "./storageHelper"

export type UserProfile = {
  name: string
  avatar: string
}

const DEFAULT_PROFILE: UserProfile = {
  name: "Usuário",
  avatar: "",
}

export function getProfile(): UserProfile {
  const profile = load<Partial<UserProfile>>(
    STORAGE_KEYS.profile,
    DEFAULT_PROFILE
  )

  return {
    name:
      typeof profile.name === "string"
        ? profile.name
        : DEFAULT_PROFILE.name,

    avatar:
      typeof profile.avatar === "string"
        ? profile.avatar
        : DEFAULT_PROFILE.avatar,
  }
}

export function saveProfile(
  profile: UserProfile
): void {
  save(STORAGE_KEYS.profile, profile)
}

export function clearProfile(): void {
  remove(STORAGE_KEYS.profile)
}
