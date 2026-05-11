import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import Header from "@/components/header"
import Hero from "@/components/hero"
import Collections from "@/components/collections"
import YouMayLike from "@/components/you-may-like"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CTA from "@/components/cta"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function Page() {
  return (
    <main
      className={[
        playfair.variable,
        cormorant.variable,
        inter.variable,
        // Light luxury palette
        "bg-[#fffdf7] text-[#1c140a] min-h-screen font-sans",
      ].join(" ")}
    >
      <Header />
      <Hero />
      <Collections />
      <CTA/>
      <About />
      <Contact />
      <YouMayLike />
      <Footer />
    </main>
  )
}
