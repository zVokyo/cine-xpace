import { useEffect, useState } from "react"
import InputField from "./InputField"
import PrimaryButton from "./PrimaryButton"

type Profile = {
  name: string
  avatar: string
}

type Props = {
  profile: Profile
  onSave: (profile: Profile) => void
}

function EditProfile({ profile, onSave }: Props) {
  const [name, setName] = useState(profile.name)
  const [avatar, setAvatar] = useState(profile.avatar)

  useEffect(() => {
    setName(profile.name)
    setAvatar(profile.avatar)
  }, [profile])

  function handleSave() {
    onSave({
      name: name.trim() || profile.name,
      avatar: avatar.trim() || "👤",
    })
  }

  return (
    <div style={{ background: "#151525", border: "1px solid #2A2A40", borderRadius: "16px", padding: "16px", marginTop: "20px", color: "#fff" }}>
      <h3>✏️ Editar Perfil</h3>

      <InputField value={name} onChange={setName} placeholder="Nome" />

      <div style={{ height: "12px" }} />

      <InputField value={avatar} onChange={setAvatar} placeholder="Avatar emoji" />

      <div style={{ marginTop: "16px" }}>
        <PrimaryButton onClick={handleSave}>💾 Salvar Perfil</PrimaryButton>
      </div>
    </div>
  )
}

export default EditProfile
