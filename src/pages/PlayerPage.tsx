import type { Channel, Message } from "../types"

type PlayerPageProps = {
  channel: Channel
  cinemaMode: boolean
  favorites: string[]
  watchLater: string[]
  ratings: Record<string, number>
  comments: Record<string, string[]>
  messages: Message[]
  text: string
  typing: boolean
  reactions: string[]
  toast: string
  setText: (value: string) => void
  setTyping: (value: boolean) => void
  setReactions: (value: string[]) => void
  setToast: (value: string) => void
  onBack: () => void
  onToggleCinema: () => void
  onToggleFavorite: () => void
  onToggleWatchLater: () => void
  onRate: (value: number) => void
  onSendMessage: () => void
  onAddComment: (comment: string) => void
}

function PlayerPage({
  channel,
  cinemaMode,
  favorites,
  watchLater,
  ratings,
  comments,
  messages,
  text,
  typing,
  reactions,
  setText,
  setTyping,
  setReactions,
  onBack,
  onToggleCinema,
  onToggleFavorite,
  onToggleWatchLater,
  onRate,
  onSendMessage,
  onAddComment,
}: PlayerPageProps) {
  const isFavorite = favorites.includes(channel.name)
  const isWatchLater = watchLater.includes(channel.name)
  const rating = ratings[channel.name] || 0
  const channelComments = comments[channel.name] || []

  return (
    <main style={{ minHeight: "100vh", background: "#09090f", color: "white", padding: 24 }}>
      <button onClick={onBack}>⬅ Voltar</button>

      <h1>{channel.icon} {channel.name}</h1>
      <p>{channel.now}</p>

      <div style={{ background: "#111827", padding: 24, borderRadius: 12, marginTop: 16 }}>
        {channel.video ? (
          <video src={channel.video} controls style={{ width: "100%" }} />
        ) : (
          <p>Vídeo não disponível.</p>
        )}
      </div>

      <button onClick={onToggleCinema}>
        {cinemaMode ? "Sair do modo cinema" : "Modo cinema"}
      </button>

      <button onClick={onToggleFavorite}>
        {isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      </button>

      <button onClick={onToggleWatchLater}>
        {isWatchLater ? "Remover de assistir depois" : "Assistir depois"}
      </button>

      <h3>Avaliação: {rating} ⭐</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => onRate(star)}>
          ⭐
        </button>
      ))}

      <h3>Próximos</h3>
      {channel.next.map((item) => (
        <p key={item}>{item}</p>
      ))}

      <h3>Chat</h3>
      {messages.map((message, index) => (
        <p key={index}>
          {message.avatar} <strong>{message.user}:</strong> {message.text}
        </p>
      ))}

      {typing && <p>Digitando...</p>}

      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          setTyping(true)
        }}
        placeholder="Digite sua mensagem..."
      />

      <button onClick={onSendMessage}>Enviar</button>

      <h3>Reações</h3>
      <button onClick={() => setReactions([...reactions, "❤️"])}>❤️</button>
      <button onClick={() => setReactions([...reactions, "🔥"])}>🔥</button>
      <button onClick={() => setReactions([...reactions, "👏"])}>👏</button>

      <p>{reactions.join(" ")}</p>

      <h3>Comentários</h3>
      <button onClick={() => onAddComment("Muito bom!")}>
        Comentar: Muito bom!
      </button>

      {channelComments.map((comment, index) => (
        <p key={index}>💬 {comment}</p>
      ))}
    </main>
  )
}

export default PlayerPage
