import type { PropsWithChildren } from "react"

function SectionTitle({
  children,
}: PropsWithChildren) {
  return (
    <h2 className="section-title">
      {children}
    </h2>
  )
}

export default SectionTitle
