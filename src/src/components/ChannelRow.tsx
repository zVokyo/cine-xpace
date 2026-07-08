import type { Channel } from "../../types/channel"
import ChannelCard from "./ChannelCard"

type Props = {
  channels: Channel[]
  onEnter: (channel: string) => void
}

function ChannelRow({ channels, onEnter }: Props) {
  return (
    <section style={{ marginTop: "24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
        {channels.map((channel) => (
          <ChannelCard
            key={channel.name}
            name={channel.name}
            icon={channel.icon}
            now={channel.now}
            viewers={128}
            status="AO VIVO"
            thumbnail={channel.thumbnail || channel.image || ""}
            onEnter={() => onEnter(channel.name)}
          />
        ))}
      </div>
    </section>
  )
}

export default ChannelRow
