import Avatar from "./Avatar"
import Badge from "./Badge"

type Props = {
  username: string
}

function ProfilePanel({ username }: Props) {
  return (
    <div
      style={{
        padding: "18px",
        background: "#151525",
        border: "1px solid #2A2A40",
        borderRadius: "18px",
        color: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>👤 Perfil</h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <Avatar name={username} avatar="👤" size={52} />

        <div>
          <p style={{ margin: "0 0 8px" }}>
            Usuário: <strong>{username}</strong>
          </p>

          <Badge color="green">Online</Badge>
        </div>
      </div>
    </div>
  )
}

export default ProfilePanel
