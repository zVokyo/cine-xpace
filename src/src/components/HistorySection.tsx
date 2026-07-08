type Props = {
  history: string[]
  onEnter: (channel: string) => void
}

function HistorySection({ history, onEnter }: Props) {
  if (history.length === 0) return null

  return (
    <section style={{ marginTop: "24px" }}>
      <h2>🕘 Histórico</h2>

      <div style={{ display: "grid", gap: "12px" }}>
        {history.map((channel) => (
          <button
            key={channel}
            onClick={() => onEnter(channel)}
            style={{
              padding: "14px 16px",
              background: "#151525",
              border: "1px solid #2A2A40",
              borderRadius: "14px",
              color: "#fff",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            ▶️ {channel}
          </button>
        ))}
      </div>
    </section>
  )
}

export default HistorySection
