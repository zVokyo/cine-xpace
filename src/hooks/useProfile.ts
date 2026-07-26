import { useEffect, useState } from "react"

import type { Profile } from "../types"

const PROFILE_STORAGE_KEY = "cine-xpace-profile"

const defaultProfile: Profile = {
  name: "Usuário",
  avatar: "",
}

function getInitialProfile(): Profile {
  const savedProfile = localStorage.getItem(
    PROFILE_STORAGE_KEY
  )

  if (!savedProfile) {
    return defaultProfile
  }

  try {
    const parsedProfile =
      JSON.parse(savedProfile) as Partial<Profile>

    return {
      name:
        typeof parsedProfile.name === "string"
          ? parsedProfile.name
          : defaultProfile.name,
      avatar:
        typeof parsedProfile.avatar === "string"
          ? parsedProfile.avatar
          : defaultProfile.avatar,
    }
  } catch {
    return defaultProfile
  }
}

export function useProfile() {
  const [profile, setProfile] =
    useState<Profile>(getInitialProfile)

  useEffect(() => {
    localStorage.setItem(
      PROFILE_STORAGE_KEY,
      JSON.stringify(profile)
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