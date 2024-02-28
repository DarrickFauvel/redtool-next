"use client"
import React, { useRef } from "react"
import Link from "next/link"
import useOnClickOutside from "@/hooks/useOnClickOutside"
import Icon from "@/components/Icon"
import { activeMenuItemHighlight, menuItems } from "@/lib/config"
import { usePathname } from "next/navigation"

type DrawerProps = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = ({ isMenuOpen, setIsMenuOpen }: DrawerProps) => {
  const drawerRef = useRef<HTMLInputElement | null>(null)

  const pathname = usePathname()

  useOnClickOutside(drawerRef, () => setIsMenuOpen(false))

  const handleClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <section
      ref={drawerRef}
      className={`flex flex-col gap-6 absolute top-0 h-screen w-[230px] right-0 bg-zinc-800 text-white z-50 duration-200`}>
      <div className="flex justify-end items-center p-4 h-16 border-b-[1px] border-neutral-700">
        <Icon
          className="w-auto cursor-pointer"
          icon="ep:close-bold"
          onClick={handleClick}
          height={40}
        />
      </div>

      <ul className="flex flex-col gap-8 px-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.route}
              onClick={handleClick}
              className={`flex items-center gap-3 text-stone-300 hover:text-white ${
                item.route === pathname ? "font-bold text-white" : null
              }`}>
              <Icon icon={item.icon} height={40} />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Drawer
