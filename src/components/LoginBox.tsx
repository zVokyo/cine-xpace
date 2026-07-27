import { useState } from "react"

import { STORAGE_KEYS } from "../constants/storage"
import { save } from "../utils/storageHelper"

import InputField from "./InputField"
import PrimaryButton from "./PrimaryButton"

type Props = {
  setLoggedIn: (value: boolean) => void
}

function LoginBox({
  setLoggedIn,
}: Props) {
  const [username, setUsername] = useState("")

  function login() {
    const name = username.trim()

    if (!name) {
      return
    }

    save(
      STORAGE_KEYS.loggedIn,
      true
    )

    save(
      STORAGE_KEYS.user,
      name
    )

    setLoggedIn(true)
  }

  return (
    <main className="login-page">
      <section className="card login-card fade-in">
        <h1 className="login-title">
          Cine Xpace
        </h1>

        <div className="form">
          <InputField
            value={username}
            onChange={setUsername}
            placeholder="Digite seu nome..."
          />

          <PrimaryButton onClick={login}>
            Entrar
          </PrimaryButton>
        </div>
      </section>
    </main>
  )
}

export default LoginBox
