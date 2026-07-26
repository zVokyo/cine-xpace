type ChannelCardProps = {
  name: string
  icon: string
  now: string
  viewers: number
  status: string
  thumbnail: string
  onEnter: () => void
}

function ChannelCard({
  name,
  icon,
  now,
  viewers,
  status,
  thumbnail,
  onEnter,
}: ChannelCardProps) {
  const isLive = status === "AO VIVO"

  return (
    <div
      style={{
        marginTop: "20px",
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "18px",
        overflow: "hidden",
        color: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            height: "220px",
            background: "#0f0f1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "56px",
          }}
        >
          {icon}
        </div>
      )}

      <div style={{ padding: "20px" }}>
        <h2 style={{ marginTop: 0 }}>
          {icon} {name}
        </h2>

        <p style={{ color: isLive ? "#ff4d4d" : "#777", fontWeight: 700 }}>
          {isLive ? "🔴 AO VIVO" : "⚫ OFFLINE"}
        </p>

        <p>🎬 Agora: {now}</p>
        <p>👥 {viewers} assistindo</p>

        <button
          disabled={!isLive}
          onClick={onEnter}
          style={{
            padding: "12px 16px",
            borderRadius: "12px",
            border: "none",
            background: isLive ? "#6C4CFF" : "#444",
            color: "#fff",
            marginTop: "8px",
            cursor: isLive ? "pointer" : "not-allowed",
            fontWeight: 600,
          }}
        >
          {isLive ? "Entrar" : "Indisponível"}
        </button>
      </div>
    </div>
  )
}

export default ChannelCard
