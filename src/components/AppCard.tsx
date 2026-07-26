import { useState } from "react"

type Props = {
  children: React.ReactNode
}

function AppCard({ children }: Props) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#151525",
        border: hover ? "1px solid #6C4CFF" : "1px solid #2A2A40",
        borderRadius: "18px",
        padding: "20px",
        margin: "20px 0",
        width: "100%",
        maxWidth: "1200px",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: hover
          ? "0 12px 30px rgba(108,76,255,0.35)"
          : "0 8px 24px rgba(0,0,0,0.25)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
    >
      {children}
    </div>
  )
}

export default AppCard
