import UserRole from "./UserRole"

type ProfileBadgeProps = {
  username: string
}

function ProfileBadge({ username }: ProfileBadgeProps) {
  const role = username.toLowerCase().includes("admin")
    ? "Admin"
    : username.toLowerCase().includes("vip")
    ? "VIP"
    : "Membro"

  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <button style={{ padding: "10px 14px", borderRadius: "999px", border: "none", background: "#6c4cff", color: "white" }}>
        🔔
      </button>

      <div style={{ background: "#151525", padding: "10px 14px", borderRadius: "999px" }}>
        👤 {username}
      </div>

      <UserRole role={role} />
    </div>
  )
}

export default ProfileBadge
