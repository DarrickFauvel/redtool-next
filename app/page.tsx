import Icon from "@/components/Icon"
import { menuItems } from "@/config"
import Image from "next/image"
import Link from "next/link"
import Button from "./components/button"
import Qrcode from "./components/qrcode"

export default function Home() {
  const menuItemsWithoutAbout = menuItems.filter(
    (item) => item.route !== "about"
  )

  return (
    <main>
      <section className="flex flex-col justify-center items-center mt-4">
        <ul className="flex flex-col gap-8 max-w-max">
          {menuItemsWithoutAbout.map((item) => (
            <li key={item.name}>
              <Button item={item} />
            </li>
          ))}
        </ul>

        <div className="grid gap-1 mt-16 max-w-40 text-center">
          <Qrcode />
        </div>
      </section>
    </main>
  )
}
