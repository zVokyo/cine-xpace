import { useState } from "react"

export function useSidebar() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  return {
    sidebarOpen,
    setSidebarOpen,
  }
}
