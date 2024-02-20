"use client"
import { MouseEventHandler } from "react"
import { Icon as IconifyIcon } from "@iconify-icon/react"

type IconProps = {
  icon: string
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  height?: number
  width?: number
}

function Icon({ icon, className, onClick, height, width }: IconProps) {
  return (
    <IconifyIcon
      className={className}
      icon={icon}
      onClick={onClick}
      height={height}
      width={width}
    />
  )
}
export default Icon
