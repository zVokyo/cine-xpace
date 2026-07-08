import { useState } from "react"
import { getFavorites, saveFavorites } from "../utils/favorites"

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(getFavorites())

  function toggleFavorite(channelName: string) {
    const updated = favorites.includes(channelName)
      ? favorites.filter((name) => name !== channelName)
      : [...favorites, channelName]

    setFavorites(updated)
    saveFavorites(updated)

    return updated
  }

  return {
    favorites,
    toggleFavorite,
  }
}