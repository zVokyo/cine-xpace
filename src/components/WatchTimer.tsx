import { useEffect, useState } from "react"

function WatchTimer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(seconds / 60)
  const rest = seconds % 60

  return (
    <div
      style={{
        marginTop: "16px",
        padding: "10px 14px",
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "12px",
        display: "inline-block",
        color: "#fff",
        fontWeight: 600,
      }}
    >
      ⏱️ Tempo assistido: {minutes}:{rest.toString().padStart(2, "0")}
    </div>
  )
}

export default WatchTimer
