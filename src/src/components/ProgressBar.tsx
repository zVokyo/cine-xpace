type Props = {
  progress: number
}

function ProgressBar({ progress }: Props) {
  return (
    <div style={{ marginTop: "16px" }}>
      <div
        style={{
          height: "10px",
          background: "#2A2A40",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#6C4CFF",
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
