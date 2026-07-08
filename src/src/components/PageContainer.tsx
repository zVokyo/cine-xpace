type Props = {
  children: React.ReactNode
}

function PageContainer({ children }: Props) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#09090f",
        color: "#fff",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
        }}
      >
        {children}
      </div>
    </main>
  )
}

export default PageContainer
