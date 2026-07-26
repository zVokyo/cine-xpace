type Props = {
  count: number
}

function ViewersCount({ count }: Props) {
  return (
    <div
      style={{
        marginTop: "16px",
        padding: "10px 14px",
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "12px",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        color: "#fff",
        fontWeight: 600,
      }}
    >
      <span style={{ color: "#4CAF50", fontSize: "18px" }}>🟢</span>
      <span>{count.toLocaleString()} assistindo agora</span>
    </div>
  )
}

export default ViewersCount
