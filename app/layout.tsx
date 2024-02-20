import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Roboto_Flex } from "next/font/google"
import "./globals.css"
import Header from "../components/Header"

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
})
const roboto_flex = Roboto_Flex({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "redTool",
  description: "Tools for Target team members",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={roboto_flex.className}>
      <body className="relative z-10">
        <div className="mx-auto bg-white">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
