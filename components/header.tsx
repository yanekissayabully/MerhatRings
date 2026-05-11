// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Phone } from 'lucide-react'
// import { useState } from "react"
// import { cn } from "@/lib/utils"
// import Image from 'next/image';

// export default function Header() {
//   const [open, setOpen] = useState(false)

//   const nav = [
//     { href: "#collections", label: "Коллекции" },
//     { href: "#about", label: "О бренде" },
//     { href: "#contact", label: "Контакты" },
//   ]

//   return (
//     <header className="fixed top-3 z-50 w-full">
//       <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
//         {/* Glassy bar */}
//         <div className="relative grid grid-cols-3 items-center rounded-2xl border border-[#1c5f67] bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(42,85,78,0.15)]">
//           {/* Left: nav (desktop), burger (mobile) */}
//           <div className="flex items-center gap-6 pl-4 h-16">
//             <button
//               aria-label="Открыть меню"
//               className="md:hidden text-[#1c140a]"
//               onClick={() => setOpen((v) => !v)}
//             >
//               {open ? <X /> : <Menu />}
//             </button>
//             <nav className="hidden md:flex items-center gap-6">
//               {nav.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className="text-sm text-[#1c140a]/70 hover:text-[#1c5f67] transition-colors"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </nav>
//           </div>

//           {/* Center: logo */}

// <div className="flex items-center justify-center">
//   <Link href="#" className="flex items-center gap-2">
//     <Image
//       src="/logoMerhat.png"
//       alt="Merhat Logo"
//       width={100}  // Увеличьте по необходимости
//       height={100} // Увеличьте по необходимости
//       className="object-contain" // или object-cover, если нужно заполнение
//     />
//   </Link>
// </div>

//           {/* Right: CTA on desktop, phone icon on mobile */}
//           <div className="flex items-center justify-end pr-4 gap-3">
//             {/* Mobile phone icon */}
//             <a
//               href="tel:+49123456789"
//               aria-label="Позвонить"
//               className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d9b144]/40 text-[#1c140a] hover:bg-[#fff7e3]"
//             >
//               <Phone className="h-5 w-5" />
//             </a>
//             {/* Desktop button */}
// <Button
//   asChild
//   className="hidden md:inline-flex rounded-full px-5 h-10 font-normal
//   bg-gradient-to-br from-[#f9e076] via-[#d9b144] to-[#b78a2e]
//   border border-[#f2d787]/70
//   text-white hover:brightness-110
//   shadow-[0_4px_20px_rgba(217,177,68,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)]
//   transition-all duration-300
//   transform hover:scale-[1.02] active:scale-100"
// >
//   <a href="#contact" className="relative z-10">
//     <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">Связаться</span>
//     {/* Эффект блика */}
//     <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
//       <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent"></div>
//     </div>
//   </a>
// </Button>
//           </div>

//           {/* Gold glow underline */}
//           <div className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-[#1c5f67]/70 to-transparent" />
//         </div>

//         {/* Mobile dropdown */}
//         <div
//           className={cn(
//             "md:hidden overflow-hidden transition-[grid-template-rows] duration-300",
//             open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
//           )}
//         >
//           <div className="overflow-hidden">
//             <div className="flex flex-col gap-2 pb-4 px-4 rounded-b-2xl border-x border-b border-[#d9b144]/30 bg-white/80 backdrop-blur">
//               {nav.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className="py-3 text-[#1c140a]/80 hover:text-[#9f7823] border-b last:border-0 border-black/5"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }



// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Phone } from 'lucide-react'
// import { useState } from "react"
// import { cn } from "@/lib/utils"
// import Image from 'next/image';

// export default function Header() {
//   const [open, setOpen] = useState(false)

