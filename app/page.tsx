import { menuItems } from "@/config"
import Button from "../components/Button"
import Qrcode from "../components/Qrcode"

export default function Home() {
  const menuItemsWithoutAbout = menuItems.filter(
    (item) => item.route !== "about"
  )

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-4">
        <ul className="flex flex-col gap-8 max-w-max">
          {menuItemsWithoutAbout.map((item) => (
            <li key={item.name}>
              <Button item={item} />
            </li>
          ))}
        </ul>

        <div className="grid gap-1 mt-16 max-w-52 text-center">
          <Qrcode />
        </div>
      </section>
    </>
  )
}
