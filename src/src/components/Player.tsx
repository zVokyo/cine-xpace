import type { Channel } from "../../types/channel"

type Props = {
  channel: Channel
}

function Player({ channel }: Props) {
  return (
    <div
      style={{
        marginTop: "20px",
        background: "#151525",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #2A2A40",
      }}
    >
      <div
        style={{
          height: "300px",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "48px",
        }}
      >
        {channel.thumbnail || channel.image ? (
          <img
            src={channel.thumbnail || channel.image}
            alt={channel.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          channel.icon
        )}
      </div>

      <div style={{ padding: "18px" }}>
        <h2>{channel.icon} {channel.name}</h2>
        <p>🎬 {channel.category}</p>
        <p>▶️ Agora: {channel.now}</p>
      </div>
    </div>
  )
}

export default Player