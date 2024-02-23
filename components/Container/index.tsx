import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={`px-4 mx-auto max-w-[769px] ${className}`}>{children}</div>
  )
}
export default Container
