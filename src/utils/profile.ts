import { load, save } from "./storageHelper"

type Profile = {
  name: string
  avatar: string
}

const KEY = "profile"

export function getProfile(): Profile {
  return load(KEY, {
    name: "Visitante",
    avatar: "👤",
  })
}

export function saveProfile(profile: Profile) {
  save(KEY, profile)
}
