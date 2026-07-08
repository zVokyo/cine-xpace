type Props = {
  message?: string
}

function ErrorScreen({
  message = "Ocorreu um erro inesperado.",
}: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090f",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1>⚠️ Erro</h1>
      <p>{message}</p>
    </div>
  )
}

export default ErrorScreen
