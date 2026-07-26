import ChannelRow from "./ChannelRow"

import type {
  Channel,
  Ratings,
} from "../types"

type TopRatedSectionProps = {
  channels: Channel[]
  ratings: Ratings
  onEnter: (channelName: string) => void
}

function TopRatedSection({
  channels,
  ratings,
  onEnter,
}: TopRatedSectionProps) {
  const topRatedChannels = [...channels]
    .filter(
      (channel) =>
        ratings[channel.name] !== undefined
    )
    .sort(
      (firstChannel, secondChannel) =>
        (ratings[secondChannel.name] ?? 0) -
        (ratings[firstChannel.name] ?? 0)
    )
    .slice(0, 4)

  if (topRatedChannels.length === 0) {
    return null
  }

  return (
    <section>
      <h2>🏆 Mais bem avaliados</h2>

      <ChannelRow
        channels={topRatedChannels}
        ratings={ratings}
        onEnter={onEnter}
      />
    </section>
  )
}

export default TopRatedSection
