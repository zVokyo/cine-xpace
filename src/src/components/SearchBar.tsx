import InputField from "./InputField"

type Props = {
  search: string
  setSearch: (value: string) => void
}

function SearchBar({ search, setSearch }: Props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <InputField
        value={search}
        onChange={setSearch}
        placeholder="🔎 Buscar canal..."
      />
    </div>
  )
}

export default SearchBar
