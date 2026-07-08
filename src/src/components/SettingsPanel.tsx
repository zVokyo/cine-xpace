type Props = {
  theme: string
}

function SettingsPanel({ theme }: Props) {
  return (
    <div
      style={{
        marginTop: "16px",
        padding: "16px",
        background: "#09090f",
        border: "1px solid #2A2A40",
        borderRadius: "14px",
        color: "#fff",
      }}
    >
      <h3 style={{ marginTop: 0 }}>⚙️ Preferências</h3>

      <p>Tema atual: {theme === "dark" ? "🌙 Escuro" : "☀️ Claro"}</p>
      <p>Notificações: Ativadas</p>
      <p>Player: Automático</p>
    </div>
  )
}

export default SettingsPanel
