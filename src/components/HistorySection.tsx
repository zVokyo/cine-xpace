type HistorySectionProps = {
  history: string[]
  onEnter: (channelName: string) => void
}

function HistorySection({
  history,
  onEnter,
}: HistorySectionProps) {
  if (history.length === 0) {
    return null
  }

  const uniqueHistory = Array.from(new Set(history))

  return (
    <section>
      <h2>🕘 Histórico</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          margin: "16px 0",
        }}
      >
        {uniqueHistory.map((channelName) => (
          <button
            key={channelName}
            type="button"
            onClick={() => onEnter(channelName)}
            style={{
              padding: "10px 14px",
              border: "1px solid #3f3f46",
              borderRadius: "10px",
              background: "#18181b",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            ▶ {channelName}
          </button>
        ))}
      </div>
    </section>
  )
}

export default HistorySection