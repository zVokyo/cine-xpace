type UserRoleProps = {
  role: string
}

function UserRole({ role }: UserRoleProps) {
  const color =
    role === "Admin" ? "#ff4d4d" :
    role === "VIP" ? "#ffd700" :
    "#6c4cff"

  return (
    <span
      style={{
        background: color,
        color: "white",
        padding: "6px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      {role}
    </span>
  )
}

export default UserRole
