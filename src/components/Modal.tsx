import type { ReactNode } from "react"

type Props = {
  open: boolean
  title?: string
  children: ReactNode
  onClose: () => void
}

function Modal({
  open,
  title,
  children,
  onClose,
}: Props) {
  if (!open) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.65)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "#151525",
          border: "1px solid #2A2A40",
          borderRadius: "18px",
          padding: "24px",
          color: "#fff",
          boxShadow: "0 16px 40px rgba(0,0,0,.45)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "18px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
            }}
          >
            {title}
          </h2>

          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}

export default Modal
