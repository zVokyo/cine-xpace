import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  padding?: string
}

function Card({
  children,
  padding = "16px",
}: Props) {
  return (
    <div
      style={{
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "16px",
        padding,
        color: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      {children}
    </div>
  )
}

export default Card
