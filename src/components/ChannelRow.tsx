import type {
  Channel,
  Ratings,
} from "../types"

type ChannelRowProps = {
  channels: Channel[]
  ratings?: Ratings
  onEnter: (channelName: string) => void
}

function ChannelRow({
  channels,
  ratings = {},
  onEnter,
}: ChannelRowProps) {
  if (channels.length === 0) {
    return (
      <p
        style={{
          margin: "16px 0",
          color: "#a1a1aa",
        }}
      >
        Nenhum canal encontrado.
      </p>
    )
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
        margin: "20px 0",
      }}
    >
      {channels.map((channel) => {
        const rating =
          ratings[channel.name]

        return (
          <article
            key={channel.name}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "16px",
              border: "1px solid #27272a",
              borderRadius: "14px",
              background: "#18181b",
              color: "#ffffff",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "18px",
              }}
            >
              {channel.icon} {channel.name}
            </h3>

            <p
              style={{
                margin: 0,
                color: "#a1a1aa",
              }}
            >
              Categoria: {channel.category}
            </p>

            <p
              style={{
                margin: 0,
              }}
            >
              Agora: {channel.now}
            </p>

            {rating !== undefined && (
              <p
                style={{
                  margin: 0,
                  color: "#facc15",
                }}
              >
                ⭐ Nota: {rating}
              </p>
            )}

            <button
              type="button"
              onClick={() =>
                onEnter(channel.name)
              }
              style={{
                marginTop: "auto",
                padding: "10px 14px",
                border: "none",
                borderRadius: "10px",
                background: "#7c3aed",
                color: "#ffffff",
                fontWeight: 700,
                cursor: "pointer",
              }}
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
