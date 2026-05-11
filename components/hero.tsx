// "use client"

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
// import { useEffect, useState } from "react"
// import { ChevronDown } from "lucide-react"

// function Sparkles() {
//   const items = Array.from({ length: 22 })
//   return (
//     <div className="pointer-events-none absolute inset-0">
//       {items.map((_, i) => {
//         const size = 4 + ((i * 7) % 10)
//         const left = (i * 37) % 100
//         const top = (i * 19) % 100
//         const delay = (i % 7) * 0.35
//         return (
//           <motion.span
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               left: `${left}%`,
//               top: `${top}%`,
//               width: size,
//               height: size,
//               background:
//                 "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(242,215,135,0.9) 40%, rgba(217,177,68,0.35) 60%, transparent 70%)",
//               filter: "blur(0.3px)",
//             }}
//             initial={{ opacity: 0, scale: 0.6 }}
//             animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.8, 1.25, 0.8] }}
//             transition={{ duration: 3 + (i % 5), delay, repeat: Infinity, ease: "easeInOut" }}
//           />
//         )
//       })}
//     </div>
//   )
// }

// export default function Hero() {
//   const mx = useMotionValue(0)
//   const my = useMotionValue(0)
//   const sx = useSpring(mx, { stiffness: 60, damping: 15 })
//   const sy = useSpring(my, { stiffness: 60, damping: 15 })
//   const translateX = useTransform(sx, [-50, 50], ["-1%", "1%"])
//   const translateY = useTransform(sy, [-50, 50], ["-1%", "1%"])

//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768)
//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   function onMouseMove(e: React.MouseEvent) {
//     if (isMobile) return
//     const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top
//     const cx = rect.width / 2
//     const cy = rect.height / 2
//     mx.set(((x - cx) / cx) * 50)
//     my.set(((y - cy) / cy) * 50)
//   }

//   return (
//     <>
//       {/* Fullscreen video for mobile - FIXED HEIGHT */}
//       {isMobile && (
//         <div className="relative h-[100svh] w-full">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//           >
//             <source src="/3 (1).mp4" type="video/mp4" />
//           </video>
          
//           {/* Scroll indicator */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5, duration: 0.5 }}
//             className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//               className="text-white flex flex-col items-center"
//             >
//               <p className="text-sm mb-1 text-white/80">Листайте вниз</p>
//               <ChevronDown className="h-6 w-6 text-white/80" />
//             </motion.div>
//           </motion.div>
//         </div>
//       )}

//       {/* Content section - NO EXTRA SPACE */}
//       <section
//         onMouseMove={onMouseMove}
//         className={`relative ${isMobile ? "min-h-0" : "min-h-[92vh]"} w-full ${isMobile ? "bg-white" : ""} overflow-hidden flex ${isMobile ? "flex-col" : "items-center"}`}
//         id="hero-content"
//       >
//         {/* Background effects - REMOVED FOR MOBILE */}
//         {!isMobile && (
//           <div className="absolute inset-0 z-[1]">
//             <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5faf9] to-[#e8f2f0]" />
//             <div
//               className="absolute -top-1/3 -left-1/4 h-[120vh] w-[80vw] rounded-full opacity-50 blur-3xl"
//               style={{
//                 background: "radial-gradient(circle, rgba(42,85,78,0.35), transparent 60%)",
//               }}
//             />
//             <div
//               className="absolute -bottom-1/3 -right-1/4 h-[120vh] w-[80vw] rounded-full opacity-50 blur-3xl"
//               style={{
//                 background: "radial-gradient(circle, rgba(42,85,68,0.25), transparent 60%)",
//               }}
//             />
//             <Sparkles />
//           </div>
//         )}

