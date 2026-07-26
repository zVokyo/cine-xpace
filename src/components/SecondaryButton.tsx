type Props = {
  children: React.ReactNode
  onClick?: () => void
  danger?: boolean
}

function SecondaryButton({ children, onClick, danger = false }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        background: danger ? "#FF4C4C" : "#151525",
        color: "#fff",
        border: danger ? "none" : "1px solid #6C4CFF",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: 600,
        boxShadow: danger
          ? "0 6px 16px rgba(255,76,76,.3)"
          : "0 6px 16px rgba(0,0,0,.25)",
      }}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
