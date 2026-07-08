type Props = {
  open: boolean
  onClose: () => void
  children?: React.ReactNode
}

function SettingsModal({ open, onClose, children }: Props) {
  if (!open) return null

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          background: "#151525",
          color: "white",
          borderRadius: "16px",
          padding: "24px",
          border: "1px solid #2A2A40",
        }}
      >
        <h2>⚙️ Configurações</h2>

        {children}

        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            padding: "10px 16px",
            borderRadius: "10px",
            border: "none",
            background: "#6C4CFF",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Fechar
        </button>
      </div>
    </div>
  )
}

export default SettingsModal
