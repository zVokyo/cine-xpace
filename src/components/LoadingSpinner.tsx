type Props = {
  text?: string
}

function LoadingSpinner({
  text = "Carregando...",
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "40px",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "52px",
          height: "52px",
          border: "5px solid #2A2A40",
          borderTop: "5px solid #6C4CFF",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <span
        style={{
          color: "#B8B8C8",
          fontWeight: 600,
          fontSize: "15px",
        }}
      >
        {text}
      </span>

      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  )
}

export default LoadingSpinner
