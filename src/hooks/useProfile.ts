import {
  useEffect,
  useState,
} from "react"

import { STORAGE_KEYS } from "../constants/storage"
import {
  load,
  save,
} from "../utils/storageHelper"

import type { Profile } from "../types"

const defaultProfile: Profile = {
  name: "Usuário",
  avatar: "",
}

function getInitialProfile(): Profile {
  const savedProfile = load<Partial<Profile>>(
    STORAGE_KEYS.profile,
    defaultProfile
  )

  return {
    name:
      typeof savedProfile.name === "string"
        ? savedProfile.name
        : defaultProfile.name,

    avatar:
      typeof savedProfile.avatar === "string"
        ? savedProfile.avatar
        : defaultProfile.avatar,
  }
}

export function useProfile() {
  const [profile, setProfile] =
    useState<Profile>(getInitialProfile)

  useEffect(() => {
    save(
      STORAGE_KEYS.profile,
      profile
    )
  }, [profile])

  function updateProfile(
    newProfile: Profile
  ) {
    setProfile(newProfile)
  }

  return {
    profile,
    updateProfile,
  }
}
