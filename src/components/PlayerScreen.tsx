import { useState } from "react"

import type {
  Channel,
  Comments,
  Message,
  Ratings,
} from "../types"

type PlayerScreenProps = {
  channel: Channel
  cinemaMode: boolean
  favorites: string[]
  watchLater: string[]
  ratings: Ratings
  comments: Comments
  messages: Message[]
  text: string
  typing: boolean
  reactions: string[]
  toast: string

  setCinemaMode: (value: boolean) => void
  setText: (value: string) => void
  setTyping: (value: boolean) => void
  setToast: (value: string) => void

  onBack: () => void
  onToggleFavorite: (
    channelName: string
  ) => void
  onToggleWatchLater: (
    channelName: string
  ) => void
  onRate: (
    channelName: string,
    rating: number
  ) => void
  onSendMessage: () => void
  onClearMessages: () => void
  onAddComment: (
    channelName: string,
    comment: string
  ) => void
  onAddReaction: (
    reaction: string
  ) => void
  onClearReactions: () => void
}

function PlayerScreen({
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
  toast,
  setCinemaMode,
  setText,
  setTyping,
  setToast,
  onBack,
  onToggleFavorite,
  onToggleWatchLater,
  onRate,
  onSendMessage,
  onClearMessages,
  onAddComment,
  onAddReaction,
  onClearReactions,
}: PlayerScreenProps) {
  const [comment, setComment] =
    useState("")

  const isFavorite =
    favorites.includes(channel.name)

  const isWatchLater =
    watchLater.includes(channel.name)

  const channelRating =
    ratings[channel.name] ?? 0

  const channelComments =
    comments[channel.name] ?? []

  function handleAddComment() {
    const normalizedComment =
      comment.trim()

    if (!normalizedComment) {
      setToast("Digite um comentário.")
      return
    }

    onAddComment(
      channel.name,
      normalizedComment
    )

    setComment("")
  }

  function handleSendMessage() {
    if (!text.trim()) {
      setToast("Digite uma mensagem.")
      return
    }

    onSendMessage()
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: cinemaMode
          ? "0"
          : "24px",
        background: "#09090f",
        color: "#ffffff",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: cinemaMode
            ? "100%"
            : "1200px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:
              "space-between",
            gap: "12px",
            flexWrap: "wrap",
            padding: "16px",
          }}
        >
          <button
            type="button"
            onClick={onBack}
            style={actionButtonStyle}
          >
            ← Voltar
          </button>

          <h1
            style={{
              margin: 0,
              fontSize: "22px",
            }}
          >
            {channel.icon} {channel.name}
          </h1>

          <button
            type="button"
            onClick={() =>
              setCinemaMode(!cinemaMode)
            }
            style={primaryButtonStyle}
          >
            {cinemaMode
              ? "Sair do cinema"
              : "Modo cinema"}
          </button>
        </header>

        {toast && (
          <div
            style={{
              margin: "0 16px 16px",
              padding: "12px",
              borderRadius: "10px",
              background: "#312e81",
            }}
          >
            {toast}
          </div>
        )}

        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%",
            background: "#000000",
          }}
        >
          <iframe
            src={channel.video}
            title={channel.name}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </div>

        <section
          style={{
            display: "grid",
            gap: "20px",
            padding: "20px 16px",
          }}
        >
          <section>
            <h2>Agora</h2>
            <p>{channel.now}</p>
          </section>

          <section>
            <h2>Próximos</h2>

            {channel.next.map(
              (nextItem) => (
                <p key={nextItem}>
                  • {nextItem}
                </p>
              )
            )}
          </section>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() =>
                onToggleFavorite(
                  channel.name
                )
              }
              style={actionButtonStyle}
            >
              {isFavorite
                ? "★ Remover favorito"
                : "☆ Adicionar favorito"}
            </button>

            <button
              type="button"
              onClick={() =>
                onToggleWatchLater(
                  channel.name
                )
              }
              style={actionButtonStyle}
            >
              {isWatchLater
                ? "✓ Remover da lista"
                : "＋ Assistir depois"}
            </button>
          </div>

          <section>
            <h2>Avaliação</h2>

            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {[1, 2, 3, 4, 5].map(
                (rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() =>
                      onRate(
                        channel.name,
                        rating
                      )
                    }
                    style={{
                      ...actionButtonStyle,
                      color:
                        rating <=
                        channelRating
                          ? "#facc15"
                          : "#ffffff",
                    }}
                  >
                    ★ {rating}
                  </button>
                )
              )}
            </div>
          </section>

          <section>
            <h2>Reações</h2>

            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {[
                "👍",
                "❤️",
                "😂",
                "😮",
              ].map((reaction) => (
                <button
                  key={reaction}
                  type="button"
                  onClick={() =>
                    onAddReaction(
                      reaction
                    )
                  }
                  style={actionButtonStyle}
                >
                  {reaction}
                </button>
              ))}

              {reactions.length > 0 && (
                <button
                  type="button"
                  onClick={
                    onClearReactions
                  }
                  style={dangerButtonStyle}
                >
                  Limpar reações
                </button>
              )}
            </div>

            {reactions.length > 0 && (
              <p>{reactions.join(" ")}</p>
            )}
          </section>

          <section>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent:
                  "space-between",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <h2>Chat</h2>

              {messages.length > 1 && (
                <button
                  type="button"
                  onClick={onClearMessages}
                  style={dangerButtonStyle}
                >
                  Limpar chat
                </button>
              )}
            </div>

            <div
              style={{
                display: "grid",
                gap: "8px",
                maxHeight: "240px",
                overflowY: "auto",
                padding: "12px",
                borderRadius: "12px",
                background: "#18181b",
              }}
            >
              {messages.map(
                (message, index) => (
                  <div
                    key={`${message.user}-${index}`}
                  >
                    <strong>
                      {message.user}:
                    </strong>{" "}
                    {message.text}
                  </div>
                )
              )}
            </div>

            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "12px",
              }}
            >
              <input
                type="text"
                value={text}
                onChange={(event) => {
                  const value =
                    event.target.value

                  setText(value)
                  setTyping(
                    value.trim().length > 0
                  )
                }}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter"
                  ) {
                    handleSendMessage()
                  }
                }}
                placeholder="Digite uma mensagem"
                style={inputStyle}
              />

              <button
                type="button"
                onClick={handleSendMessage}
                style={primaryButtonStyle}
              >
                Enviar
              </button>
            </div>

            {typing && (
              <p
                style={{
                  color: "#a1a1aa",
                }}
              >
                Você está digitando...
              </p>
            )}
          </section>

          <section>
            <h2>Comentários</h2>

            <div
              style={{
                display: "flex",
                gap: "8px",
              }}
            >
              <input
                type="text"
                value={comment}
                onChange={(event) =>
                  setComment(
                    event.target.value
                  )
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter"
                  ) {
                    handleAddComment()
                  }
                }}
                placeholder="Escreva um comentário"
                style={inputStyle}
              />

              <button
                type="button"
                onClick={handleAddComment}
                style={primaryButtonStyle}
              >
                Adicionar
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gap: "8px",
                marginTop: "12px",
              }}
            >
              {channelComments.length ===
                0 && (
                <p
                  style={{
                    color: "#a1a1aa",
                  }}
                >
                  Nenhum comentário ainda.
                </p>
              )}

              {channelComments.map(
                (
                  currentComment,
                  index
                ) => (
                  <p
                    key={`${currentComment}-${index}`}
                    style={{
                      margin: 0,
                      padding: "10px",
                      borderRadius: "10px",
                      background: "#18181b",
                    }}
                  >
                    {currentComment}
                  </p>
                )
              )}
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}

const actionButtonStyle = {
  padding: "10px 14px",
  border: "1px solid #52525b",
  borderRadius: "10px",
  background: "#27272a",
  color: "#ffffff",
  cursor: "pointer",
}

const primaryButtonStyle = {
  padding: "10px 14px",
  border: "none",
  borderRadius: "10px",
  background: "#7c3aed",
  color: "#ffffff",
  fontWeight: 700,
  cursor: "pointer",
}

const dangerButtonStyle = {
  padding: "10px 14px",
  border: "1px solid #ef4444",
  borderRadius: "10px",
  background: "transparent",
  color: "#f87171",
  cursor: "pointer",
}

const inputStyle = {
  width: "100%",
  minWidth: 0,
  padding: "11px",
  border: "1px solid #3f3f46",
  borderRadius: "10px",
  background: "#18181b",
  color: "#ffffff",
}

export default PlayerScreen
