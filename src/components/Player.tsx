import type { Channel } from "../types"

type PlayerProps = {
  channel: Channel
}

function Player({ channel }: PlayerProps) {
  return (
    <section
      style={{
        marginTop: "20px",
        overflow: "hidden",
        border: "1px solid #2a2a40",
        borderRadius: "18px",
        background: "#151525",
      }}
    >
      <div
        style={{
          display: "grid",
          placeItems: "center",
          minHeight: "300px",
          background: "#000000",
        }}
      >
        <iframe
          src={channel.video}
          title={channel.name}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            border: "none",
          }}
        />
      </div>

      <div
        style={{
          padding: "18px",
        }}
      >
        <h2
          style={{
            margin: "0 0 10px",
          }}
        >
          {channel.icon} {channel.name}
        </h2>

        <p
          style={{
            margin: "6px 0",
          }}
        >
          🎬 Categoria: {channel.category}
        </p>

        <p
          style={{
            margin: "6px 0",
          }}
        >
          ▶️ Agora: {channel.now}
        </p>

        <h3
          style={{
            marginBottom: "8px",
          }}
        >
          Próximos
        </h3>

        {channel.next.map((item) => (
          <p
            key={item}
            style={{
              margin: "5px 0",
              color: "#a1a1aa",
            }}
          >
            • {item}
          </p>
        ))}
      </div>
    </section>
  )
}

export default Player
