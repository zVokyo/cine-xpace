import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  color?: "purple" | "green" | "yellow" | "red"
}

function Badge({ children, color = "purple" }: Props) {
  const colors = {
    purple: "#6C4CFF",
    green: "#4CAF50",
    yellow: "#FFD54A",
    red: "#FF4C4C",
  }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 10px",
        borderRadius: "999px",
        background: colors[color],
        color: color === "yellow" ? "#000" : "#fff",
        fontSize: "13px",
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  )
}

export default Badge
