import type { Profile } from "../types"

type UseAppHandlersProps = {
  clearHistory: () => void
  clearFilters: () => void
  updateProfile: (profile: Profile) => void
  setToast: (message: string) => void
}

export function useAppHandlers({
  clearHistory,
  clearFilters,
  updateProfile,
  setToast,
}: UseAppHandlersProps) {
  function handleClearHistory() {
    clearHistory()
    setToast("Histórico limpo!")
  }

  function handleClearFilters() {
    clearFilters()
    setToast("Filtros limpos!")
  }

  function handleSaveProfile(profile: Profile) {
    updateProfile(profile)
    setToast("Perfil salvo!")
  }

  function handleNotifications() {
    setToast("Você tem notificações!")
  }

  return {
    handleClearHistory,
    handleClearFilters,
    handleSaveProfile,
    handleNotifications,
  }
}
