import { useState } from "react"

function VolumeControl() {
  const [volume, setVolume] = useState(50)

  return (
    <div style={{ margin: "16px 0" }}>
      <p>🔊 Volume: {volume}%</p>

      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
      />
    </div>
  )
}

export default VolumeControl
