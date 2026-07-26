import type { Theme } from "../types"

type HomeHeaderProps = {
  username: string
  theme: Theme
  sidebarOpen: boolean
  setTheme: (value: Theme) => void
  setSidebarOpen: (
    value: boolean
  ) => void
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
    setTheme(
      isDark ? "light" : "dark"
    )
  }

  return (
    <header className="home-header fade-in">
      <div>
        <h1 className="home-header__title">
          Cine Xpace
        </h1>

        <p className="home-header__greeting">
          Olá, {username}
        </p>
      </div>

      <div className="home-header__actions">
        <button
          type="button"
          className="primary-button"
          onClick={() =>
            setSidebarOpen(
              !sidebarOpen
            )
          }
        >
          {sidebarOpen
            ? "Fechar menu"
            : "Abrir menu"}
        </button>

        <button
          type="button"
          className="secondary-button"
          onClick={toggleTheme}
        >
          {isDark
            ? "☀️ Tema claro"
            : "🌙 Tema escuro"}
        </button>

        <button
          type="button"
          className="danger-button"
          onClick={onLogout}
        >
          Sair
        </button>
      </div>
    </header>
  )
}

export default HomeHeader
