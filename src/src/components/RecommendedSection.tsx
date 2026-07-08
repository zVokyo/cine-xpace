import type { Channel } from "../../types/channel"

type Props = {
  channels: Channel[]
  onEnter: (channel: string) => void
}

function RecommendedSection({ channels, onEnter }: Props) {
  return (
    <section style={{ marginTop: "24px" }}>
      <h2>🔥 Recomendados</h2>

      <div style={{ display: "grid", gap: "16px" }}>
        {channels.slice(0, 3).map((channel) => (
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
            }}
          >
            <h3>{channel.icon} {channel.name}</h3>
            <p>🎬 {channel.category}</p>
            <p>▶️ Agora: {channel.now}</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default RecommendedSection
