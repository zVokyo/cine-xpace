import ChannelRow from "../components/ChannelRow"

import type { Channel } from "../types"

type WatchLaterPageProps = {
  channels: Channel[]
  onEnter: (channelName: string) => void
}

function WatchLaterPage({
  channels,
  onEnter,
}: WatchLaterPageProps) {
  if (channels.length === 0) {
    return (
      <section>
        <h2>📺 Assistir depois</h2>
        <p>Nenhum canal foi adicionado à lista.</p>
      </section>
    )
  }

  return (
    <section>
      <h2>📺 Assistir depois</h2>

      <ChannelRow
        channels={channels}
        onEnter={onEnter}
      />
    </section>
  )
}

export default WatchLaterPage
