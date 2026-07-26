type Props = {
  title: string
  subtitle?: string
}

function PageTitle({ title, subtitle }: Props) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h1
        style={{
          margin: 0,
          fontSize: "2rem",
          color: "#fff",
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            marginTop: "8px",
            color: "#A0A0B8",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default PageTitle
