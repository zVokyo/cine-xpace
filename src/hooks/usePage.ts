import { useState } from "react"

import type { Page } from "../types"

export function usePage() {
  const [page, setPage] =
    useState<Page>("home")

  return {
    page,
    setPage,
  }
}