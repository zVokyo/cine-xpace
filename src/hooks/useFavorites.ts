import {
  useEffect,
  useState,
} from "react"

import { STORAGE_KEYS } from "../constants/storage"
import {
  load,
  save,
} from "../utils/storageHelper"

function getInitialFavorites(): string[] {
  const savedFavorites = load<unknown>(
    STORAGE_KEYS.favorites,
    []
  )

  if (
    Array.isArray(savedFavorites) &&
    savedFavorites.every(
      (item) => typeof item === "string"
    )
  ) {
    return savedFavorites
  }

  return []
}

export function useFavorites() {
  const [favorites, setFavorites] =
    useState<string[]>(getInitialFavorites)

  useEffect(() => {
    save(
      STORAGE_KEYS.favorites,
      favorites
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