import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import { roboto_flex } from "@/lib/fonts"
import { ThemeProvider } from "@/components/theme-provider"

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
    <html
      lang="en"
      className={`${roboto_flex.className}`}
      suppressHydrationWarning>
      <body className="relative z-10 transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto">
            <Header />
            <main className="pt-8 pb-12">
              <Container>{children}</Container>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
