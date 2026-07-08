type Props = {
  message: string
}

function Toast({ message }: Props) {
  if (!message) return null

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "linear-gradient(135deg, #6C4CFF, #8A6CFF)",
        color: "#fff",
        padding: "14px 18px",
        borderRadius: "14px",
        border: "1px solid #7A5CFF",
        boxShadow: "0 10px 28px rgba(108,76,255,.35)",
        fontWeight: 600,
        fontSize: "15px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        zIndex: 9999,
        animation: "toastIn .25s ease",
      }}
    >
      <span style={{ fontSize: "18px" }}>✅</span>

      <span>{message}</span>

      <style>
        {`
          @keyframes toastIn {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  )
}

export default Toast
