// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
// } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { Play, X } from 'lucide-react'

// export type RingCharacteristics = {
//   label: string
//   value: string
// }[]

// export type ProductItem = {
//   id: number
//   title: string
//   subtitle: string
//   price: string
//   description?: string
//   gallery?: string[]
//   video?: string | null
//   femaleCharacteristics?: RingCharacteristics
//   maleCharacteristics?: RingCharacteristics
// }

// const fallbackItem: ProductItem = {
//   id: 0,
//   title: "Украшение",
//   subtitle: "Материал",
//   price: "€0",
//   description:
//     "Изысканное изделие с вниманием к каждой детали. Подчёркивает индивидуальность и стиль.",
//   gallery: ["/placeholder.svg?height=900&width=1200"],
//   video: null,
// }

// export default function ProductModal({
//   open = false,
//   onOpenChange = () => {},
//   item = fallbackItem,
// }: {
//   open?: boolean
//   onOpenChange?: (v: boolean) => void
//   item?: ProductItem
// }) {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const images = item.gallery && item.gallery.length > 0 ? item.gallery : fallbackItem.gallery!
//   const hasVideo = !!item.video

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent
//         className="
//           fixed top-1/2 left-1/2 w-screen h-screen m-0 p-0 border-0 bg-white shadow-none z-50
//           flex flex-col overflow-y-auto
//           -translate-x-1/2 -translate-y-1/2
//           data-[state=open]:animate-in data-[state=closed]:animate-out transition-all duration-300
//           lg:w-[900px] lg:h-[90vh] lg:max-w-[95vw] lg:max-h-[95vh] lg:rounded-3xl lg:shadow-2xl
//         "
//         style={{ borderRadius: undefined }}
//       >
//         <DialogClose asChild>
//           <button
//             aria-label="Закрыть"
//             className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/85 backdrop-blur hover:bg-white"
//           >
//             <X className="h-5 w-5" />
//           </button>
//         </DialogClose>

//         <div className="flex flex-col h-full overflow-y-auto lg:flex-row-reverse">
//           {/* Левая колонка (на десктопе): только медиа */}
//           <div className="relative flex flex-col w-full lg:w-1/2">
//             {/* Основное медиа */}
//             <div className="relative flex-1 min-h-[40vw] max-h-[50vh] lg:min-h-0 lg:h-[55vh]">
//               {hasVideo && activeIndex === images.length ? (
//                 <video
//                   key="video"
//                   className="h-full w-full object-cover"
//                   controls
//                   playsInline
//                   poster={images[0]}
//                 >
//                   <source src={item.video || ""} type="video/mp4" />
//                 </video>
//               ) : (
//                 <Image
//                   src={
//                     images[Math.min(activeIndex, images.length - 1)] ||
//                     "/placeholder.svg?height=900&width=1200&query=luxury%20jewelry%20photo"
//                    || "/placeholder.svg"
//                   }
//                   alt={item.title || "Фото изделия"}
//                   fill
//                   className="object-cover"
//                   sizes="(min-width: 1536px) 58vw, (min-width: 1024px) 56vw, 100vw"
//                 />
//               )}
//             </div>

//             {/* Превью галереи */}
//             <div className="px-4 py-4 sm:px-6 sm:py-5 bg-white border-t border-[#eaeaea]">
//               <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-[#e6c86a]/40 scrollbar-track-transparent">
//                 {images.map((src, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveIndex(idx)}
//                     aria-label={`Показать фото ${idx + 1}`}
//                     className={`relative h-16 w-24 sm:h-20 sm:w-28 shrink-0 overflow-hidden rounded-2xl border ring-offset-2 focus:outline-none focus-visible:ring-2 ${
//                       activeIndex === idx ? "border-[#d9b144] ring-[#d9b144]/40" : "border-black/10"
//                     }`}
//                   >
//                     <Image
//                       src={src || "/placeholder.svg?height=150&width=200&query=thumb%20photo"}
//                       alt={`Превью ${idx + 1}`}
//                       fill
//                       className="object-cover"
//                       sizes="112px"
//                     />
//                   </button>
//                 ))}
//                 {hasVideo && (
//                   <button
//                     onClick={() => setActiveIndex(images.length)}
//                     aria-label="Показать видео"
//                     className={`relative h-16 w-24 sm:h-20 sm:w-28 shrink-0 overflow-hidden rounded-2xl border flex items-center justify-center ${
//                       activeIndex === images.length ? "border-[#d9b144]" : "border-black/10"
//                     }`}
//                   >
//                     <Play className="h-7 w-7 text-[#9f7823]" />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Цена и характеристики ТОЛЬКО НА ДЕСКТОПЕ */}
//             <div className="hidden lg:block p-5 sm:p-8 lg:p-10 bg-white border-t border-[#eaeaea]">
//               <p className="text-xl sm:text-2xl text-[#9f7823] font-semibold">{item.price}</p>

