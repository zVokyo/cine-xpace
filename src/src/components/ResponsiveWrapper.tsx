type Props = {
  children: React.ReactNode
}

function ResponsiveWrapper({ children }: Props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  )
}

export default ResponsiveWrapper
