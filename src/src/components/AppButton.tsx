import { useState } from "react"

type Props = {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

function AppButton({ children, onClick, disabled = false }: Props) {
  const [hover, setHover] = useState(false)

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "#7B61FF" : "#6C4CFF",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        padding: "12px 18px",
        margin: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: 600,
        fontSize: "15px",
        opacity: disabled ? 0.6 : 1,
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hover
          ? "0 10px 24px rgba(108,76,255,.35)"
          : "0 6px 16px rgba(0,0,0,.25)",
        transition: "all .2s ease",
      }}
    >
      {children}
    </button>
  )
}

export default AppButton
