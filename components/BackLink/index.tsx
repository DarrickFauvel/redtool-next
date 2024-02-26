"use client"
import Link from "next/link"
import Icon from "@/components/Icon"
import { useRouter } from "next/navigation"

const BackLink = () => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.back()
  }

  return (
    <Link
      className="flex items-center font-bold text-lg no-underline mb-8 gap-1 hover:text-black"
      href="#"
      onClick={handleClick}>
      <Icon icon="bi:arrow-left" />
      <span>Back</span>
    </Link>
  )
}
export default BackLink
