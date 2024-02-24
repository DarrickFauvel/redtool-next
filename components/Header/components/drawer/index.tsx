"use client"
import React, { useRef } from "react"
// import { Link } from "react-router-dom"
// import { useStore } from "@nanostores/react"
// import {
//   menuItems,
//   isMenuOpen,
//   activeMenuItemHighlight,
// } from "../../stores/menuStore"
import useOnClickOutside from "@/hooks/useOnClickOutside"

import Icon from "@/components/Icon"
import { activeMenuItemHighlight, menuItems } from "@/config"
import Link from "next/link"

// import classes from "./drawer.module.css"
// import { Icon } from "@iconify-icon/react"

type DrawerProps = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = ({ isMenuOpen, setIsMenuOpen }: DrawerProps) => {
  const drawerRef = useRef<HTMLInputElement | null>(null)
  // const $menuItems = useStore(menuItems)
  // const $isMenuOpen = useStore(isMenuOpen)
  // const $activeMenuItemHighlight = useStore(activeMenuItemHighlight)

  useOnClickOutside(drawerRef, () => setIsMenuOpen(false))

  const handleClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <section
      ref={drawerRef}
      // className={`${classes.drawer} ${$isMenuOpen && `${classes.open}`}`}
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
              className={`flex items-center gap-3 text-stone-300 ${
                item.name === activeMenuItemHighlight
                  ? "font-bold text-white"
                  : null
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
