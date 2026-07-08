import { useState } from "react"
import { getComments, saveComments } from "../utils/comments"

export function useComments() {
  const [comments, setComments] = useState<Record<string, string[]>>(
    getComments()
  )

  function addComment(channelName: string, comment: string) {
    const updated = {
      ...comments,
      [channelName]: [...(comments[channelName] || []), comment],
    }

    setComments(updated)
    saveComments(updated)

    return updated
  }

  return {
    comments,
    addComment,
  }
}
