type ClearHistoryButtonProps = {
  onClear: () => void
}

function ClearHistoryButton({
  onClear,
}: ClearHistoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClear}
      style={{
        margin: "8px 0 20px",
        padding: "10px 14px",
        border: "1px solid #ef4444",
        borderRadius: "10px",
        background: "transparent",
        color: "#f87171",
        fontWeight: 700,
        cursor: "pointer",
      }}
    >
      🗑️ Limpar histórico
    </button>
  )
}

export default ClearHistoryButton
