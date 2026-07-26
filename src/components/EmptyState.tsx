type Props = {
  title?: string
  description?: string
  icon?: string
}

function EmptyState({
  title = "Nada por aqui",
  description = "Não há conteúdo para exibir no momento.",
  icon = "📭",
}: Props) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "32px",
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "18px",
        textAlign: "center",
        color: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      <div
        style={{
          fontSize: "48px",
          marginBottom: "12px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#B8B8C8",
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default EmptyState
