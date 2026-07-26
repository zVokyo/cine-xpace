import {
  useEffect,
  useState,
} from "react"

import type {
  Comments,
} from "../types"

const COMMENTS_STORAGE_KEY =
  "cine-xpace-comments"

function getInitialComments(): Comments {
  const savedComments =
    localStorage.getItem(
      COMMENTS_STORAGE_KEY
    )

  if (!savedComments) {
    return {}
  }

  try {
    const parsedComments: unknown =
      JSON.parse(savedComments)

    if (
      typeof parsedComments !==
        "object" ||
      parsedComments === null ||
      Array.isArray(parsedComments)
    ) {
      return {}
    }

    const validComments: Comments = {}

    for (
      const [channelName, value]
      of Object.entries(
        parsedComments
      )
    ) {
      if (
        Array.isArray(value) &&
        value.every(
          (comment) =>
            typeof comment ===
            "string"
        )
      ) {
        validComments[channelName] =
          value
      }
    }

    return validComments
  } catch {
    return {}
  }
}

export function useComments() {
  const [comments, setComments] =
    useState<Comments>(
      getInitialComments
    )

  useEffect(() => {
    localStorage.setItem(
      COMMENTS_STORAGE_KEY,
      JSON.stringify(comments)
    )
  }, [comments])

  function addComment(
    channelName: string,
    comment: string
  ) {
    const normalizedComment =
      comment.trim()

    if (!normalizedComment) {
      return
    }

    setComments(
      (currentComments) => ({
        ...currentComments,
        [channelName]: [
          ...(
            currentComments[
              channelName
            ] ?? []
          ),
          normalizedComment,
        ],
      })
    )
  }

  return {
    comments,
    addComment,
  }
}