//         {/* Content container - TIGHT PADDING */}
//         <div className={`relative z-10 w-full ${isMobile ? "py-6 px-4" : ""}`}>
//           <div className={`mx-auto grid max-w-7xl items-center ${isMobile ? "gap-4" : "gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 py-20 md:py-28"}`}>
//             <motion.div
//               initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className={`text-center md:text-left ${isMobile ? "mt-0" : ""}`}
//             >
//               <h1 className={`${isMobile ? "text-3xl mb-3" : "text-4xl sm:text-5xl md:text-6xl mb-6"} text-[#1c5f67] leading-tight`}>
//                 Кольца, которые будут с вами всю жизнь
//               </h1>

//               <p className={`${isMobile ? "text-base mb-4" : "text-xl sm:text-xl mb-6 md:mb-10"} max-w-xl mx-auto md:mx-0 text-[#1c140a]/70`}>
//                 Наши обручальные кольца создаются так, чтобы пережить моду, годы и расстояния.
//                 Авторский дизайн, благородные металлы, камни, закреплённые вручную — всё ради того,
//                 чтобы ваш символ любви сохранил своё сияние десятилетиями.
//               </p>

//               <div className={`flex ${isMobile ? "flex-col gap-2" : "flex-col sm:flex-row gap-3 sm:gap-4"} justify-center md:justify-start`}>
// <Button
//   asChild
//   className={`${isMobile ? "h-10 min-w-[140px]" : "h-12 md:h-14 min-w-[180px]"} 
//               flex-1 sm:flex-none rounded-full px-6 
//               bg-[#1c5f67] text-white 
//               border border-[#1c5f67]/80 
//               hover:bg-[#234840] 
//               shadow-[0_4px_20px_rgba(42,85,78,0.4)] 
//               transition-all`}
// >
//   <a href="#collections">Получить консультацию</a>
// </Button>

// <Button
//   variant="outline"
//   asChild
//   className={`${isMobile ? "h-10 min-w-[140px]" : "h-12 md:h-14 min-w-[180px]"} flex-1 sm:flex-none rounded-full px-4 border-2 border-[#1c5f67] text-[#1c5f67] hover:bg-[#1c5f67]/10`}
// >
//   <a href="#contact">Написать на WhatsApp</a>
// </Button>

//               </div>
//             </motion.div>

//             {/* Desktop-only video/image */}
//             {!isMobile && (
//               <motion.div
//                 style={{ x: translateX, y: translateY }}
//                 className="relative aspect-[4/5] w-full overflow-hidden rounded-[999px] border border-[#d9b144]/30 bg-white shadow-[0_30px_80px_rgba(217,177,68,0.20)]"
//               >
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="absolute inset-0 w-full h-full object-cover"
//                 >
//                   <source src="/3 (1).mp4" type="video/mp4" />
//                   <Image src="/main.jpg" alt="Ювелирное изделие" fill className="object-cover" />
//                 </video>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }





// "use client"

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
// import { useEffect, useState } from "react"
// import { ChevronDown } from "lucide-react"

// function Sparkles() {
//   const items = Array.from({ length: 22 })
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">
//       {items.map((_, i) => {
//         const size = 4 + ((i * 7) % 10)
//         const left = (i * 37) % 100
//         const top = (i * 19) % 100
//         const delay = (i % 7) * 0.35
//         return (
//           <motion.span
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               left: `${left}%`,
//               top: `${top}%`,
//               width: size,
//               height: size,
//               background:
//                 "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(242,215,135,0.9) 40%, rgba(217,177,68,0.35) 60%, transparent 70%)",
//               filter: "blur(0.3px)",
//             }}
//             initial={{ opacity: 0, scale: 0.6 }}
//             animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.8, 1.25, 0.8] }}
//             transition={{ duration: 3 + (i % 5), delay, repeat: Infinity, ease: "easeInOut" }}
//           />
//         )
//       })}
//     </div>
//   )
// }

