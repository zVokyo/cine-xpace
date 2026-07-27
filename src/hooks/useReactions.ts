import { useState } from "react"

const MAX_REACTIONS = 50

export function useReactions() {
  const [reactions, setReactions] = useState<string[]>([])

  function addReaction(reaction: string) {
    setReactions((currentReactions) => [
      ...currentReactions,
      reaction,
    ].slice(-MAX_REACTIONS))
  }

  function clearReactions() {
    setReactions([])
  }

  return {
    reactions,
    setReactions,
    addReaction,
    clearReactions,
  }
}
