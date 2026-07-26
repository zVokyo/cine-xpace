import ChannelRow from "./ChannelRow"

import type { Channel } from "../types"

type RecommendedSectionProps = {
  channels: Channel[]
  onEnter: (channelName: string) => void
}

function RecommendedSection({
  channels,
  onEnter,
}: RecommendedSectionProps) {
  const recommendedChannels = channels.slice(0, 4)

  if (recommendedChannels.length === 0) {
    return null
  }

  return (
    <section>
      <h2>🎯 Recomendados</h2>

      <ChannelRow
        channels={recommendedChannels}
        onEnter={onEnter}
      />
    </section>
  )
}

export default RecommendedSection
