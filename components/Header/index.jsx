import Container from "../Container"
import Nav from "./components/nav"

// import { useStore } from "@nanostores/react"
// import { isMenuOpen } from "../../stores/menuStore"
// import { appData } from "../../stores/appStore"

// import { Link } from "react-router-dom"
// import Drawer from "../Drawer"

// import classes from "./header.module.css"
// import { Icon } from "@iconify-icon/react"

const Header = () => {
  // const $isMenuOpen = useStore(isMenuOpen)
  // const $appData = useStore(appData)

  return (
    <header className="relative top-0 h-16">
      <Container className="fixed top-0 left-0 right-0 z-20 w-full max-w-[769px] bg-red-600 h-16 text-white">
        <div className="z-20 w-full bg-red-600 text-white">
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header