//               {/* Характеристики */}
//               {(item.femaleCharacteristics || item.maleCharacteristics) && (
//                 <div className="mt-5">
//                   <div className="flex flex-col gap-3 lg:flex-row lg:gap-8">
//                     {item.femaleCharacteristics && (
//                       <div className="lg:w-1/2">
//                         <div className="font-semibold text-[#9f7823] mb-1">Женское кольцо:</div>
//                         <ul className="grid gap-1.5 text-sm text-[#1c140a]/70">
//                           {item.femaleCharacteristics.map((c, i) => (
//                             <li key={i}>• {c.label}: {c.value}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                     {item.maleCharacteristics && (
//                       <div className="lg:w-1/2">
//                         <div className="font-semibold text-[#9f7823] mb-1">Мужское кольцо:</div>
//                         <ul className="grid gap-1.5 text-sm text-[#1c140a]/70">
//                           {item.maleCharacteristics.map((c, i) => (
//                             <li key={i}>• {c.label}: {c.value}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Правая колонка: текст и кнопки */}
//           <div className="flex flex-col w-full lg:w-1/2 bg-white">
//             <div className="flex-1 p-5 sm:p-8 lg:p-10">
//               <DialogHeader className="space-y-2">
//                 <DialogTitle
//                   className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-1"
//                   style={{ fontFamily: "var(--font-cormorant)" }}
//                 >
//                   {item.title}
//                 </DialogTitle>
//                 <DialogDescription className="text-[#1c140a]/70 text-base lg:text-lg">
//                   {item.subtitle}
//                 </DialogDescription>
//               </DialogHeader>

//               <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#d9b144] to-transparent" />

//               <p className="mt-4 text-[#1c140a]/80 leading-relaxed text-base lg:text-lg">
//                 {item.description ||
//                   "Изысканное изделие с вниманием к каждой детали. Подчёркивает индивидуальность и стиль."}
//               </p>

//               {/* Цена и характеристики ТОЛЬКО НА МОБИЛКЕ */}
//               <div className="lg:hidden mt-5">
//                 <p className="text-xl sm:text-2xl text-[#9f7823] font-semibold">{item.price}</p>

//                 {(item.femaleCharacteristics || item.maleCharacteristics) && (
//                   <div className="mt-5">
//                     <div className="flex flex-col gap-3 lg:flex-row lg:gap-8">
//                       {item.femaleCharacteristics && (
//                         <div className="lg:w-1/2">
//                           <div className="font-semibold text-[#9f7823] mb-1">Женское кольцо:</div>
//                           <ul className="grid gap-1.5 text-sm text-[#1c140a]/70">
//                             {item.femaleCharacteristics.map((c, i) => (
//                               <li key={i}>• {c.label}: {c.value}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                       {item.maleCharacteristics && (
//                         <div className="lg:w-1/2">
//                           <div className="font-semibold text-[#9f7823] mb-1">Мужское кольцо:</div>
//                           <ul className="grid gap-1.5 text-sm text-[#1c140a]/70">
//                             {item.maleCharacteristics.map((c, i) => (
//                               <li key={i}>• {c.label}: {c.value}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <ul className="mt-5 grid gap-1.5 text-sm text-[#1c140a]/70">
//                 <li>• Доставка по Казахстану</li>
//                 <li>• Возврат в течение 30 дней</li>
//                 <li>• Подарочная упаковка</li>
//               </ul>

//               <div className="mt-7 flex flex-wrap items-center gap-3">
//                 <Button
//                   variant="outline"
//                   className="rounded-full border-[#d9b144]/60 px-7 py-3 text-[#1c140a] hover:bg-[#fff7e3]"
//                 >
//                   Консультация
//                 </Button>
//               </div>

//               <div className="mt-7 text-xs text-[#1c140a]/60">
//                 Код товара: AU-{String(item.id).padStart(4, "0")}
//               </div>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }



"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

export type RingCharacteristics = {
  label: string
  value: string
}[]

export type ProductItem = {
  id: number
  title: string
  subtitle: string
  price: string
  description?: string
  gallery?: string[]
  video?: string | null
  femaleCharacteristics?: RingCharacteristics
  maleCharacteristics?: RingCharacteristics
}

const fallbackItem: ProductItem = {
  id: 0,
  title: "Украшение",
  subtitle: "Материал",
  price: "€0",
  description:
    "Изысканное изделие с вниманием к каждой детали. Подчёркивает индивидуальность и стиль.",
  gallery: ["/placeholder.svg?height=900&width=1200"],
  video: null,
}

