type Props = {
  theme: string
  setTheme: (theme: string) => void
}

function ThemeToggle({ theme, setTheme }: Props) {
  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      style={{
        background: "#151525",
        color: "#fff",
        border: "1px solid #6C4CFF",
        borderRadius: "12px",
        padding: "10px 16px",
        margin: "8px 0",
        cursor: "pointer",
        fontWeight: 600,
        boxShadow: "0 6px 16px rgba(0,0,0,.25)",
        transition: "all .2s ease",
      }}
    >
      {isDark ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
    </button>
  )
}

export default ThemeToggle
