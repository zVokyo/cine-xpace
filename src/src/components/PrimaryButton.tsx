
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}

function PrimaryButton({ children, onClick, disabled = false }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%",
        padding: "14px",
        background: disabled ? "#444" : "#6C4CFF",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: 600,
        fontSize: "15px",
        boxShadow: disabled
          ? "none"
          : "0 8px 20px rgba(108,76,255,.35)",
        transition: "all .2s ease",
      }}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
