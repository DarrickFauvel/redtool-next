import Icon from "@/components/Icon"
import Link from "next/link"

type Item = {
  route: string
  icon: string
  name: string
}

type ButtonProp = {
  item: Item
}

function Button({ item }: ButtonProp) {
  return (
    <Link
      className="flex justify-start items-center bg-red-700 text-white rounded-lg gap-4 no-underline px-6 py-4 w-full h-16 shadow-md"
      href={item.route}>
      <Icon icon={item.icon} width={60} />
      {item.name}
    </Link>
  )
}
export default Button
