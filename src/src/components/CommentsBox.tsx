import { useState } from "react"
import InputField from "./InputField"
import PrimaryButton from "./PrimaryButton"

type Props = {
  comments: string[]
  onAddComment: (comment: string) => void
}

function CommentsBox({ comments, onAddComment }: Props) {
  const [comment, setComment] = useState("")

  function handleSend() {
    if (!comment.trim()) return
    onAddComment(comment)
    setComment("")
  }

  return (
    <div style={{ background: "#151525", padding: "16px", borderRadius: "18px", marginTop: "20px", color: "#fff" }}>
      <h3>📝 Comentários</h3>

      {comments.map((item, index) => (
        <p key={index}>💬 {item}</p>
      ))}

      <InputField
        value={comment}
        onChange={setComment}
        placeholder="Escreva um comentário..."
      />

      <div style={{ marginTop: "12px" }}>
        <PrimaryButton onClick={handleSend}>Comentar</PrimaryButton>
      </div>
    </div>
  )
}

export default CommentsBox
