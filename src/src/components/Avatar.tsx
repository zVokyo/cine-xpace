type Props = {
  name: string
  avatar?: string
  size?: number
}

function Avatar({
  name,
  avatar = "👤",
  size = 48,
}: Props) {
  return (
    <div
      title={name}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6C4CFF, #8A6CFF)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: `${size * 0.45}px`,
          border: "2px solid #2A2A40",
          boxShadow: "0 6px 18px rgba(108,76,255,.35)",
          flexShrink: 0,
        }}
      >
        {avatar}
      </div>

      <span
        style={{
          color: "#fff",
          fontWeight: 600,
          fontSize: "15px",
        }}
      >
        {name}
      </span>
    </div>
  )
}

export default Avatar
