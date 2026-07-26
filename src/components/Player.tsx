import type { Channel } from "../types"

type PlayerProps = {
  channel: Channel
}

function Player({
  channel,
}: PlayerProps) {
  return (
    <section className="player fade-in">
      <div className="player__video">
        <iframe
          className="player__iframe"
          src={channel.video}
          title={channel.name}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="player__content">
        <h2 className="player__title">
          {channel.icon} {channel.name}
        </h2>

        <p className="player__text">
          🎬 Categoria: {channel.category}
        </p>

        <p className="player__text">
          ▶️ Agora: {channel.now}
        </p>

        <h3 className="player__subtitle">
          Próximos
        </h3>

        {channel.next.map((item) => (
          <p
            key={item}
            className="player__next"
          >
            • {item}
          </p>
        ))}
      </div>
    </section>
  )
}

export default Player
