type Props = {
  category: string
  setCategory: (value: string) => void
}

function CategoryFilter({ category, setCategory }: Props) {
  const categories = ["Todos", "Filmes", "Séries", "Ao vivo", "Esportes"]

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      style={{
        width: "100%",
        padding: "14px 16px",
        marginTop: "16px",
        borderRadius: "14px",
        border: "1px solid #2A2A40",
        background: "#151525",
        color: "#fff",
        fontSize: "16px",
        outline: "none",
      }}
    >
      {categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}

export default CategoryFilter
