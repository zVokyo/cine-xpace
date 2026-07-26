import { useState } from "react"

import type { Message } from "../types"

const initialMessages: Message[] = [
  {
    user: "Sistema",
    avatar: "",
    text: "Bem-vindo ao chat do Cine Xpace!",
  },
]

export function useChatMessages() {
  const [messages, setMessages] =
    useState<Message[]>(initialMessages)

  function clearMessages() {
    setMessages(initialMessages)
  }

  return {
    messages,
    setMessages,
    clearMessages,
  }
}
