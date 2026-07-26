import { useState } from "react"

export function useFilters() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  function clearFilters() {
    setSearch("")
    setCategory("all")
  }

  return {
    search,
    setSearch,
    category,
    setCategory,
    clearFilters,
  }
}