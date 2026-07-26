import { useEffect, useState } from "react"

const FAVORITES_STORAGE_KEY =
  "cine-xpace-favorites"

function getInitialFavorites(): string[] {
  const savedFavorites = localStorage.getItem(
    FAVORITES_STORAGE_KEY
  )

  if (!savedFavorites) {
    return []
  }

  try {
    const parsedFavorites: unknown =
      JSON.parse(savedFavorites)

    if (
      Array.isArray(parsedFavorites) &&
      parsedFavorites.every(
        (item) => typeof item === "string"
      )
    ) {
      return parsedFavorites
    }

    return []
  } catch {
    return []
  }
}

export function useFavorites() {
  const [favorites, setFavorites] =
    useState<string[]>(getInitialFavorites)

  useEffect(() => {
    localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favorites)
    )
  }, [favorites])

  function toggleFavorite(
    channelName: string
  ) {
    setFavorites((currentFavorites) => {
      if (
        currentFavorites.includes(channelName)
      ) {
        return currentFavorites.filter(
          (name) => name !== channelName
        )
      }

      return [
        ...currentFavorites,
        channelName,
      ]
    })
  }

  return {
    favorites,
    toggleFavorite,
  }
}
