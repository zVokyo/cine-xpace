type Props = {
  notifications: number
  onClick?: () => void
}

function NotificationBell({
  notifications,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "1px solid #2A2A40",
        background: "#151525",
        color: "#fff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "22px",
        boxShadow: "0 8px 20px rgba(0,0,0,.25)",
      }}
    >
      🔔

      {notifications > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-4px",
            right: "-4px",
            minWidth: "20px",
            height: "20px",
            borderRadius: "999px",
            background: "#FF4C4C",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 6px",
          }}
        >
          {notifications > 99 ? "99+" : notifications}
        </span>
      )}
    </button>
  )
}

export default NotificationBell