// export default function Hero() {
//   const mx = useMotionValue(0)
//   const my = useMotionValue(0)
//   const sx = useSpring(mx, { stiffness: 60, damping: 15 })
//   const sy = useSpring(my, { stiffness: 60, damping: 15 })
//   const translateX = useTransform(sx, [-50, 50], ["-1%", "1%"])
//   const translateY = useTransform(sy, [-50, 50], ["-1%", "1%"])

//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768)
//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   function onMouseMove(e: React.MouseEvent) {
//     if (isMobile) return
//     const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top
//     const cx = rect.width / 2
//     const cy = rect.height / 2
//     mx.set(((x - cx) / cx) * 50)
//     my.set(((y - cy) / cy) * 50)
//   }

//   return (
//     <div className="w-full overflow-hidden">
//       {/* Fullscreen video for mobile - FIXED HEIGHT */}
//       {isMobile && (
//         <div className="relative h-[100svh] w-full overflow-hidden">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//           >
//             <source src="4.mp4" type="video/mp4" />
//           </video>
          
//           {/* Scroll indicator */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5, duration: 0.5 }}
//             className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//               className="text-white flex flex-col items-center"
//             >
//               <p className="text-sm mb-1 text-white/80">Листайте вниз</p>
//               <ChevronDown className="h-6 w-6 text-white/80" />
//             </motion.div>
//           </motion.div>
//         </div>
//       )}

//       {/* Content section - FIXED CONTAINER */}
//       <section
//         onMouseMove={onMouseMove}
//         className={`relative w-full ${isMobile ? "min-h-0 bg-white" : "min-h-[92vh]"} overflow-hidden flex ${isMobile ? "flex-col" : "items-center"}`}
//         id="hero-content"
//       >
//         {/* Background effects - REMOVED FOR MOBILE */}
//         {!isMobile && (
//           <div className="absolute inset-0 z-[1] overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5faf9] to-[#e8f2f0]" />
//             <div
//               className="absolute -top-1/3 -left-1/4 h-[120vh] w-[80vw] rounded-full opacity-50 blur-3xl"
//               style={{
//                 background: "radial-gradient(circle, rgba(42,85,78,0.35), transparent 60%)",
//               }}
//             />
//             <div
//               className="absolute -bottom-1/3 -right-1/4 h-[120vh] w-[80vw] rounded-full opacity-50 blur-3xl"
//               style={{
//                 background: "radial-gradient(circle, rgba(42,85,68,0.25), transparent 60%)",
//               }}
//             />
//             <Sparkles />
//           </div>
//         )}

//         {/* Content container - CONSTRAINED WIDTH */}
//         <div className={`relative z-10 w-full max-w-full ${isMobile ? "py-6 px-4" : ""}`}>
//           <div className={`mx-auto w-full max-w-7xl items-center ${isMobile ? "gap-4" : "gap-8 px-4 md:px-6 lg:grid lg:grid-cols-2 lg:gap-14 lg:px-8 py-20 md:py-28"}`}>
//             <motion.div
//               initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className={`text-center md:text-left ${isMobile ? "mt-0" : ""} max-w-full overflow-hidden`}
//             >
//               <h1 className={`${isMobile ? "text-3xl mb-3" : "text-4xl sm:text-5xl md:text-6xl mb-6"} text-[#1c5f67] leading-tight break-words`}
//               style={{ fontFamily: "var(--font-cormorant)" }}>
//                 RINGS — история, рассказанная в камне
//               </h1>

//               <p className={`${isMobile ? "text-base mb-4" : "text-xl sm:text-xl mb-6 md:mb-10"} max-w-xl mx-auto md:mx-0 text-[#1c140a]/70 break-words`}>
// Каждое кольцо — это характер, эмоция и выбор, заключённые в драгоценность. От честной простоты до аристократического сияния — здесь вы найдёте отражение именно своей истории.
//               </p>

