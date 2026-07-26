import AppButton from "./AppButton"

import type { Page } from "../types"

type NavigationMenuProps = {
  setPage: (page: Page) => void
}

function NavigationMenu({
  setPage,
}: NavigationMenuProps) {
  return (
    <nav
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        margin: "20px 0",
      }}
    >
      <AppButton
        onClick={() => setPage("home")}
      >
        🏠 Início
      </AppButton>

      <AppButton
        onClick={() =>
          setPage("favorites")
        }
      >
        ⭐ Favoritos
      </AppButton>

      <AppButton
        onClick={() =>
          setPage("watchLater")
        }
      >
        📺 Assistir depois
      </AppButton>
    </nav>
  )
}

export default NavigationMenu