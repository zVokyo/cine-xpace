import {
  useEffect,
  useState,
} from "react"

import { STORAGE_KEYS } from "../constants/storage"
import {
  load,
  save,
} from "../utils/storageHelper"

import type { Ratings } from "../types"

function getInitialRatings(): Ratings {
  const savedRatings = load<unknown>(
    STORAGE_KEYS.ratings,
    {}
  )

  if (
    typeof savedRatings !== "object" ||
    savedRatings === null ||
    Array.isArray(savedRatings)
  ) {
    return {}
  }

  const validRatings: Ratings = {}

  for (
    const [channelName, rating] of
    Object.entries(savedRatings)
  ) {
    if (
      typeof rating === "number" &&
      Number.isFinite(rating) &&
      rating >= 1 &&
      rating <= 5
    ) {
      validRatings[channelName] = rating
    }
  }

  return validRatings
}

export function useRatings() {
  const [ratings, setRatings] =
    useState<Ratings>(getInitialRatings)

  useEffect(() => {
    save(
      STORAGE_KEYS.ratings,
      ratings
    )
  }, [ratings])

  function rateChannel(
    channelName: string,
    rating: number
  ) {
    const normalizedRating = Math.min(
      5,
      Math.max(1, rating)
    )

    setRatings((currentRatings) => ({
      ...currentRatings,
      [channelName]: normalizedRating,
    }))
  }

  return {
    ratings,
    rateChannel,
  }
}
