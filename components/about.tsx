"use client"

import SectionContainer from "./section-container"
import { motion } from "framer-motion"

export default function About() {
  return (
    <SectionContainer id="about" className="py-20 md:py-14">
      <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-sm tracking-[0.35em] uppercase text-[#1c5f67]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            История создания — RINGS
          </p>
          <h2
            className="text-3xl md:text-4xl mt-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Символ выбора
          </h2>
          <p className="mt-5 text-[#1c140a]/70">
            Коллекция RINGS родилась как собрание характеров и чувств, воплощённых в кольцах. Каждое из них несёт собственный голос: Lume — сияние света, Nia — спокойная цельность, Aya — обещание любви, Grace — аристократическая грация, Mia — честная простота.
          </p>
          <p className="mt-4 text-[#1c140a]/70">
            В основе — бриллианты канадского происхождения и колумбийские изумруды, чья чистота и глубина признаны во всём мире. Камни отбираются вручную, ограняются в 57 граней и встают в оправу, созданную по авторским эскизам мастеров.
RINGS — это не просто коллекция украшений. Это выбор, который становится символом: «да» себе, «да» любви, «да» своей истории.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-[#1c5f67]/30 bg-white shadow-[0_20px_60px_rgba(217,177,68,0.12)]"
        >
          <video
            src="/nw.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      </div>
    </SectionContainer>
  )
}
