function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090f",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "64px", margin: 0 }}>404</h1>

      <h2>Página não encontrada</h2>

      <p>O conteúdo que você procura não existe.</p>
    </div>
  )
}

export default NotFound
