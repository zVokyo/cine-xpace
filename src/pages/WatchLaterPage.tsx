import ChannelRow from "../src/components/ChannelRow"
import EmptyState from "../src/components/EmptyState"
import SectionTitle from "../src/components/SectionTitle"
import type { Channel } from "../types/channel"

type Props = {
  channels: Channel[]
  onEnter: (channel: string) => void
}

function WatchLaterPage({
  channels,
  onEnter,
}: Props) {
  return (
    <section style={{ marginTop: "24px" }}>
      <SectionTitle>📺 Assistir Depois</SectionTitle>

      {channels.length === 0 ? (
        <EmptyState
          title="Sua lista está vazia"
          description="Adicione canais para assistir mais tarde."
          icon="📺"
        />
      ) : (
        <ChannelRow
          channels={channels}
          onEnter={onEnter}
        />
      )}
    </section>
  )
}

export default WatchLaterPage

