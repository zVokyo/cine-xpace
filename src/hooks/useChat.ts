import { useState } from "react"

import type {
  Dispatch,
  SetStateAction,
} from "react"

import type {
  Message,
  Profile,
} from "../types"

type UseChatProps = {
  profile: Profile
  setMessages: Dispatch<
    SetStateAction<Message[]>
  >
}

export function useChat({
  profile,
  setMessages,
}: UseChatProps) {
  const [text, setText] = useState("")
  const [typing, setTyping] =
    useState(false)

  function sendMessage() {
    const normalizedText = text.trim()

    if (!normalizedText) {
      return
    }

    const newMessage: Message = {
      user: profile.name,
      avatar: profile.avatar,
      text: normalizedText,
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      newMessage,
    ])

    setText("")
    setTyping(false)
  }

  return {
    text,
    setText,
    typing,
    setTyping,
    sendMessage,
  }
}
