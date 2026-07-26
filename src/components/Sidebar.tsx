function Sidebar() {
  return (
    <aside className="sidebar fade-in">
      <h2 className="sidebar__title">
        Menu
      </h2>

      <nav className="sidebar__list">
        <button
          type="button"
          className="sidebar__button"
        >
          🏠 Início
        </button>

        <button
          type="button"
          className="sidebar__button"
        >
          ⭐ Favoritos
        </button>

        <button
          type="button"
          className="sidebar__button"
        >
          📺 Assistir depois
        </button>

        <button
          type="button"
          className="sidebar__button"
        >
          ⚙️ Configurações
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
