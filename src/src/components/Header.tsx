import Avatar from "./Avatar"
import Badge from "./Badge"

type Props = {
  username: string
}

function Header({ username }: Props) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 0",
        marginBottom: "24px",
        borderBottom: "1px solid #2A2A40",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          🎬 Cine Xpace
        </h1>

        <p
          style={{
            margin: "6px 0 0",
            color: "#B8B8C8",
            fontSize: "14px",
          }}
        >
          Sua central de entretenimento
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div
          style={{
            textAlign: "right",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              color: "#fff",
              marginBottom: "6px",
            }}
          >
            {username}
          </div>

          <Badge color="green">
            Online
          </Badge>
        </div>

        <Avatar
          name={username}
          avatar="👤"
          size={50}
        />
      </div>
    </header>
  )
}

export default Header
