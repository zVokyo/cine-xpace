function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "24px",
        textAlign: "center",
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "18px",
        color: "#B8B8C8",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          color: "#fff",
        }}
      >
        🎬 Cine Xpace
      </h3>

      <p style={{ margin: "6px 0" }}>
        Sua plataforma de filmes, séries e canais ao vivo.
      </p>

      <p style={{ margin: "6px 0", fontSize: "14px", opacity: 0.8 }}>
        © {new Date().getFullYear()} Cine Xpace • React + TypeScript
      </p>
    </footer>
  )
}

export default Footer
