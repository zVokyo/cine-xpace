type Props = {
  isSaved: boolean
  onToggle: () => void
}

function WatchLaterButton({ isSaved, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      style={{
        width: "100%",
        background: isSaved ? "#4CAF50" : "#151525",
        color: "#fff",
        border: `1px solid ${isSaved ? "#4CAF50" : "#6C4CFF"}`,
        borderRadius: "12px",
        padding: "12px 16px",
        marginTop: "12px",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "15px",
        transition: "all .2s ease",
        boxShadow: isSaved
          ? "0 8px 20px rgba(76,175,80,.35)"
          : "0 8px 20px rgba(0,0,0,.25)",
      }}
    >
      {isSaved
        ? "✅ Remover de Assistir Depois"
        : "🕒 Assistir Depois"}
    </button>
  )
}

export default WatchLaterButton
