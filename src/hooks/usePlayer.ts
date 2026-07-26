import { useState } from "react"

import { channels } from "../data/channels"

import type { Channel } from "../types"

type AddToHistory = (
  channelName: string
) => void

export function usePlayer(
  addToHistory: AddToHistory
) {
  const [channel, setChannel] =
    useState<Channel | null>(null)

  function enterChannel(
    channelName: string
  ) {
    const selectedChannel =
      channels.find(
        (item) =>
          item.name === channelName
      )

    if (!selectedChannel) {
      return
    }

    setChannel(selectedChannel)
    addToHistory(selectedChannel.name)
  }

  function leaveChannel() {
    setChannel(null)
  }

  return {
    channel,
    enterChannel,
    leaveChannel,
  }
}
