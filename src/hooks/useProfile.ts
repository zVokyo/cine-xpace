import { useState } from "react"
import { getProfile, saveProfile } from "../utils/profile"

type Profile = {
  name: string
  avatar: string
}

export function useProfile() {
  const [profile, setProfile] = useState<Profile>(getProfile())

  function updateProfile(newProfile: Profile) {
    setProfile(newProfile)
    saveProfile(newProfile)

    return newProfile
  }

  return {
    profile,
    updateProfile,
  }
}
