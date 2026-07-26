import type { PropsWithChildren } from "react"

type PageContainerProps = PropsWithChildren

function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="page">
      <div className="wrapper">
        {children}
      </div>
    </main>
  )
}

export default PageContainer
