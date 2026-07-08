type Props = {
  isFavorite: boolean
  onToggle: () => void
}

function FavoriteButton({ isFavorite, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      style={{
        background: isFavorite ? "#FFD54A" : "#151525",
        color: isFavorite ? "#000" : "#fff",
        border: `1px solid ${isFavorite ? "#FFD54A" : "#6C4CFF"}`,
        borderRadius: "12px",
        padding: "10px 16px",
        margin: "8px",
        cursor: "pointer",
        fontWeight: 600,
        transition: "all .2s ease",
        boxShadow: isFavorite
          ? "0 8px 20px rgba(255,213,74,.35)"
          : "0 6px 16px rgba(0,0,0,.25)",
      }}
    >
      {isFavorite ? "⭐ Remover dos Favoritos" : "☆ Adicionar aos Favoritos"}
    </button>
  )
}

export default FavoriteButton
