import type {
  Channel,
  Ratings,
} from "../types"

type ChannelRowProps = {
  channels: Channel[]
  ratings?: Ratings
  onEnter: (
    channelName: string
  ) => void
}

function ChannelRow({
  channels,
  ratings = {},
  onEnter,
}: ChannelRowProps) {
  if (channels.length === 0) {
    return (
      <p className="empty-message">
        Nenhum canal encontrado.
      </p>
    )
  }

  return (
    <div className="channel-grid">
      {channels.map((channel) => {
        const rating =
          ratings[channel.name]

        return (
          <article
            key={channel.name}
            className="
              card
              channel-card
              card-hover
              fade-in
            "
          >
            <h3>
              {channel.icon}{" "}
              {channel.name}
            </h3>

            <p className="channel-card__secondary">
              Categoria:{" "}
              {channel.category}
            </p>

            <p>
              Agora: {channel.now}
            </p>

            {rating !== undefined && (
              <p className="channel-card__rating">
                ⭐ Nota: {rating}
              </p>
            )}

            <button
              type="button"
              className="primary-button"
              onClick={() =>
                onEnter(channel.name)
              }
            >
              Assistir
            </button>
          </article>
        )
      })}
    </div>
  )
}

export default ChannelRow
