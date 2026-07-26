import type {
  PropsWithChildren,
} from "react"

function ResponsiveWrapper({
  children,
}: PropsWithChildren) {
  return (
    <div className="wrapper">
      {children}
    </div>
  )
}

export default ResponsiveWrapper
