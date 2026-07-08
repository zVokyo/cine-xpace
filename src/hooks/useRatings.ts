import { useState } from "react"
import { getRatings, saveRatings } from "../utils/ratings"

export function useRatings() {
  const [ratings, setRatings] = useState<Record<string, number>>(getRatings())

  function rateChannel(channelName: string, value: number) {
    const updated = {
      ...ratings,
      [channelName]: value,
    }

    setRatings(updated)
    saveRatings(updated)

    return updated
  }

  return {
    ratings,
    rateChannel,
  }
}
