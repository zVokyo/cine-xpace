import {
  useEffect,
  useState,
} from "react"

import { STORAGE_KEYS } from "../constants/storage"
import {
  load,
  save,
} from "../utils/storageHelper"

import type { Comments } from "../types"

function getInitialComments(): Comments {
  const savedComments = load<unknown>(
    STORAGE_KEYS.comments,
    {}
  )

  if (
    typeof savedComments !== "object" ||
    savedComments === null ||
    Array.isArray(savedComments)
  ) {
    return {}
  }

  const validComments: Comments = {}

  for (
    const [channelName, comments] of
    Object.entries(savedComments)
  ) {
    if (
      Array.isArray(comments) &&
      comments.every(
        (comment) =>
          typeof comment === "string"
      )
    ) {
      validComments[channelName] = comments
    }
  }

  return validComments
}

export function useComments() {
  const [comments, setComments] =
    useState<Comments>(getInitialComments)

  useEffect(() => {
    save(
      STORAGE_KEYS.comments,
      comments
    )
  }, [comments])

  function addComment(
    channelName: string,
    comment: string
  ) {
    const normalizedComment = comment.trim()

    if (!normalizedComment) {
      return
    }

    setComments((currentComments) => ({
      ...currentComments,
      [channelName]: [
        ...(currentComments[channelName] ?? []),
        normalizedComment,
      ],
    }))
  }

  return {
    comments,
    addComment,
  }
}