export default function ProductModal({
  open = false,
  onOpenChange = () => {},
  item = fallbackItem,
}: {
  open?: boolean
  onOpenChange?: (v: boolean) => void
  item?: ProductItem
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [zoomOpen, setZoomOpen] = useState(false)
  const images = item.gallery && item.gallery.length > 0 ? item.gallery : fallbackItem.gallery!
  const hasVideo = !!item.video

  const currentImage = images[Math.min(activeIndex, images.length - 1)]

  const handlePrev = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : images.length - (hasVideo ? 0 : 1)))
  }

  const handleNext = () => {
    setActiveIndex(prev => (prev < images.length - (hasVideo ? 0 : 1) ? prev + 1 : 0))
  }

  return (
    <>
      {/* Основная модалка продукта */}
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="
            fixed top-1/2 left-1/2 w-screen h-screen m-0 p-0 border-0 bg-white shadow-none z-50
            flex flex-col overflow-y-auto
            -translate-x-1/2 -translate-y-1/2
            data-[state=open]:animate-in data-[state=closed]:animate-out transition-all duration-300
            lg:w-[900px] lg:h-[90vh] lg:max-w-[95vw] lg:max-h-[95vh] lg:rounded-3xl lg:shadow-2xl
          "
          style={{ borderRadius: undefined }}
        >
          <DialogClose asChild>
            <button
              aria-label="Закрыть"
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/85 backdrop-blur hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogClose>

          <div className="flex flex-col h-full overflow-y-auto lg:flex-row-reverse">
            {/* Левая колонка (на десктопе): только медиа */}
            <div className="relative flex flex-col w-full lg:w-1/2">
              {/* Основное медиа */}
              <div 
                className="relative flex-1 min-h-[40vw] max-h-[50vh] lg:min-h-0 lg:h-[55vh] cursor-zoom-in"
                onClick={() => setZoomOpen(true)}
              >
                {hasVideo && activeIndex === images.length ? (
                  <video
                    key="video"
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    poster={images[0]}
                  >
                    <source src={item.video || ""} type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <Image
                      src={currentImage || "/placeholder.svg"}
                      alt={item.title || "Фото изделия"}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1536px) 58vw, (min-width: 1024px) 56vw, 100vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <ZoomIn className="h-10 w-10 text-white bg-black/50 rounded-full p-2" />
                    </div>
                  </>
                )}
              </div>

              {/* Превью галереи */}
              <div className="px-4 py-4 sm:px-6 sm:py-5 bg-white border-t border-[#1c5f67]">
                <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-[#e6c86a]/40 scrollbar-track-transparent">
                  {images.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Показать фото ${idx + 1}`}
                      className={`relative h-16 w-24 sm:h-20 sm:w-28 shrink-0 overflow-hidden rounded-2xl border ring-offset-2 focus:outline-none focus-visible:ring-2 ${
                        activeIndex === idx ? "border-[#1c5f67] ring-[#1c5f67]/40" : "border-black/10"
                      }`}
                    >
                      <Image
                        src={src || "/placeholder.svg?height=150&width=200&query=thumb%20photo"}
                        alt={`Превью ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </button>
                  ))}
                  {hasVideo && (
                    <button
                      onClick={() => setActiveIndex(images.length)}
                      aria-label="Показать видео"
                      className={`relative h-16 w-24 sm:h-20 sm:w-28 shrink-0 overflow-hidden rounded-2xl border flex items-center justify-center ${
                        activeIndex === images.length ? "border-[#1c5f67]" : "border-black/10"
                      }`}
                    >
                      <Play className="h-7 w-7 text-[#1c5f67]" />
                    </button>
                  )}
                </div>
              </div>

              {/* Цена и характеристики ТОЛЬКО НА ДЕСКТОПЕ */}
              <div className="hidden lg:block p-5 sm:p-8 lg:p-10 bg-white border-t border-[#1c5f67]">
                <p className="text-xl sm:text-2xl text-[#1c5f67] font-semibold">{item.price}</p>

                {/* Характеристики */}
                {(item.femaleCharacteristics || item.maleCharacteristics) && (
                  <div className="mt-5">
                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-8">
                      {item.femaleCharacteristics && (
                        <div className="lg:w-1/2">
                          <div className="font-semibold text-[#1c5f67] mb-1">Кольцо:</div>
                          <ul className="grid gap-1.5 text-sm text-[#1c140a]/70">
                            {item.femaleCharacteristics.map((c, i) => (
                              <li key={i}>• {c.label}: {c.value}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item.maleCharacteristics && (
                        <div className="lg:w-1/2">
                          <div className="font-semibold text-[#1c5f67] mb-1">Серьги:</div>
                          <ul className="grid gap-1.5 text-sm text-[#1c140a]/70">
                            {item.maleCharacteristics.map((c, i) => (
                              <li key={i}>• {c.label}: {c.value}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Правая колонка: текст и кнопки */}
            <div className="flex flex-col w-full lg:w-1/2 bg-white">
              <div className="flex-1 p-5 sm:p-8 lg:p-10">
                <DialogHeader className="space-y-2">
                  <DialogTitle
                    className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.title}
                  </DialogTitle>
                  <DialogDescription className="text-[#1c140a]/70 text-base lg:text-lg">
                    {item.subtitle}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#1c5f67] to-transparent" />

                <p className="mt-4 text-[#1c140a]/80 leading-relaxed text-base lg:text-lg">
                  {item.description ||
                    "Изысканное изделие с вниманием к каждой детали. Подчёркивает индивидуальность и стиль."}
                </p>

                {/* Цена и характеристики ТОЛЬКО НА МОБИЛКЕ */}
                <div className="lg:hidden mt-5">
                  <p className="text-xl sm:text-2xl text-[#1c5f67] font-semibold">{item.price}</p>

                  {(item.femaleCharacteristics || item.maleCharacteristics) && (
                    <div className="mt-5">
                      <div className="flex flex-col gap-3 lg:flex-row lg:gap-8">
                        {item.femaleCharacteristics && (
                          <div className="lg:w-1/2">
                            <div className="font-semibold text-[#1c5f67] mb-1">Женское кольцо:</div>
                            <ul className="grid gap-1.5 text-sm text-[#1c140a]/70">
                              {item.femaleCharacteristics.map((c, i) => (
                                <li key={i}>• {c.label}: {c.value}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {item.maleCharacteristics && (
                          <div className="lg:w-1/2">
                            <div className="font-semibold text-[#1c5f67] mb-1">Мужское кольцо:</div>
                            <ul className="grid gap-1.5 text-sm text-[#1c140a]/70">
                              {item.maleCharacteristics.map((c, i) => (
                                <li key={i}>• {c.label}: {c.value}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <ul className="mt-5 grid gap-1.5 text-sm text-[#1c140a]/70">
                  <li>• Доставка по Казахстану</li>
                  <li>• Возврат в течение 30 дней</li>
                  <li>• Подарочная упаковка</li>
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3">
<Button
  variant="outline"
  asChild
  className="rounded-full border-[#1c5f67]/60 px-7 py-3 text-[#1c140a] hover:bg-[#1c5f67]/10"
>
  <a 
    href="https://wa.me/77002437689" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Консультация
  </a>
</Button>
                </div>

                <div className="mt-7 text-xs text-[#1c140a]/60">
                  Код товара: AU-{String(item.id).padStart(4, "0")}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Модалка для увеличенного изображения */}
      <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
        <DialogContent
          className="
            fixed top-1/2 left-1/2 w-screen h-screen m-0 p-0 border-0 bg-white shadow-none z-50
            flex flex-col overflow-y-auto
            -translate-x-1/2 -translate-y-1/2
            data-[state=open]:animate-in data-[state=closed]:animate-out transition-all duration-300
            lg:w-[900px] lg:h-[90vh] lg:max-w-[95vw] lg:max-h-[95vh] lg:rounded-3xl lg:shadow-2xl
          "
        >
          <DialogClose asChild>
            <button
              aria-label="Закрыть"
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/85 backdrop-blur hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogClose>

          {/* Стрелка назад */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrev()
            }}
            aria-label="Предыдущее фото"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/85 backdrop-blur hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Основное изображение */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {hasVideo && activeIndex === images.length ? (
              <video
                key="video"
                className="h-full w-full object-contain"
                controls
                playsInline
                poster={images[0]}
              >
                <source src={item.video || ""} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={currentImage || "/placeholder.svg"}
                alt={item.title || "Увеличенное фото изделия"}
                fill
                className="object-contain"
                sizes="100vw"
              />
            )}
          </div>

          {/* Стрелка вперед */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            aria-label="Следующее фото"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/85 backdrop-blur hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Индикатор текущего слайда */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveIndex(idx)
                }}
                aria-label={`Перейти к фото ${idx + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  activeIndex === idx ? 'bg-[#1c5f67]' : 'bg-black/20'
                }`}
              />
            ))}
            {hasVideo && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveIndex(images.length)
                }}
                aria-label="Перейти к видео"
                className={`h-2 w-2 rounded-full transition-colors ${
                  activeIndex === images.length ? 'bg-[#1c5f67]' : 'bg-black/20'
                }`}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}