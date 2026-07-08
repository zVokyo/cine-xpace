import { useState } from "react"

function PlaybackSpeed() {
  const [speed, setSpeed] = useState(1)

  return (
    <div style={{ margin: "16px 0" }}>
      <p>⏩ Velocidade: {speed}x</p>

      <select
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
      >
        <option value={0.5}>0.5x</option>
        <option value={1}>1x</option>
        <option value={1.25}>1.25x</option>
        <option value={1.5}>1.5x</option>
        <option value={2}>2x</option>
      </select>
    </div>
  )
}

export default PlaybackSpeed