//               <div className={`flex ${isMobile ? "flex-col gap-2" : "flex-col sm:flex-row gap-3 sm:gap-4"} justify-center md:justify-start max-w-full`}>
//                 <Button
//                   asChild
//                   className={`${isMobile ? "h-10 min-w-0 w-full" : "h-12 md:h-14 min-w-[180px]"} 
//                             flex-1 sm:flex-none rounded-full px-6 
//                             bg-[#1c5f67] text-white 
//                             border border-[#1c5f67]/80 
//                             hover:bg-[#234840] 
//                             shadow-[0_4px_20px_rgba(42,85,78,0.4)] 
//                             transition-all text-center whitespace-nowrap`}
//                 >
//                   <a href="#contact">Получить консультацию</a>
//                 </Button>

// <Button
//   variant="outline"
//   asChild
//   className={`${isMobile ? "h-10 min-w-0 w-full" : "h-12 md:h-14 min-w-[180px]"} flex-1 sm:flex-none rounded-full px-4 border-2 border-[#1c5f67] text-[#1c5f67] hover:bg-[#1c5f67]/10 text-center whitespace-nowrap`}
// >
//   <a 
//     href="https://wa.me/77002437689" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     onClick={(e) => {
//       // Альтернативный вариант для десктопных приложений
//       if (navigator.userAgent.includes('WhatsApp')) {
//         e.preventDefault();
//         window.open('whatsapp://send?phone=77002437689', '_blank');
//       }
//     }}
//   >
//     Написать на WhatsApp
//   </a>
// </Button>
//               </div>
//             </motion.div>

//             {/* Desktop-only video/image - CONSTRAINED */}
//             {!isMobile && (
//               <motion.div
//                 style={{ x: translateX, y: translateY }}
//                 className="relative aspect-[4/5] w-full max-w-full overflow-hidden rounded-[999px] border border-[#d9b144]/30 bg-white shadow-[0_30px_80px_rgba(217,177,68,0.20)]"
//               >
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="absolute inset-0 w-full h-full object-cover"
//                 >
//                   <source src="/4.mp4" type="video/mp4" />
//                   <Image src="/main.jpg" alt="Ювелирное изделие" fill className="object-cover" />
//                 </video>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }






"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

