import { useState } from "react"

function SubtitlesToggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? "💬 Legendas ligadas" : "💬 Legendas desligadas"}
    </button>
  )
}

export default SubtitlesToggle
