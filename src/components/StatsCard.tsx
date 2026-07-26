type Props = {
  favoritesCount: number
  historyCount: number
}

function StatsCard({ favoritesCount, historyCount }: Props) {
  const stats = [
    {
      label: "Favoritos",
      value: favoritesCount,
      icon: "⭐",
      color: "#FFD54A",
    },
    {
      label: "Histórico",
      value: historyCount,
      icon: "🕘",
      color: "#6C4CFF",
    },
  ]

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "16px",
        marginTop: "16px",
      }}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          style={{
            background: "#151525",
            border: "1px solid #2A2A40",
            borderRadius: "16px",
            padding: "18px",
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(0,0,0,.25)",
          }}
        >
          <h2 style={{ margin: 0, color: stat.color }}>
            {stat.value}
          </h2>

          <p style={{ margin: "8px 0 0", color: "#B8B8C8" }}>
            {stat.icon} {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export default StatsCard
