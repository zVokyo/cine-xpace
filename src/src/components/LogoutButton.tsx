type Props = {
  setLoggedIn: (value: boolean) => void
}

function LogoutButton({ setLoggedIn }: Props) {
  function logout() {
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("user")
    setLoggedIn(false)
  }

  return (
    <button
      onClick={logout}
      style={{
        background: "#FF4C4C",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        padding: "10px 16px",
        margin: "8px 0",
        cursor: "pointer",
        fontWeight: 600,
        boxShadow: "0 6px 16px rgba(255,76,76,.3)",
      }}
    >
      🚪 Sair
    </button>
  )
}

export default LogoutButton
