import Link from "next/link"
import Icon from "@/components/Icon"

const BackLink = () => {
  return (
    <Link
      className="flex items-center font-bold text-lg no-underline mb-8 gap-1"
      href="/">
      <Icon icon="bi:arrow-left" />
      <span>Back</span>
    </Link>
  )
}
export default BackLink
