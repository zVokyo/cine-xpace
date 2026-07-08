type Props = {
  open: boolean
  onToggle: () => void
}

function SidebarToggle({ open, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      style={{
        background: "#151525",
        color: "#fff",
        border: "1px solid #6C4CFF",
        borderRadius: "12px",
        padding: "10px 16px",
        margin: "12px 0",
        cursor: "pointer",
        fontWeight: 600,
        boxShadow: "0 6px 16px rgba(0,0,0,.25)",
      }}
    >
      {open ? "⬅️ Fechar menu" : "➡️ Abrir menu"}
    </button>
  )
}

export default SidebarToggle