//   const nav = [
//     { href: "#collections", label: "Коллекции" },
//     { href: "#about", label: "О бренде" },
//     { href: "#contact", label: "Контакты" },
//   ]

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-[#1c5f67] shadow-[0_8px_30px_rgba(42,85,78,0.15)]">
//       <div className="relative mx-auto h-16 grid grid-cols-3 items-center">
//         {/* Left: nav (desktop), burger (mobile) */}
//         <div className="flex items-center gap-6 pl-4 h-full">
//           <button
//             aria-label="Открыть меню"
//             className="md:hidden text-[#1c140a]"
//             onClick={() => setOpen((v) => !v)}
//           >
//             {open ? <X /> : <Menu />}
//           </button>
//           <nav className="hidden md:flex items-center gap-6 h-full">
//             {nav.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="text-sm text-[#1c140a]/70 hover:text-[#1c5f67] transition-colors"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* Center: logo */}
//         <div className="flex items-center justify-center h-full">
//           <Link href="#" className="flex items-center gap-2 h-full">
//             <Image
//               src="/logoMerhat.png"
//               alt="Merhat Logo"
//               width={100}
//               height={40}
//               className="object-contain h-auto max-h-[40px] w-auto"
//               priority
//             />
//           </Link>
//         </div>

//         {/* Right: CTA on desktop, phone icon on mobile */}
//         <div className="flex items-center justify-end pr-4 gap-3 h-full">
//           {/* Mobile phone icon */}
//           <a
//             href="tel:+77002437689"
//             aria-label="Позвонить"
//             className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1c5f67]/40 text-[#1c140a] hover:bg-[#fff7e3]"
//           >
//             <Phone className="h-5 w-5" />
//           </a>
//           {/* Desktop button - внешний вид "Связаться", но функционал звонка */}
//           <Button
//             asChild
//             className="hidden md:inline-flex rounded-full px-5 h-10 font-normal
//               bg-[#1c5f67] hover:bg-[#1e453d]
//               border border-[#3a7568]/80
//               text-white hover:brightness-110
//               shadow-[0_4px_20px_rgba(42,85,78,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]
//               transition-all duration-300
//               transform hover:scale-[1.02] active:scale-100"
//           >
//             <a href="tel:+77002437689" className="relative z-10">
//               <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">Связаться</span>
//             </a>
//           </Button>
//         </div>

//         {/* Gold glow underline */}
//         <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1c5f67]/70 to-transparent" />
//       </div>

//       {/* Mobile dropdown */}
//       <div
//         className={cn(
//           "md:hidden overflow-hidden transition-all duration-300",
//           open ? "max-h-[500px]" : "max-h-0"
//         )}
//       >
//         <div className="flex flex-col gap-2 pb-4 px-4 bg-white/80 backdrop-blur border-t border-[#d9b144]/30">
//           {nav.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               onClick={() => setOpen(false)}
//               className="py-3 text-[#1c140a]/80 hover:text-[#9f7823] border-b last:border-0 border-black/5"
//             >
//               {item.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </header>
//   )
// }


"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from 'lucide-react'
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false)

  const nav = [
    { href: "#collections", label: "Коллекции" },
    { href: "#about", label: "О бренде" },
    { href: "#contact", label: "Контакты" },
  ]

  const whatsappLink = "https://wa.me/77002437689" // замените на ваш номер

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-[#2a554e] shadow-[0_8px_30px_rgba(42,85,78,0.15)]">
      <div className="relative mx-auto h-16 grid grid-cols-3 items-center">
        {/* Left: nav (desktop), burger (mobile) */}
        <div className="flex items-center gap-6 pl-4 h-full">
          <button
            aria-label="Открыть меню"
            className="md:hidden text-[#1c140a]"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav className="hidden md:flex items-center gap-6 h-full">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#1c140a]/70 hover:text-[#2a554e] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Center: logo */}
        <div className="flex items-center justify-center h-full">
          <Link href="#" className="flex items-center gap-2 h-full">
            <Image
              src="/logoMerhat.png"
              alt="Merhat Logo"
              width={100}
              height={40}
              className="object-contain h-auto max-h-[40px] w-auto"
              priority
            />
          </Link>
        </div>

        {/* Right: CTA buttons */}
        <div className="flex items-center justify-end pr-4 gap-3 h-full">
          {/* Мобильный WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#20b859] transition-colors shadow-md"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.535 4.053 1.472 5.762L0 24l6.336-1.479C8.034 23.451 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.587-.53-5.062-1.437l-.363-.216-3.758.878.982-3.666-.236-.375A9.948 9.948 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
          </a>

          {/* Кнопка "Подобрать обручальные кольца" (Desktop) */}
          

          {/* Кнопка "Написать в WhatsApp" (Desktop) */}
          <Button
            asChild
            className="hidden md:inline-flex rounded-full px-5 h-10 font-normal gap-2
              bg-[#25D366] hover:bg-[#20b859]
              text-white shadow-md
              transition-all duration-300
              transform hover:scale-[1.02] active:scale-100"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.535 4.053 1.472 5.762L0 24l6.336-1.479C8.034 23.451 9.977 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.587-.53-5.062-1.437l-.363-.216-3.758.878.982-3.666-.236-.375A9.948 9.948 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              <span>Написать в WhatsApp</span>
            </a>
          </Button>

          <Button
            asChild
            className="hidden md:inline-flex rounded-full px-5 h-10 font-normal
              bg-[#2a554e] hover:bg-[#1e453d]
              border border-[#3a7568]/80
              text-white hover:brightness-110
              shadow-[0_4px_20px_rgba(42,85,78,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]
              transition-all duration-300
              transform hover:scale-[1.02] active:scale-100"
          >
            <a href="#collections" className="relative z-10">
              <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">Подобрать кольцо</span>
            </a>
          </Button>
        </div>

        {/* Gold glow underline */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2a554e]/70 to-transparent" />
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-2 pb-4 px-4 bg-white/80 backdrop-blur border-t border-[#d9b144]/30">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[#1c140a]/80 hover:text-[#9f7823] border-b last:border-0 border-black/5"
            >
              {item.label}
            </a>
          ))}
          
          {/* "Подобрать обручальные кольца" как обычный пункт меню */}
          <a
            href="#collections"
            onClick={() => setOpen(false)}
            className="py-3 text-[#1c140a]/80 hover:text-[#9f7823] border-b border-black/5"
          >
            Подобрать кольцо
          </a>
        </div>
      </div>
    </header>
  )
}