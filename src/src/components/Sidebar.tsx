function Sidebar() {
  return (
    <aside
      style={{
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "18px",
        padding: "18px",
        marginBottom: "20px",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>📋 Menu</h3>

      <p>🏠 Início</p>
      <p>⭐ Favoritos</p>
      <p>📺 Assistir Depois</p>
      <p>⚙️ Configurações</p>
    </aside>
  )
}

export default Sidebar
