"use client"
import Link from "next/link"
import Icon from "@/components/Icon"
import { useState } from "react"
import { appTitle } from "@/lib/config"
import Drawer from "./drawer"
import { ModeToggle } from "@/components/ModeToggle"
import DrawerMenu from "@/components/DrawerMenu"
import { Button } from "@/components/ui/button"

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(true)
  }

  return (
    <nav className="flex justify-between items-center py-[.65em]">
      <Link
        className="flex items-center gap-2 text-[1.2rem] font-bold text-white no-underline m-0 p-0 leading-none"
        href="/">
        <Icon
          className="h-8 w-8 -mt-[6px] -mr-[3px] translate-y-[10%] -rotate-[15deg]"
          icon="material-symbols-light:phone-iphone-outline"
          height={40}
        />
        <span className="tracking-wider">{appTitle}</span>
      </Link>

      <div className="flex gap-4">
        <ModeToggle />
        <Icon
          className="w-auto cursor-pointer text-white"
          icon="lucide:menu"
          onClick={handleClick}
          height={40}
        />

        <DrawerMenu />

        {<Drawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </nav>
  )
}
export default Nav
