import type { Profile } from "../types"

const KEY = "cinexpace-profile"

const defaultProfile: Profile = {
  name: "Usuário",
  avatar: "👤",
}

export function getProfile(): Profile {
  const data = localStorage.getItem(KEY)

  if (!data) {
    return defaultProfile
  }

  try {
    return JSON.parse(data)
  } catch {
    return defaultProfile
  }
}

export function saveProfile(profile: Profile) {
  localStorage.setItem(KEY, JSON.stringify(profile))
}

export function clearProfile() {
  localStorage.removeItem(KEY)
}
