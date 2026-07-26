type SearchCardProps = {
  search: string
  category: string
  setSearch: (value: string) => void
  setCategory: (value: string) => void
  onClearFilters: () => void
}

function SearchCard({
  search,
  category,
  setSearch,
  setCategory,
  onClearFilters,
}: SearchCardProps) {
  return (
    <section
      style={{
        display: "grid",
        gap: "12px",
        margin: "24px 0",
        padding: "16px",
        border: "1px solid #27272a",
        borderRadius: "14px",
        background: "#18181b",
      }}
    >
      <h2
        style={{
          margin: 0,
        }}
      >
        🔎 Buscar canais
      </h2>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Digite o nome do canal"
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "12px",
          border: "1px solid #3f3f46",
          borderRadius: "10px",
          background: "#09090f",
          color: "#ffffff",
        }}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid #3f3f46",
          borderRadius: "10px",
          background: "#09090f",
          color: "#ffffff",
        }}
      >
        <option value="all">Todas as categorias</option>
        <option value="Filmes">Filmes</option>
        <option value="Séries">Séries</option>
        <option value="Anime">Anime</option>
        <option value="Documentários">Documentários</option>
      </select>

      <button
        type="button"
        onClick={onClearFilters}
        style={{
          padding: "10px 14px",
          border: "none",
          borderRadius: "10px",
          background: "#52525b",
          color: "#ffffff",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Limpar filtros
      </button>
    </section>
  )
}

export default SearchCard
