import SearchBar from "./SearchBar"
import CategoryFilter from "./CategoryFilter"
import SectionCard from "./SectionCard"
import SecondaryButton from "./SecondaryButton"

type Props = {
  search: string
  setSearch: (value: string) => void
  category: string
  setCategory: (value: string) => void
  onClearFilters: () => void
}

function SearchCard({
  search,
  setSearch,
  category,
  setCategory,
  onClearFilters,
}: Props) {
  return (
    <SectionCard title="🔎 Buscar Conteúdo">
      <SearchBar search={search} setSearch={setSearch} />

      <div style={{ marginTop: "16px" }}>
        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div style={{ marginTop: "16px" }}>
        <SecondaryButton onClick={onClearFilters}>
          Limpar filtros
        </SecondaryButton>
      </div>
    </SectionCard>
  )
}

export default SearchCard
