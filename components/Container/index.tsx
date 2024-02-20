import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return <div className="px-4 mx-auto">{children}</div>
}
export default Container
