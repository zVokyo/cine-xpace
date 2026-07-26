type Props = {
  favoritesCount: number
}

function LiveNotice({ favoritesCount }: Props) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "18px",
        background: "linear-gradient(135deg, #6C4CFF, #4A35B5)",
        color: "#fff",
        borderRadius: "18px",
        boxShadow: "0 8px 24px rgba(108,76,255,.35)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>🔴 Ao Vivo</h3>

      <p style={{ margin: "8px 0" }}>
        Há conteúdos sendo transmitidos neste momento.
      </p>

      <p style={{ margin: 0 }}>
        ⭐ Você possui <strong>{favoritesCount}</strong>{" "}
        {favoritesCount === 1 ? "favorito" : "favoritos"} salvo
        {favoritesCount === 1 ? "" : "s"}.
      </p>
    </div>
  )
}

export default LiveNotice
