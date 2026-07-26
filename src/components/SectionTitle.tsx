type Props = {
  children: React.ReactNode
}

function SectionTitle({ children }: Props) {
  return (
    <h2
      style={{
        margin: "0 0 18px",
        color: "#fff",
        fontSize: "24px",
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {children}
    </h2>
  )
}

export default SectionTitle
