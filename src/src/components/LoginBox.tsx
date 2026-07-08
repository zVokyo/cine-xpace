import { useState } from "react"
import InputField from "./InputField"
import PrimaryButton from "./PrimaryButton"

type Props = {
  setLoggedIn: (value: boolean) => void
}

function LoginBox({ setLoggedIn }: Props) {
  const [username, setUsername] = useState("")

  function login() {
    if (!username.trim()) return
    localStorage.setItem("loggedIn", "true")
    localStorage.setItem("user", username)
    setLoggedIn(true)
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#09090f" }}>
      <div style={{ width: "100%", maxWidth: "420px", background: "#151525", border: "1px solid #2A2A40", borderRadius: "20px", padding: "32px" }}>
        <h2 style={{ color: "#fff", textAlign: "center" }}>🎬 Cine Xpace</h2>

        <InputField value={username} onChange={setUsername} placeholder="Digite seu nome..." />

        <div style={{ marginTop: "18px" }}>
          <PrimaryButton onClick={login}>Entrar</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default LoginBox
