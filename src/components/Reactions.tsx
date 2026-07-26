type Props = {
  reactions: string[]
  setReactions: (value: string[]) => void
}

function Reactions({ reactions, setReactions }: Props) {
  const emojis = ["👍", "❤️", "😂", "🔥", "👏"]

  function addReaction(emoji: string) {
    setReactions([...reactions, emoji])
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>🎭 Reações</h3>

      {emojis.map((emoji) => (
        <button
          key={emoji}
          onClick={() => addReaction(emoji)}
          style={{
            fontSize: "22px",
            margin: "6px",
            padding: "8px 12px",
            borderRadius: "12px",
            border: "1px solid #6C4CFF",
            background: "#151525",
            cursor: "pointer",
          }}
        >
          {emoji}
        </button>
      ))}

      <p>Total de reações: {reactions.length}</p>
    </div>
  )
}

export default Reactions
