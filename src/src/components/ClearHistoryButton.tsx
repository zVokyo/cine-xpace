type Props = {
  onClear: () => void
}

function ClearHistoryButton({ onClear }: Props) {
  return (
    <button
      onClick={onClear}
      style={{
        marginTop: "12px",
        padding: "10px 16px",
        background: "#FF4C4C",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: 600,
        boxShadow: "0 6px 16px rgba(255,76,76,.3)",
      }}
    >
      🗑️ Limpar histórico
    </button>
  )
}

export default ClearHistoryButton
