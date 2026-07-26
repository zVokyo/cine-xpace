type BackButtonProps = {
  onBack: () => void
}

function BackButton({ onBack }: BackButtonProps) {
  return (
    <button
      onClick={onBack}
      style={{
        padding: "12px 16px",
        borderRadius: "12px",
        border: "none",
        background: "#6c4cff",
        color: "white",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      ← Voltar aos canais
    </button>
  )
}

export default BackButton
