import InputField from "./InputField"
import PrimaryButton from "./PrimaryButton"

type Message = {
  user: string
  avatar: string
  text: string
}

type Props = {
  messages: Message[]
  text: string
  typing: boolean
  setText: (value: string) => void
  setTyping: (value: boolean) => void
  sendMessage: () => void
}

function Chat({ messages, text, setText, setTyping, sendMessage }: Props) {
  return (
    <div style={{ background: "#151525", padding: "16px", borderRadius: "18px", marginTop: "20px", color: "#fff" }}>
      <h3>💬 Chat ao vivo</h3>

      {messages.map((msg, index) => (
        <p key={index}>
          {msg.avatar} <strong>{msg.user}:</strong> {msg.text}
        </p>
      ))}

      <InputField
        value={text}
        onChange={(value) => {
          setText(value)
          setTyping(true)
        }}
        placeholder="Digite sua mensagem..."
      />

      <div style={{ marginTop: "12px" }}>
        <PrimaryButton onClick={sendMessage}>Enviar</PrimaryButton>
      </div>
    </div>
  )
}

export default Chat
