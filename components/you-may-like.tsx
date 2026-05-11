"use client"

import SectionContainer from "./section-container"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from 'lucide-react'

type Card = {
  title: string
  href: string
  image: string
  subtitle: string
}

const cards: Card[] = [
  {
    title: "Обручальные кольца",
    subtitle: "Кольца, которые будут с вами всю жизнь",
    href: "https://merhatjewelry.com",
    image: "/teplo.jpg?height=900&width=1400",
  },
  {
    title: "Коллекция - Imperial",
    subtitle: "Роскошь вне времени и границ",
    href: "https://imperial.merhatjewelry.com",
    image: "/DIANA.jpg?height=900&width=1400",
  },
  {
    title: "Коллекция - Desire",
    subtitle: "Desire — украшения, которые выбирает сердце",
    href: "https://desire.merhatjewelry.com",
    image: "/princess.jpg?height=900&width=1400",
  },
]

function LikeCard({ c }: { c: Card }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-[28px] border border-[#1c5f67]/30 bg-white"
    >
      <Link href={c.href} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={c.image || "/placeholder.svg"}
            alt={c.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent" />
        </div>
        <div className="flex items-start justify-between p-5">
          <div>
            <h3
              className="text-xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {c.title}
            </h3>
            <p className="text-sm text-[#1c140a]/60">{c.subtitle}</p>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1c5f67]/60 text-[#1c140a] group-hover:bg-[#1c5f67]/10 group-hover:text-black transition-colors">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

export default function YouMayLike() {
  return (
    <SectionContainer id="you-may-like" className="py-16 md:py-24">
      <div className="mb-8 md:mb-12">
        <p
          className="text-sm tracking-[0.35em] uppercase text-[#1c5f67]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Вам может понравиться
        </p>
        <h2
          className="mt-3 text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Другие наши коллекции
        </h2>
      </div>

      {/* Мобилка: вертикальный список, десктоп: сетка 3 колонки */}
      <div className="space-y-6 md:hidden">
        {cards.map((c) => (
          <LikeCard c={c} key={c.href} />
        ))}
      </div>

      <div className="hidden md:grid grid-cols-3 gap-6 md:gap-8">
        {cards.map((c) => (
          <LikeCard c={c} key={c.href} />
        ))}
      </div>
    </SectionContainer>
  )
}