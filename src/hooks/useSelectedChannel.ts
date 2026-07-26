import { useState } from "react"

export function useSelectedChannel() {
  const [selectedChannel, setSelectedChannelState] = useState<string | null>(
    localStorage.getItem("selectedChannel")
  )

  function setSelectedChannel(value: string | null) {
    setSelectedChannelState(value)

    if (value) {
      localStorage.setItem("selectedChannel", value)
    } else {
      localStorage.removeItem("selectedChannel")
    }
  }

  return {
    selectedChannel,
    setSelectedChannel,
  }
}
