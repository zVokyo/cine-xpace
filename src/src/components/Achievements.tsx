type Props = {
  favoritesCount: number
  historyCount: number
}

function Achievements({
  favoritesCount,
  historyCount,
}: Props) {
  const achievements = [
    {
      title: "Primeiro Favorito",
      unlocked: favoritesCount >= 1,
      icon: "⭐",
    },
    {
      title: "Colecionador",
      unlocked: favoritesCount >= 10,
      icon: "🏆",
    },
    {
      title: "Maratonista",
      unlocked: historyCount >= 5,
      icon: "🎬",
    },
  ]

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "16px",
        background: "#09090f",
        border: "1px solid #2A2A40",
        borderRadius: "14px",
        color: "#fff",
      }}
    >
      <h3 style={{ marginTop: 0 }}>🏅 Conquistas</h3>

      {achievements.map((achievement) => (
        <div
          key={achievement.title}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            borderBottom: "1px solid #2A2A40",
          }}
        >
          <span>
            {achievement.icon} {achievement.title}
          </span>

          <span
            style={{
              color: achievement.unlocked ? "#4CAF50" : "#888",
              fontWeight: 600,
            }}
          >
            {achievement.unlocked ? "Desbloqueada" : "Bloqueada"}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Achievements
