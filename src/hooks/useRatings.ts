import {
  useEffect,
  useState,
} from "react"

import type {
  Ratings,
} from "../types"

const RATINGS_STORAGE_KEY =
  "cine-xpace-ratings"

function getInitialRatings(): Ratings {
  const savedRatings =
    localStorage.getItem(
      RATINGS_STORAGE_KEY
    )

  if (!savedRatings) {
    return {}
  }

  try {
    const parsedRatings: unknown =
      JSON.parse(savedRatings)

    if (
      typeof parsedRatings !== "object" ||
      parsedRatings === null ||
      Array.isArray(parsedRatings)
    ) {
      return {}
    }

    const validRatings: Ratings = {}

    for (
      const [channelName, value]
      of Object.entries(parsedRatings)
    ) {
      if (
        typeof value === "number" &&
        value >= 1 &&
        value <= 5
      ) {
        validRatings[channelName] =
          value
      }
    }

    return validRatings
  } catch {
    return {}
  }
}

export function useRatings() {
  const [ratings, setRatings] =
    useState<Ratings>(
      getInitialRatings
    )

  useEffect(() => {
    localStorage.setItem(
      RATINGS_STORAGE_KEY,
      JSON.stringify(ratings)
    )
  }, [ratings])

  function rateChannel(
    channelName: string,
    rating: number
  ) {
    const normalizedRating =
      Math.min(
        5,
        Math.max(1, rating)
      )

    setRatings(
      (currentRatings) => ({
        ...currentRatings,
        [channelName]:
          normalizedRating,
      })
    )
  }

  return {
    ratings,
    rateChannel,
  }
}
