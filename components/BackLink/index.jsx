import Link from "next/link"
import Icon from "@/components/Icon"
// import { Link } from "react-router-dom"

// import classes from "./backlink.module.css"

const BackLink = () => {
  return (
    <Link
      className="flex items-center font-bold text-lg no-underline mb-8 gap-1 hover:text-black"
      href={"/"}>
      <Icon icon="bi:arrow-left" />
      <span>Back</span>
    </Link>
  )
}
export default BackLink
