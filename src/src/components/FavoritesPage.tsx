import type { Channel } from "../../types/channel"
import EmptyState from "./EmptyState"
import SectionTitle from "./SectionTitle"

type Props = {
  channels: Channel[]
  ratings: Record<string, number>
  onEnter: (channel: string) => void
}

function FavoritesPage({
  channels,
  ratings,
  onEnter,
}: Props) {
  return (
    <section style={{ marginTop: "24px" }}>
      <SectionTitle>⭐ Meus Favoritos</SectionTitle>

      {channels.length === 0 ? (
        <EmptyState
          title="Nenhum favorito"
          description="Você ainda não adicionou nenhum canal aos favoritos."
          icon="⭐"
        />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          {channels.map((channel) => (
            <button
              key={channel.name}
              onClick={() => onEnter(channel.name)}
              style={{
                padding: "16px",
                background: "#151525",
                border: "1px solid #2A2A40",
                borderRadius: "16px",
                color: "#fff",
                cursor: "pointer",
                textAlign: "left",
                transition: "all .2s ease",
                boxShadow: "0 8px 20px rgba(0,0,0,.25)",
              }}
            >
              <h3 style={{ margin: "0 0 10px" }}>
                {channel.icon} {channel.name}
              </h3>

              <p
                style={{
                  margin: "0 0 8px",
                  color: "#B8B8C8",
                }}
              >
                🎬 {channel.category}
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#FFD54A",
                  fontWeight: 600,
                }}
              >
                ⭐ {ratings[channel.name] ?? 0}/5
              </p>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

export default FavoritesPage
