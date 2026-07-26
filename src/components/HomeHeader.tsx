import type { Theme } from "../types"

type HomeHeaderProps = {
  username: string
  theme: Theme
  sidebarOpen: boolean
  setTheme: (value: Theme) => void
  setSidebarOpen: (value: boolean) => void
  onLogout: () => void
}

function HomeHeader({
  username,
  theme,
  sidebarOpen,
  setTheme,
  setSidebarOpen,
  onLogout,
}: HomeHeaderProps) {
  const isDark = theme === "dark"

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
        marginBottom: "24px",
        padding: "16px",
        border: isDark
          ? "1px solid #27272a"
          : "1px solid #d4d4d8",
        borderRadius: "14px",
        background: isDark
          ? "#18181b"
          : "#ffffff",
        color: isDark
          ? "#ffffff"
          : "#18181b",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "22px",
          }}
        >
          Cine Xpace
        </h1>

        <p
          style={{
            margin: "4px 0 0",
            color: isDark
              ? "#a1a1aa"
              : "#52525b",
          }}
        >
          Olá, {username}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button
          type="button"
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
          style={primaryButtonStyle}
        >
          {sidebarOpen
            ? "Fechar menu"
            : "Abrir menu"}
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          style={{
            ...secondaryButtonStyle,
            color: isDark
              ? "#ffffff"
              : "#18181b",
          }}
        >
          {isDark
            ? "☀️ Tema claro"
            : "🌙 Tema escuro"}
        </button>

        <button
          type="button"
          onClick={onLogout}
          style={dangerButtonStyle}
        >
          Sair
        </button>
      </div>
    </header>
  )
}

const primaryButtonStyle = {
  padding: "10px 14px",
  border: "none",
  borderRadius: "10px",
  background: "#7c3aed",
  color: "#ffffff",
  fontWeight: 700,
  cursor: "pointer",
}

const secondaryButtonStyle = {
  padding: "10px 14px",
  border: "1px solid #52525b",
  borderRadius: "10px",
  background: "transparent",
  fontWeight: 700,
  cursor: "pointer",
}

const dangerButtonStyle = {
  padding: "10px 14px",
  border: "1px solid #ef4444",
  borderRadius: "10px",
  background: "transparent",
  color: "#f87171",
  fontWeight: 700,
  cursor: "pointer",
}

export default HomeHeader
