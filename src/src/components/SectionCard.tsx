type Props = {
  title?: string
  children: React.ReactNode
}

function SectionCard({ title, children }: Props) {
  return (
    <section
      style={{
        marginTop: "20px",
        padding: "18px",
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "18px",
        color: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      {title && (
        <h2 style={{ marginTop: 0 }}>
          {title}
        </h2>
      )}

      {children}
    </section>
  )
}

export default SectionCard
