"use client"

import SectionContainer from "./section-container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <SectionContainer id="cta" className="py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        {/* Контент слева */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <p
              className="text-sm tracking-[0.35em] uppercase text-[#1c5f67] mb-3"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Давайте начнём
            </p>
            <h2
              className="text-3xl md:text-4xl leading-tight text-[#1c140a] mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
               Ищете кольцо, которое станет вашей личной историей?
            </h2>
            <p className="text-[#1c140a]/70">
              Оставьте заявку на консультацию или напишите нам в WhatsApp —
              мы свяжемся с вами в ближайшее время.
            </p>
          </div>

          {/* Кнопки справа */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
<Button
  asChild
  className="flex-1 sm:flex-none min-w-[180px] h-12 md:h-14 rounded-full px-6
    bg-[#1c5f67] hover:bg-[#1c3c35]
    border border-[#1c5f67]/90 text-white
    hover:brightness-110 shadow-[0_4px_20px_rgba(42,85,78,0.3)]
    transition-colors duration-200"
>
  <a href="#contact">Получить консультацию</a>
</Button>

<Button
  variant="outline"
  asChild
  className="flex-1 sm:flex-none min-w-[180px] h-12 md:h-14 rounded-full px-6
    border-2 border-[#1c5f67]/60 text-[#1c5f67]
    hover:bg-[#1c5f67]/10"
>
  <a 
    href="https://wa.me/77002437689" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Написать на WhatsApp
  </a>
</Button>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
