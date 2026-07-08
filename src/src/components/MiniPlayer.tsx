import Badge from "./Badge"

type Props = {
  channelName: string
}

function MiniPlayer({ channelName }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        minWidth: "280px",
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "18px",
        padding: "16px 18px",
        color: "#fff",
        boxShadow: "0 12px 28px rgba(0,0,0,.35)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        <strong>🎬 Mini Player</strong>

        <Badge color="red">
          AO VIVO
        </Badge>
      </div>

      <p
        style={{
          margin: 0,
          color: "#B8B8C8",
          lineHeight: 1.5,
        }}
      >
        Assistindo:
      </p>

      <h3
        style={{
          margin: "8px 0 0",
          fontSize: "18px",
          color: "#fff",
        }}
      >
        {channelName}
      </h3>
    </div>
  )
}

export default MiniPlayer