function Sparkles() {
  const items = Array.from({ length: 22 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const size = 4 + ((i * 7) % 10)
        const left = (i * 37) % 100
        const top = (i * 19) % 100
        const delay = (i % 7) * 0.35
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(242,215,135,0.9) 40%, rgba(217,177,68,0.35) 60%, transparent 70%)",
              filter: "blur(0.3px)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.8, 1.25, 0.8] }}
            transition={{ duration: 3 + (i % 5), delay, repeat: Infinity, ease: "easeInOut" }}
          />
        )
      })}
    </div>
  )
}

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 15 })
  const sy = useSpring(my, { stiffness: 60, damping: 15 })
  const translateX = useTransform(sx, [-50, 50], ["-1%", "1%"])
  const translateY = useTransform(sy, [-50, 50], ["-1%", "1%"])

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function onMouseMove(e: React.MouseEvent) {
    if (isMobile) return
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    mx.set(((x - cx) / cx) * 50)
    my.set(((y - cy) / cy) * 50)
  }

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Проверяем, открыто ли в WhatsApp Web или десктопном приложении
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isWhatsAppWeb = navigator.userAgent.includes('WhatsApp')
    
    if (isWhatsAppWeb) {
      window.open('whatsapp://send?phone=77002437689', '_blank')
    } else if (isMobileDevice) {
      window.open('https://wa.me/77002437689', '_blank')
    } else {
      window.open('https://web.whatsapp.com/send?phone=77002437689', '_blank')
    }
  }

  return (
    <div className="w-full overflow-hidden">
      {/* Fullscreen video for mobile */}
      {isMobile && (
        <div className="relative h-[100svh] w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/4.mp4" type="video/mp4" />
          </video>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-white flex flex-col items-center"
            >
              <p className="text-sm mb-1 text-white/80">Листайте вниз</p>
              <ChevronDown className="h-6 w-6 text-white/80" />
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Content section */}
      <section
        onMouseMove={onMouseMove}
        className={`relative w-full ${
          isMobile ? "min-h-0 bg-white" : "min-h-[92vh]"
        } overflow-hidden flex ${isMobile ? "flex-col" : "items-center"}`}
        id="hero-content"
      >
        {/* Background effects - disabled on mobile for performance */}
        {!isMobile && (
          <div className="absolute inset-0 z-[1] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5faf9] to-[#e8f2f0]" />
            <div
              className="absolute -top-1/3 -left-1/4 h-[120vh] w-[80vw] rounded-full opacity-50 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(42,85,78,0.35), transparent 60%)",
              }}
            />
            <div
              className="absolute -bottom-1/3 -right-1/4 h-[120vh] w-[80vw] rounded-full opacity-50 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(42,85,68,0.25), transparent 60%)",
              }}
            />
            <Sparkles />
          </div>
        )}

        {/* Content container */}
        <div className={`relative z-10 w-full ${isMobile ? "py-6 px-4" : ""}`}>
          <div
            className={`mx-auto w-full max-w-7xl items-center ${
              isMobile
                ? "gap-4"
                : "gap-8 px-4 md:px-6 lg:grid lg:grid-cols-2 lg:gap-14 lg:px-8 py-20 md:py-28"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`text-center md:text-left ${
                isMobile ? "mt-0" : ""
              } max-w-full overflow-hidden`}
            >
              <h1
                className={`${
                  isMobile
                    ? "text-3xl mb-3"
                    : "text-3xl sm:text-4xl md:text-5xl mb-6"
                } text-[#1c5f67] leading-tight break-words`}
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Кольца RINGS с канадскими бриллиантами и колумбийскими изумрудами в
Алматы — от 620 000 до 2 500 000 ₸

              </h1>

              <p
                className={`${
                  isMobile ? "text-base mb-4" : "text-lg sm:text-xl mb-6 md:mb-10"
                } max-w-xl mx-auto md:mx-0 text-[#1c140a]/70 break-words`}
              >
              
  Подберём идеальный вариант украшения под ваш бюджет за 10 минут
              </p>

              <div
                className={`flex ${
                  isMobile ? "flex-col gap-2" : "flex-col sm:flex-row gap-3 sm:gap-4"
                } justify-center md:justify-start max-w-full`}
              >
                <Button
                  onClick={handleWhatsAppClick}
                  className={`${
                    isMobile ? "h-10 w-full" : "h-12 md:h-14 min-w-[200px]"
                  } rounded-full px-6 bg-[#1c5f67] text-white border border-[#1c5f67]/80 hover:bg-[#234840] shadow-[0_4px_20px_rgba(42,85,78,0.4)] transition-all text-center whitespace-normal sm:whitespace-nowrap`}
                >
                  Подобрать кольцо
                </Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    const collectionSection = document.getElementById('collections')
                    if (collectionSection) {
                      collectionSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className={`${
                    isMobile ? "h-10 w-full" : "h-12 md:h-14 min-w-[180px]"
                  } rounded-full px-4 border-2 border-[#1c5f67] text-[#1c5f67] hover:bg-[#1c5f67]/10 text-center whitespace-normal sm:whitespace-nowrap`}
                >
                  Смотреть коллекцию
                </Button>
              </div>
            </motion.div>

            {/* Desktop-only video/image */}
            {!isMobile && (
              <motion.div
                style={{ x: translateX, y: translateY }}
                className="relative aspect-[4/5] w-full max-w-full overflow-hidden rounded-[999px] border border-[#d9b144]/30 bg-white shadow-[0_30px_80px_rgba(217,177,68,0.20)]"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/4.mp4" type="video/mp4" />
                  <Image src="/main.jpg" alt="Ювелирное изделие" fill className="object-cover" />
                </video>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}