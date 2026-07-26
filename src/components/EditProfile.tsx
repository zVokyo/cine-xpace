import { useEffect, useState } from "react"

import type { FormEvent } from "react"
import type { Profile } from "../types"

type EditProfileProps = {
  profile: Profile
  onSave: (profile: Profile) => void
}

function EditProfile({
  profile,
  onSave,
}: EditProfileProps) {
  const [name, setName] = useState(
    profile.name
  )

  const [avatar, setAvatar] = useState(
    profile.avatar
  )

  useEffect(() => {
    setName(profile.name)
    setAvatar(profile.avatar)
  }, [profile])

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const normalizedName = name.trim()

    if (!normalizedName) {
      return
    }

    onSave({
      name: normalizedName,
      avatar: avatar.trim(),
    })
  }

  return (
    <section
      style={{
        margin: "20px 0",
        padding: "16px",
        border: "1px solid #27272a",
        borderRadius: "14px",
        background: "#18181b",
      }}
    >
      <h2
        style={{
          margin: "0 0 16px",
        }}
      >
        👤 Editar perfil
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        <label>
          <span
            style={{
              display: "block",
              marginBottom: "6px",
            }}
          >
            Nome
          </span>

          <input
            type="text"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Digite seu nome"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              border: "1px solid #3f3f46",
              borderRadius: "10px",
              background: "#09090f",
              color: "#ffffff",
            }}
          />
        </label>

        <label>
          <span
            style={{
              display: "block",
              marginBottom: "6px",
            }}
          >
            URL do avatar
          </span>

          <input
            type="url"
            value={avatar}
            onChange={(event) =>
              setAvatar(event.target.value)
            }
            placeholder="https://..."
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              border: "1px solid #3f3f46",
              borderRadius: "10px",
              background: "#09090f",
              color: "#ffffff",
            }}
          />
        </label>

        {avatar && (
          <img
            src={avatar}
            alt={`Avatar de ${name}`}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #7c3aed",
            }}
            onError={(event) => {
              event.currentTarget.style.display =
                "none"
            }}
          />
        )}

        <button
          type="submit"
          style={{
            padding: "11px 16px",
            border: "none",
            borderRadius: "10px",
            background: "#7c3aed",
            color: "#ffffff",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Salvar perfil
        </button>
      </form>
    </section>
  )
}

export default EditProfile
