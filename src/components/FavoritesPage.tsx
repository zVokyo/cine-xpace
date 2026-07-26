import ChannelRow from "./ChannelRow"

import type {
  Channel,
  Ratings,
} from "../types"

type FavoritesPageProps = {
  channels: Channel[]
  ratings: Ratings
  onEnter: (channelName: string) => void
}

function FavoritesPage({
  channels,
  ratings,
  onEnter,
}: FavoritesPageProps) {
  if (channels.length === 0) {
    return (
      <section>
        <h2>⭐ Favoritos</h2>
        <p>
          Nenhum canal foi adicionado aos
          favoritos.
        </p>
      </section>
    )
  }

  return (
    <section>
      <h2>⭐ Favoritos</h2>

      <ChannelRow
        channels={channels}
        ratings={ratings}
        onEnter={onEnter}
      />
    </section>
  )
}

export default FavoritesPage
