import { STORAGE_KEYS } from "../constants/storage"
import { remove } from "../utils/storageHelper"

type Props = {
  setLoggedIn: (value: boolean) => void
}

function LogoutButton({
  setLoggedIn,
}: Props) {
  function logout() {
    remove(STORAGE_KEYS.loggedIn)
    remove(STORAGE_KEYS.user)

    setLoggedIn(false)
  }

  return (
    <button
      type="button"
      onClick={logout}
      style={{
        background: "#ff4c4c",
        color: "#ffffff",
        border: "none",
        borderRadius: "12px",
        padding: "10px 16px",
        margin: "8px 0",
        cursor: "pointer",
        fontWeight: 600,
        boxShadow:
          "0 6px 16px rgba(255, 76, 76, 0.3)",
      }}
    >
      🚪 Sair
    </button>
  )
}

export default LogoutButton
