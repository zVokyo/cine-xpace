type Props = {
  count: number
}

function MessageCounter({ count }: Props) {
  return (
    <div
      style={{
        marginTop: "16px",
        padding: "10px 14px",
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "12px",
        display: "inline-block",
        color: "#fff",
        fontWeight: 600,
      }}
    >
      💬 Mensagens no chat: {count}
    </div>
  )
}

export default MessageCounter
