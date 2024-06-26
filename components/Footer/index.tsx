import { authorData } from "@/lib/config"
import Container from "../Container"

const Footer = () => {
  return (
    <footer className="realtive">
      <Container className="fixed bottom-0 right-0 left-0 z-20 flex justify-between px-4 py-2 w-full max-w-[769px] bg-primary leading-4">
        <p className="text-sm text-gray-100">Created by {authorData.name}</p>
        <a
          className="text-sm text-gray-100 no-underline hover:underline"
          href={authorData.socials[0].url}
          target="_blank">
          darrickdevelops.com
        </a>
      </Container>
    </footer>
  )
}

export default Footer
