// "use client"

// import Image from "next/image"
// import SectionContainer from "./section-container"
// import { motion } from "framer-motion"
// import { useRef, useState } from "react"
// import ProductModal, { type ProductItem } from "./product-modal"

// type RingCharacteristics = {
//   label: string
//   value: string
// }[]

// type Item = ProductItem & {
//   image: string
//   femaleCharacteristics?: RingCharacteristics
//   maleCharacteristics?: RingCharacteristics
// }

// const items: Item[] = [
//   {
//     id: 1,
//     title: "Слияние",
//     subtitle: "«Слияние» — это не просто кольцо. Это главное обещание, которое вы далидруг другу на всю жизнь.",
//     price: "285 000 ₸",
//     image: "/sliyanie.jpg?height=900&width=720",
//     description:
//       "«Слияние» — это молчаливое обещание идти вместе всю жизнь. Кольца символизируют любовь, уважение и общее будущее. Каждая линия, каждый орнамент — знак переплетённой судьбы. Золото и бриллианты — о нежности, серебро — о прочности. «Слияние» — это не просто кольцо. Это обет, с которого начинается ваша история.",
//     gallery: [
//       "/sliyanie.jpg?height=1200&width=900",
//       "/sliyanie.jpg?height=1200&width=900",
//       "/sliyanie.jpg?height=1200&width=900",
//     ],
//     video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//     femaleCharacteristics: [
//       { label: "Золото", value: "585 пробы" },
//       { label: "Бриллиант", value: "0,04 карата" },
//       { label: "Вес", value: "2,5 - 3,5 г" },
//     ],
//     maleCharacteristics: [
//       { label: "Серебро", value: "925 пробы" },
//       { label: "Вес", value: "3 - 4 г" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Бесконечность",
//     subtitle: "«Бесконечность» — это чувство без границ. Любовь, которая с годами не угасает и не меняется, а становится только глубже. Эти кольца — обещание, данное перед самым Временем.",
//     price: "295 000 ₸",
//     image: "/infinity.jpg?height=900&width=720",
//     description:
//       "«Бесконечность» — пара колец, символизирующая вечность любви. В дизайне сочетаются простота и глубокий смысл. Это не просто золото и серебро — это отражение доверия и верности друг другу.",
//     gallery: [
//       "/infinity.jpg?height=1200&width=900",
//       "/infinity.jpg?height=1200&width=900",
//     ],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585 пробы" },
//       { label: "Бриллиант", value: "0,03 карата" },
//       { label: "Вес", value: "2,3 - 3,2 г" },
//     ],
//     maleCharacteristics: [
//       { label: "Серебро", value: "925 пробы" },
//       { label: "Вес", value: "3,1 - 4,2 г" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Любовь",
//     subtitle: "«Любовь» — это не только начало. Это путь. Чувство, воплощённое в форме кольца: многослойное, яркое, глубокое. Вы сумели сохранить его вместе — а теперь сможете передать дальше, своим потомкам.",
//     price: "365 000 ₸",
//     image: "/love.jpg?height=900&width=720",
//     description:
//       "«Любовь» — это не просто чувство. Это — настоящая, глубокая и уникальная связь между вами. Каждая грань — символ пережитых вместе моментов. А бриллиант — сияющее доказательство этой любви.",
//     gallery: ["/love.jpg?height=1200&width=900"],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585 пробы" },
//       { label: "Бриллиант", value: "0,05 карата" },
//       { label: "Вес", value: "2,7 - 3,8 г" },
//     ],
//     maleCharacteristics: [
//       { label: "Серебро", value: "925 пробы" },
//       { label: "Вес", value: "3,3 - 4,5 г" },
//     ],
//   },
//   {
//     id: 4,
//     title: "Классика",
//     subtitle: "Эти кольца кажутся скромными и ненавязчивыми, но именно эта простота придаёт им особую ценность.",
//     price: "275 000 ₸",
//     image: "/classic.jpg?height=900&width=720",
//     description:
//       "«Классика» — воплощение любви, неподвластной времени. Лёгкий и элегантный дизайн гармонирует с любым временем и стилем. Эта пара колец — для тех, кто ценит искренность, стабильность и чистоту чувств. Мода проходит. Классика — остаётся.",
//     gallery: [
//       "/classic.jpg?height=1200&width=900",
//       "/classic.jpg?height=1200&width=900",
//     ],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585 пробы" },
//       { label: "Вес", value: "2,1 - 3,0 г" },
//     ],
//     maleCharacteristics: [
//       { label: "Серебро", value: "925 пробы" },
//       { label: "Вес", value: "3,0 - 4,0 г" },
//     ],
//   },
//   {
//     id: 5,
//     title: "Авангард",
//     subtitle: "Его форма неидеально ровная, с лёгкими гранями — как и в любви: пусть не всё идеально, но всё — по- настоящему. Это кольцо — для смелых и честных чувств, таких, как ваши.",
//     price: "355 000 ₸",
//     image: "/avangard.jpg?height=900&width=720",
//     description:
//       "«Авангард» — для тех, кто уходит от классики и верит в свой стиль и свои решения. Не глянцевая, не матовая — особенная, как вы. Это кольцо — отражение вашей нестандартной любви. «Авангард» — значит быть впереди, выделяться, не быть как все.",
//     gallery: ["/avangard.jpg?height=1200&width=900"],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "750 пробы" },
//       { label: "Вес", value: "2,8 - 3,6 г" },
//     ],
//     maleCharacteristics: [
//       { label: "Серебро", value: "925 пробы" },
//       { label: "Вес", value: "3,5 - 4,5 г" },
//     ],
//   },
//   {
//     id: 6,
//     title: "Доверие",
//     subtitle: "«Доверие» — это сердце любви. Там, где есть любовь, есть и доверие. Это кольцо — безмолвное, но вечное обещание: «Я тебе верю».",
//     price: "325 000 ₸",
//     image: "/doverie.jpg?height=900&width=720",
//     description:
//       "«Доверие» — прочнейшая основа любви. Доверие, не измеряемое временем. Символ спокойного и устойчивого чувства. Эти кольца — о безусловной вере и понимании без слов.",
//     gallery: [
//       "/doverie.jpg?height=1200&width=900",
//       "/doverie.jpg?height=1200&width=900",
//     ],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585 пробы" },
//       { label: "Вес", value: "2,2 - 3,1 г" },
//     ],
//     maleCharacteristics: [
//       { label: "Серебро", value: "925 пробы" },
//       { label: "Вес", value: "3,2 - 4,1 г" },
//     ],
//   },
//   {
//     id: 7,
//     title: "Связанные",
//     subtitle: "«Связанные» — это как два человека, чьи сердца бьются как одно. Простые линии — путь, по которому вы идёте вместе, а бриллиант — яркая точка света на этом пути.",
//     price: "375 000 ₸",
//     image: "/svyazanie.jpg?height=900&width=720",
//     description:
//       "«Связанные» — связь, рождающаяся, когда два сердца бьются в одном ритме. Эта пара колец — отражение внутренней гармонии, согласия и глубины чувств. Два разных металла — золото и серебро — дополняют друг друга, находя идеальное сочетание.",
//     gallery: [
//       "/svyazanie.jpg?height=1200&width=900",
//       "/svyazanie.jpg?height=1200&width=900",
//     ],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585 пробы" },
//       { label: "Бриллиант", value: "0,02 карата" },
//       { label: "Вес", value: "2,0 - 2,9 г" },
//     ],
//     maleCharacteristics: [
//       { label: "Серебро", value: "925 пробы" },
//       { label: "Вес", value: "3,0 - 4,0 г" },
//     ],
//   },
//   {
//     id: 8,
//     title: "Тепло",
//     subtitle: "«Тепло» — самая тонкая и самая прочная грань любви. Со временем чувства становятся спокойнее, но если между вами есть тепло — всё сохраняется.",
//     price: "345 000 ₸",
//     image: "/teplo.jpg?height=900&width=720",
//     description:
//       "«Тепло» — кольцо, воплощающее нежность и душевную заботу двух людей друг о друге. Его дизайн прост, но глубоко трогает сердце. Это выбор тех, кто умеет любить мягко, без громких слов.",
//     gallery: [
//       "/teplo.jpg?height=1200&width=900",
//       "/teplo.jpg?height=1200&width=900",
//     ],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585 пробы" },
//       { label: "Вес", value: "2,4 - 3,3 г" },
//     ],
//     maleCharacteristics: [
//       { label: "Серебро", value: "925 пробы" },
//       { label: "Вес", value: "3,2 - 4,2 г" },
//     ],
//   },
//   {
//     id: 9,
//     title: "Тайна",
//     subtitle: "«Тайна» — это невидимая, но самая прочная часть любви. На первый взгляд — просто кольцо. Но в нём скрыта особая связь, которую понимаете только вы двое.",
//     price: "355 000 ₸",
//     image: "/tayna.jpg?height=900&width=720",
//     description:
//       "«Тайна» — для тех моментов, когда чувства невозможно выразить словами. Безмолвное понимание, внутреннее единение, сила невидимой связи. Дизайн необычен: выемка и бриллиант на женском кольце отражают ту самую таинственную гармонию. Две разные формы — одно целое.",
//     gallery: [
//       "/tayna.jpg?height=1200&width=900",
//       "/tayna.jpg?height=1200&width=900",
//     ],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585 пробы" },
//       { label: "Бриллиант", value: "0,01 карата" },
//       { label: "Вес", value: "2,2 - 3,0 г" },
//     ],
//     maleCharacteristics: [
//       { label: "Серебро", value: "925 пробы" },
//       { label: "Вес", value: "3,0 - 4,0 г" },
//     ],
//   },
//   {
//     id: 10,
//     title: "Вечное",
//     subtitle: "Словно воспоминание, которое не тускнеет. Словно обещание, данное навсегда.",
//     price: "395 000 ₸",
//     image: "/vechnoe.jpg?height=900&width=720",
//     description:
//       "«Вечное» — кольца для тех, чья любовь не боится времени. Лаконичные, благородные, с тонкой фактурой и сияющим бриллиантом — эти украшения созданы быть с вами всегда.",
//     gallery: [
//       "/vechnoe.jpg?height=1200&width=900",
//       "/vechnoe.jpg?height=1200&width=900",
//     ],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585 пробы" },
//       { label: "Бриллиант", value: "0,06 карата" },
//       { label: "Вес", value: "2,9 - 3,9 г" },
//     ],
//     maleCharacteristics: [
//       { label: "Серебро", value: "925 пробы" },
//       { label: "Вес", value: "3,8 - 4,8 г" },
//     ],
//   },
// ]

// function useTilt() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const handleMouseMove = (e: React.MouseEvent) => {
//     const el = ref.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     const px = (e.clientX - rect.left) / rect.width;
//     const py = (e.clientY - rect.top) / rect.height;
//     const rotX = (py - 0.5) * -8;
//     const rotY = (px - 0.5) * 8;
//     el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
//   };
//   const handleMouseLeave = () => {
//     const el = ref.current;
//     if (!el) return;
//     el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
//   };
//   return { ref, handleMouseMove, handleMouseLeave };
// }

// function Card({ item, onClick }: { item: Item; onClick: () => void }) {
//   const { ref, handleMouseMove, handleMouseLeave } = useTilt();
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 20, scale: 0.98 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.6 }}
//       className="group relative rounded-[28px] h-[500px] w-full flex flex-col cursor-pointer"
//       role="button"
//       tabIndex={0}
//       onClick={onClick}
//       onKeyDown={(e) => {
//         if (e.key === "Enter" || e.key === " ") {
//           e.preventDefault();
//           onClick();
//         }
//       }}
//     >
//       {/* Soft gold frame */}
//       <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-[#1c5f67]/20 to-transparent opacity-70" />
//       <div
//         ref={ref}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="relative h-full overflow-hidden rounded-[28px] border border-[#1c5f67]/30 bg-white flex flex-col transition-all duration-300 group-hover:shadow-lg group-hover:border-[#1c5f67]/40"
//       >
//         {/* Фиксированный блок изображения */}
//         <div className="relative h-[250px] w-full flex-shrink-0">
//           <Image
//             src={item.image || "/placeholder.svg"}
//             alt={item.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 340px"
//             className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
//             style={{
//               clipPath: "path('M 0 40 Q 80 0 160 30 T 340 10 T 520 30 T 720 0 L 720 320 Q 620 300 540 340 T 360 300 T 200 340 T 0 320 Z')",
//             }}
//           />
//         </div>

//         {/* Информационный блок с фиксированной высотой */}
//         {/* Информационный блок с фиксированной высотой */}
// <div className="flex-1 flex flex-col p-4 border-t border-[#1c5f67]/20">
//   {/* Заголовок + цена */}
//   <div className="flex items-center justify-between mb-3">
//     <h3
//       className="text-xl font-medium text-[#1c140a]"
//       style={{ fontFamily: "var(--font-cormorant)" }}
//     >
//       {item.title}
//     </h3>
//     <span className="text-[#1c5f67] font-medium text-lg whitespace-nowrap ml-4">
//       {item.price}
//     </span>
//   </div>

//   {/* Характеристики в две колонки */}
//   <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-3 flex-1 overflow-hidden">
//     {/* Женские характеристики */}
//     <div>
//       <h4 className="text-[#1c5f67] font-medium mb-2 text-xs uppercase tracking-wider">
//         Женское
//       </h4>
//       <div className="space-y-2">
//         {item.femaleCharacteristics?.map((char, i) => (
//           <div key={`female-${i}`} className="flex justify-between">
//             <span className="text-[#1c140a]/70">{char.label}</span>
//             <span className="font-medium text-[#1c140a]">{char.value}</span>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Мужские характеристики */}
//     <div>
//       <h4 className="text-[#1c5f67] font-medium mb-2 text-xs uppercase tracking-wider">
//         Мужское
//       </h4>
//       <div className="space-y-2">
//         {item.maleCharacteristics?.map((char, i) => (
//           <div key={`male-${i}`} className="flex justify-between">
//             <span className="text-[#1c140a]/70">{char.label}</span>
//             <span className="font-medium text-[#1c140a]">{char.value}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* Кнопка "Подробнее" снизу */}
//   <div className="flex items-center justify-end border-t border-[#1c5f67]/30 pt-3 mt-auto">
//     <div className="flex items-center gap-1 bg-[#1c5f67]/10 hover:bg-[#1c5f67]/20 px-3 py-2 rounded-full transition-all">
//       <span className="text-sm text-[#1c5f67] font-medium">Подробнее</span>
//       <svg
//         width="18"
//         height="18"
//         viewBox="0 0 24 24"
//         fill="none"
//         className="text-[#1c5f67] transition-transform group-hover:translate-x-1"
//       >
//         <path
//           d="M9 18l6-6-6-6"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//   </div>
// </div>

//       </div>
//     </motion.article>
//   );
// }

// export default function Collections() {
//   const [open, setOpen] = useState(false)
//   const [selected, setSelected] = useState<Item | null>(null)

//   return (
//     <SectionContainer id="collections" className="py-20 md:py-28">
//       <motion.div
//         initial={{ opacity: 0, y: 18 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-80px" }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="mb-10 md:mb-14"
//       >
//         <p
//           className="text-sm tracking-[0.35em] uppercase text-[#1c5f67]"
//           style={{ fontFamily: "var(--font-inter)" }}
//         >
//           Избранное
//         </p>
//         <h2
//           className="text-3xl md:text-4xl mt-3"
//           style={{ fontFamily: "var(--font-cormorant)" }}
//         >
//           Коллекции
//         </h2>
//       </motion.div>


//       {/* Горизонтальный скролл с стрелками для всех устройств */}
//       <div className="relative w-full">
//   <div
//     className="flex gap-6 overflow-x-auto pb-2 px-2 scrollbar-thin scrollbar-thumb-[#d9b144]/40 scrollbar-track-transparent snap-x snap-mandatory"
//     style={{
//       scrollBehavior: "smooth",
//       overflowY: "hidden", // ⚡ Блокируем вертикальный скролл
//       touchAction: "pan-y pinch-zoom", // ⚡ Для мобильных устройств
//     }}
//     id="collections-scroll-row"
//     onWheel={(e) => {
//       // ⚡ Если пользователь крутит колесо вверх/вниз — скроллим влево/вправо
//       if (e.deltaY !== 0) {
//         e.preventDefault();
//         e.currentTarget.scrollLeft += e.deltaY;
//       }
//     }}
//   >
//     {items.map((item) => (
//       <div key={item.id} className="min-w-[320px] max-w-[340px] w-[340px] snap-center flex-shrink-0">
//         <Card
//           item={item}
//           onClick={() => {
//             setSelected(item);
//             setOpen(true);
//           }}
//         />
//       </div>
//     ))}
//   </div>

//   {/* Стрелки навигации (остаются без изменений) */}
//   <button
//     type="button"
//     aria-label="Прокрутить влево"
//     className="flex absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 md:bg-white/80 border border-[#1c5f67]/30 rounded-full p-1 md:p-2 shadow hover:bg-white"
//     onClick={() => {
//       const el = document.getElementById("collections-scroll-row");
//       if (el) el.scrollBy({ left: -340, behavior: "smooth" });
//     }}
//   >
//     <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none">
//       <path d="M15 19l-7-7 7-7" stroke="#1c5f67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   </button>
//   <button
//     type="button"
//     aria-label="Прокрутить вправо"
//     className="flex absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 md:bg-white/80 border border-[#1c5f67]/30 rounded-full p-1 md:p-2 shadow hover:bg-white"
//     onClick={() => {
//       const el = document.getElementById("collections-scroll-row");
//       if (el) el.scrollBy({ left: 340, behavior: "smooth" });
//     }}
//   >
//     <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none">
//       <path d="M9 5l7 7-7 7" stroke="#1c5f67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   </button>
// </div>
//       <ProductModal
//         open={open}
//         onOpenChange={setOpen}
//         item={
//           selected || {
//             id: 0,
//             title: "",
//             subtitle: "",
//             price: "",
//             image: "/placeholder.svg?height=900&width=720",
//             description: "",
//             gallery: ["/placeholder.svg?height=1200&width=900"],
//             video: null,
//             femaleCharacteristics: [
//               { label: "Золото", value: "585 пробы" },
//               { label: "Бриллиант", value: "0,04 карата" },
//               { label: "Вес", value: "2,5 - 3,5 г" },
//             ],
//             maleCharacteristics: [
//               { label: "Серебро", value: "925 пробы" },
//               { label: "Вес", value: "3 - 4 г" },
//             ],
//           }
//         }
//       />
//     </SectionContainer>
//   )
// }




// "use client"

// import Image from "next/image"
// import { useRouter } from "next/navigation"
// import SectionContainer from "./section-container"
// import { motion } from "framer-motion"
// import { useRef, useState } from "react"
// import ProductModal, { type ProductItem } from "./product-modal"

// type RingCharacteristics = {
//   label: string
//   value: string
// }[]

// type Item = ProductItem & {
//   image: string
//   slug: string // Добавляем slug для URL
//   femaleCharacteristics?: RingCharacteristics
//   maleCharacteristics?: RingCharacteristics
// }

// const items: Item[] = [
//   {
//     id: 1,
//     title: "Lume",
//     slug: "lume", // URL будет /lume
//     subtitle: "LUME — свет, которому не нужны слова.",
//     price: "1 550 000 ₸",
//     image: "/Lume.jpg?height=900&width=720",
//     description:
//       "Имя Lume в переводе с итальянского означает «сияние»,и это не преувеличение. Это кольцо не просто привлекает взгляд — оно его останавливает. Здесь всё построено вокруг света: каплевидный изумруд словно изнутри освещает оправу, а 86 бриллиантов создают ощущение настоящего сияющего поля вокруг.",
//     gallery: [
//       "/Lume.jpg?height=1200&width=900",
//       "/Lume.jpg?height=1200&width=900",
//       "/Lume.jpg?height=1200&width=900",
//     ],
//     video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//     femaleCharacteristics: [
//       { label: "Золото", value: "585" },
//       { label: "Бриллиант", value: "1,12 кр" },
//     ],
//     maleCharacteristics: [
//       { label: "Изумруд", value: "2,38 кр" },
//       { label: "Вес", value: "6,31 г" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Nia",
//     slug: "nia", // URL будет /nia
//     subtitle: "NIA — тишина, которая сияет.",
//     price: "620 000 ₸",
//     image: "/Nia.jpg?height=900&width=720",
//     description:
//       "Имя Nia в переводе с суахили означает \"цель\",\"намерение\",\"душа\". Это кольцо — о чистом решении быть собой. Не громко. Не для всех. А — понастоящему.NIA — украшение, которое подчёркивает, а не перекрывает. Оно не спорит с образом, а делает его целостным.",
//     gallery: [
//       "/Nia.jpg?height=1200&width=900",
//       "/Nia.jpg?height=1200&width=900",
//     ],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585" },
//       { label: "Бриллиант", value: "0,45 кр" },
//     ],
//     maleCharacteristics: [
//       { label: "Вес", value: "1,61 г" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Aya",
//     slug: "aya", // URL будет /aya
//     subtitle: "Минимализм, в котором скрыто больше чувств, чем в самых пышных признаниях.",
//     price: "815 000 ₸",
//     image: "/Aya.jpg?height=900&width=720",
//     description:
//       "Главный акцент — на центральном бриллианте, сияющем как обещание.А нежные боковые вставки только подчёркивают: это кольцо про любовь, которую не нужно доказывать словами.",
//     gallery: ["/Aya.jpg?height=1200&width=900"],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585" },
//       { label: "Бриллиант", value: "0,86 кр" },
//     ],
//     maleCharacteristics: [
//       { label: "Вес", value: "2,81 г" },
//     ],
//   },
//   {
//     id: 4,
//     title: "Grace",
//     slug: "grace", // URL будет /grace
//     subtitle: "GRACE — изящная сила классики.",
//     price: "1 225 000 ₸",
//     image: "/Grace.jpg?height=900&width=720",
//     description:
//       "Кольцо, названное в честь самой грации. В центре — природный колумбийский изумруд насыщенного оттенка, обрамлённый двумя рядами бриллиантов, как свет, подчеркивающий его глубину. Форма овала — дань аристократическому вкусу: подобные камни выбирали Жаклин Кеннеди, Грейс Келли и Бейонсе.",
//     gallery: [
//       "/Grace.jpg?height=1200&width=900",
//       "/Grace.jpg?height=1200&width=900",
//     ],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "585" },
//       { label: "Бриллиант", value: "0,94 кр" },
//     ],
//     maleCharacteristics: [
//       { label: "Изумруд", value: "2,56 кр" },
//       { label: "Вес", value: "6,56 г" },
//     ],
//   },
//   {
//     id: 5,
//     title: "Mia",
//     slug: "mia", // URL будет /mia
//     subtitle: "MIA — честная простота.",
//     price: "2 500 000 ₸",
//     image: "/Mia.jpg?height=900&width=720",
//     description:
//       "Один камень. Одна мысль. Одно «да». Классическое кольцо с одиночным бриллиантом в четырёх крапанах — выбор вневременной. Его форма подчёркивает чистоту линии и силу чувства. Идеально для предложения руки и сердца. Или как кольцо, которое женщина покупает себе сама — потому что может.",
//     gallery: ["/Mia.jpg?height=1200&width=900"],
//     video: null,
//     femaleCharacteristics: [
//       { label: "Золото", value: "750" },
//       { label: "Бриллиант", value: "1 кр" },
//     ],
//     maleCharacteristics: [
//       { label: "Вес", value: "3,68 г" },
//     ],
//   },
// ]

// function useTilt() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const handleMouseMove = (e: React.MouseEvent) => {
//     const el = ref.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     const px = (e.clientX - rect.left) / rect.width;
//     const py = (e.clientY - rect.top) / rect.height;
//     const rotX = (py - 0.5) * -8;
//     const rotY = (px - 0.5) * 8;
//     el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
//   };
//   const handleMouseLeave = () => {
//     const el = ref.current;
//     if (!el) return;
//     el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
//   };
//   return { ref, handleMouseMove, handleMouseLeave };
// }

// function Card({ item, onClick }: { item: Item; onClick: () => void }) {
//   const { ref, handleMouseMove, handleMouseLeave } = useTilt();
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 20, scale: 0.98 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.6 }}
//       className="group relative rounded-[28px] h-[500px] w-full flex flex-col cursor-pointer"
//       role="button"
//       tabIndex={0}
//       onClick={onClick}
//       onKeyDown={(e) => {
//         if (e.key === "Enter" || e.key === " ") {
//           e.preventDefault();
//           onClick();
//         }
//       }}
//     >
//       {/* Soft gold frame */}
//       <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-[#1c5f67]/20 to-transparent opacity-70" />
//       <div
//         ref={ref}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="relative h-full overflow-hidden rounded-[28px] border border-[#1c5f67]/30 bg-white flex flex-col transition-all duration-300 group-hover:shadow-lg group-hover:border-[#1c5f67]/40"
//       >
//         {/* Фиксированный блок изображения */}
//         <div className="relative h-[250px] w-full flex-shrink-0">
//           <Image
//             src={item.image || "/placeholder.svg"}
//             alt={item.title}
//             fill
//             sizes="(max-width: 768px) 90vw, 340px"
//             className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
//           />
//         </div>

//         {/* Информационный блок с фиксированной высотой */}
//         <div className="flex-1 flex flex-col p-4 border-t border-[#1c5f67]/20">
//           {/* Заголовок + цена */}
//           <div className="flex items-start justify-between mb-3">
//             <h3
//               className="text-xl sm:text-2xl font-medium text-[#1c5f67] flex-1 pr-2"

//               style={{ fontFamily: "var(--font-cormorant)" }}
//             >
//               {item.title}
//             </h3>
//             <span className="text-[#1c5f67] font-medium text-base sm:text-lg whitespace-nowrap">
//               {item.price}
//             </span>
//           </div>

//           {/* Характеристики в две колонки */}
//           <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-2 text-xs sm:text-sm mb-3 flex-1 overflow-hidden">
//             {/* Женские характеристики */}
//             <div>
//               <h4 className="text-[#1c5f67] font-medium mb-2 text-xs uppercase tracking-wider">
//                 Кольцо
//               </h4>
//               <div className="space-y-1 sm:space-y-2">
//                 {item.femaleCharacteristics?.map((char, i) => (
//                   <div key={`female-${i}`} className="flex justify-between gap-1">
//                     <span className="text-[#1c140a]/70 text-xs">{char.label}</span>
//                     <span className="font-medium text-[#1c140a] text-xs">{char.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Мужские характеристики */}
//             <div>
//               <h4 className="text-[#1c5f67] font-medium mb-2 text-xs uppercase tracking-wider">
//                 -
//               </h4>
//               <div className="space-y-1 sm:space-y-2">
//                 {item.maleCharacteristics?.map((char, i) => (
//                   <div key={`male-${i}`} className="flex justify-between gap-1">
//                     <span className="text-[#1c140a]/70 text-xs">{char.label}</span>
//                     <span className="font-medium text-[#1c140a] text-xs">{char.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Кнопка "Подробнее" снизу */}
//           <div className="flex items-center justify-end border-t border-[#1c5f67]/30 pt-3 mt-auto">
//             <div className="flex items-center gap-1 bg-[#1c5f67]/10 hover:bg-[#1c5f67]/20 px-3 py-2 rounded-full transition-all">
//               <span className="text-sm text-[#1c5f67] font-medium">Подробнее</span>
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="text-[#1c5f67] transition-transform group-hover:translate-x-1"
//               >
//                 <path
//                   d="M9 18l6-6-6-6"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export default function Collections() {
//   const router = useRouter()
//   const [open, setOpen] = useState(false)
//   const [selected, setSelected] = useState<Item | null>(null)

//   // Функция для перехода на страницу продукта
//   const handleCardClick = (item: Item) => {
//     router.push(`/${item.slug}`)
//   }

//   return (
//     <SectionContainer id="collections" className="py-20 md:py-28">
//       <motion.div
//         initial={{ opacity: 0, y: 18 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-80px" }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="mb-10 md:mb-14"
//       >
//         <p
//           className="text-sm tracking-[0.35em] uppercase text-[#1c5f67]"
//           style={{ fontFamily: "var(--font-cormorant)" }}
//         >
//           Избранное
//         </p>
//         <h2
//           className="text-3xl md:text-4xl mt-3"
//           style={{ fontFamily: "var(--font-cormorant)" }}
//         >
//           Коллекции
//         </h2>
//       </motion.div>

//       {/* Адаптивная сетка с горизонтальным скроллом */}
//       <div className="relative w-full">
//         {/* Мобильные устройства: горизонтальный скролл с центрированием */}
//         <div className="block sm:hidden">
//           <div
//             className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
//             style={{
//               scrollBehavior: "smooth",
//               overflowY: "hidden",
//               paddingLeft: "calc(50vw - 160px)", // Центрирование первой карточки
//               paddingRight: "calc(50vw - 160px)",
//             }}
//             id="collections-scroll-mobile"
//           >
//             {items.map((item) => (
//               <div 
//                 key={item.id} 
//                 className="min-w-[280px] max-w-[320px] w-[300px] snap-center flex-shrink-0"
//               >
//                 <Card
//                   item={item}
//                   onClick={() => handleCardClick(item)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Планшеты: 2 колонки с горизонтальным скроллом */}
//         <div className="hidden sm:block lg:hidden">
//           <div
//             className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
//             style={{
//               scrollBehavior: "smooth",
//               overflowY: "hidden",
//             }}
//             id="collections-scroll-tablet"
//           >
//             {items.map((item) => (
//               <div 
//                 key={item.id} 
//                 className="min-w-[320px] max-w-[340px] w-[340px] snap-center flex-shrink-0"
//               >
//                 <Card
//                   item={item}
//                   onClick={() => handleCardClick(item)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Десктоп: горизонтальный скролл с большими карточками */}
//         <div className="hidden lg:block">
//           <div
//             className="flex gap-6 overflow-x-auto pb-2 px-2 scrollbar-thin scrollbar-thumb-[#d9b144]/40 scrollbar-track-transparent snap-x snap-mandatory"
//             style={{
//               scrollBehavior: "smooth",
//               overflowY: "hidden",
//               touchAction: "pan-y pinch-zoom",
//             }}
//             id="collections-scroll-desktop"
//             onWheel={(e) => {
//               if (e.deltaY !== 0) {
//                 e.preventDefault();
//                 e.currentTarget.scrollLeft += e.deltaY;
//               }
//             }}
//           >
//             {items.map((item) => (
//               <div 
//                 key={item.id} 
//                 className="min-w-[340px] max-w-[360px] w-[360px] snap-center flex-shrink-0"
//               >
//                 <Card
//                   item={item}
//                   onClick={() => handleCardClick(item)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Стрелки навигации для всех устройств */}
//         <button
//           type="button"
//           aria-label="Прокрутить влево"
//           className="flex absolute left-2 sm:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 sm:bg-white/80 border border-[#1c5f67]/30 rounded-full p-1 sm:p-1.5 lg:p-2 shadow hover:bg-white transition-all"
//           onClick={() => {
//             const mobileEl = document.getElementById("collections-scroll-mobile");
//             const tabletEl = document.getElementById("collections-scroll-tablet");
//             const desktopEl = document.getElementById("collections-scroll-desktop");
            
//             if (mobileEl) mobileEl.scrollBy({ left: -300, behavior: "smooth" });
//             if (tabletEl) tabletEl.scrollBy({ left: -340, behavior: "smooth" });
//             if (desktopEl) desktopEl.scrollBy({ left: -360, behavior: "smooth" });
//           }}
//         >
//           <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none">
//             <path d="M15 19l-7-7 7-7" stroke="#1c5f67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
        
//         <button
//           type="button"
//           aria-label="Прокрутить вправо"
//           className="flex absolute right-2 sm:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 sm:bg-white/80 border border-[#1c5f67]/30 rounded-full p-1 sm:p-1.5 lg:p-2 shadow hover:bg-white transition-all"
//           onClick={() => {
//             const mobileEl = document.getElementById("collections-scroll-mobile");
//             const tabletEl = document.getElementById("collections-scroll-tablet");
//             const desktopEl = document.getElementById("collections-scroll-desktop");
            
//             if (mobileEl) mobileEl.scrollBy({ left: 300, behavior: "smooth" });
//             if (tabletEl) tabletEl.scrollBy({ left: 340, behavior: "smooth" });
//             if (desktopEl) desktopEl.scrollBy({ left: 360, behavior: "smooth" });
//           }}
//         >
//           <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none">
//             <path d="M9 5l7 7-7 7" stroke="#1c5f67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       </div>

//       <ProductModal
//         open={open}
//         onOpenChange={setOpen}
//         item={
//           selected || {
//             id: 0,
//             title: "",
//             subtitle: "",
//             price: "",
//             image: "/placeholder.svg?height=900&width=720",
//             description: "",
//             gallery: ["/placeholder.svg?height=1200&width=900"],
//             video: null,
//             femaleCharacteristics: [
//               { label: "Золото", value: "585 пробы" },
//               { label: "Бриллиант", value: "0,04 карата" },
//               { label: "Вес", value: "2,5 - 3,5 г" },
//             ],
//             maleCharacteristics: [
//               { label: "Серебро", value: "925 пробы" },
//               { label: "Вес", value: "3 - 4 г" },
//             ],
//           }
//         }
//       />
//     </SectionContainer>
//   )
// }




"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import SectionContainer from "./section-container"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import ProductModal, { type ProductItem } from "./product-modal"

type RingCharacteristics = {
  label: string
  value: string
}[]

type Item = ProductItem & {
  image: string
  slug: string // Добавляем slug для URL
  femaleCharacteristics?: RingCharacteristics
  maleCharacteristics?: RingCharacteristics
}

const items: Item[] = [
  {
    id: 1,
    title: "Lume",
    slug: "lume", // URL будет /lume
    subtitle: "LUME — свет, которому не нужны слова.",
    price: "1 550 000 ₸",
    image: "/Lume.jpg?height=900&width=720",
    description:
      "Имя Lume в переводе с итальянского означает «сияние»,и это не преувеличение. Это кольцо не просто привлекает взгляд — оно его останавливает. Здесь всё построено вокруг света: каплевидный изумруд словно изнутри освещает оправу, а 86 бриллиантов создают ощущение настоящего сияющего поля вокруг.",
    gallery: [
      "/Lume.jpg?height=1200&width=900",
      "/Lume.jpg?height=1200&width=900",
      "/Lume.jpg?height=1200&width=900",
    ],
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    femaleCharacteristics: [
      { label: "Золото", value: "585" },
      { label: "Бриллиант", value: "1,12 кр" },
    ],
    maleCharacteristics: [
      { label: "Изумруд", value: "2,38 кр" },
      { label: "Вес", value: "6,31 г" },
    ],
  },
  {
    id: 2,
    title: "Nia",
    slug: "nia", // URL будет /nia
    subtitle: "NIA — тишина, которая сияет.",
    price: "620 000 ₸",
    image: "/Nia.jpg?height=900&width=720",
    description:
      "Имя Nia в переводе с суахили означает \"цель\",\"намерение\",\"душа\". Это кольцо — о чистом решении быть собой. Не громко. Не для всех. А — понастоящему.NIA — украшение, которое подчёркивает, а не перекрывает. Оно не спорит с образом, а делает его целостным.",
    gallery: [
      "/Nia.jpg?height=1200&width=900",
      "/Nia.jpg?height=1200&width=900",
    ],
    video: null,
    femaleCharacteristics: [
      { label: "Золото", value: "585" },
      { label: "Бриллиант", value: "0,45 кр" },
    ],
    maleCharacteristics: [
      { label: "Вес", value: "1,61 г" },
    ],
  },
  {
    id: 3,
    title: "Aya",
    slug: "aya", // URL будет /aya
    subtitle: "Минимализм, в котором скрыто больше чувств, чем в самых пышных признаниях.",
    price: "815 000 ₸",
    image: "/Aya.jpg?height=900&width=720",
    description:
      "Главный акцент — на центральном бриллианте, сияющем как обещание.А нежные боковые вставки только подчёркивают: это кольцо про любовь, которую не нужно доказывать словами.",
    gallery: ["/Aya.jpg?height=1200&width=900"],
    video: null,
    femaleCharacteristics: [
      { label: "Золото", value: "585" },
      { label: "Бриллиант", value: "0,86 кр" },
    ],
    maleCharacteristics: [
      { label: "Вес", value: "2,81 г" },
    ],
  },
  {
    id: 4,
    title: "Grace",
    slug: "grace", // URL будет /grace
    subtitle: "GRACE — изящная сила классики.",
    price: "1 225 000 ₸",
    image: "/Grace.jpg?height=900&width=720",
    description:
      "Кольцо, названное в честь самой грации. В центре — природный колумбийский изумруд насыщенного оттенка, обрамлённый двумя рядами бриллиантов, как свет, подчеркивающий его глубину. Форма овала — дань аристократическому вкусу: подобные камни выбирали Жаклин Кеннеди, Грейс Келли и Бейонсе.",
    gallery: [
      "/Grace.jpg?height=1200&width=900",
      "/Grace.jpg?height=1200&width=900",
    ],
    video: null,
    femaleCharacteristics: [
      { label: "Золото", value: "585" },
      { label: "Бриллиант", value: "0,94 кр" },
    ],
    maleCharacteristics: [
      { label: "Изумруд", value: "2,56 кр" },
      { label: "Вес", value: "6,56 г" },
    ],
  },
  {
    id: 5,
    title: "Mia",
    slug: "mia", // URL будет /mia
    subtitle: "MIA — честная простота.",
    price: "2 500 000 ₸",
    image: "/Mia.jpg?height=900&width=720",
    description:
      "Один камень. Одна мысль. Одно «да». Классическое кольцо с одиночным бриллиантом в четырёх крапанах — выбор вневременной. Его форма подчёркивает чистоту линии и силу чувства. Идеально для предложения руки и сердца. Или как кольцо, которое женщина покупает себе сама — потому что может.",
    gallery: ["/Mia.jpg?height=1200&width=900"],
    video: null,
    femaleCharacteristics: [
      { label: "Золото", value: "750" },
      { label: "Бриллиант", value: "1 кр" },
    ],
    maleCharacteristics: [
      { label: "Вес", value: "3,68 г" },
    ],
  },
]

function useTilt() {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotX = (py - 0.5) * -8;
    const rotY = (px - 0.5) * 8;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
  };
  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };
  return { ref, handleMouseMove, handleMouseLeave };
}

function Card({ item, onClick }: { item: Item; onClick: () => void }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt();
  return (
    <motion.article
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-[28px] h-[500px] w-full flex flex-col cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Soft gold frame */}
      <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-[#1c5f67]/20 to-transparent opacity-70" />
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full overflow-hidden rounded-[28px] border border-[#1c5f67]/30 bg-white flex flex-col transition-all duration-300 group-hover:shadow-lg group-hover:border-[#1c5f67]/40"
      >
        {/* Фиксированный блок изображения */}
        <div className="relative h-[250px] w-full flex-shrink-0">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 90vw, 340px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        {/* Информационный блок с фиксированной высотой */}
        <div className="flex-1 flex flex-col p-4 border-t border-[#1c5f67]/20">
          {/* Заголовок + цена */}
          <div className="flex items-start justify-between mb-3">
            <h3
              className="text-xl sm:text-2xl font-medium text-[#1c5f67] flex-1 pr-2"

              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {item.title}
            </h3>
            <span className="text-[#1c5f67] font-medium text-base sm:text-lg whitespace-nowrap">
              {item.price}
            </span>
          </div>

          {/* Характеристики в две колонки */}
          <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-2 text-xs sm:text-sm mb-3 flex-1 overflow-hidden">
            {/* Женские характеристики */}
            <div>
              <h4 className="text-[#1c5f67] font-medium mb-2 text-xs uppercase tracking-wider">
                Кольцо
              </h4>
              <div className="space-y-1 sm:space-y-2">
                {item.femaleCharacteristics?.map((char, i) => (
                  <div key={`female-${i}`} className="flex justify-between gap-1">
                    <span className="text-[#1c140a]/70 text-xs">{char.label}</span>
                    <span className="font-medium text-[#1c140a] text-xs">{char.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Мужские характеристики */}
            <div>
              <h4 className="text-[#1c5f67] font-medium mb-2 text-xs uppercase tracking-wider">
                -
              </h4>
              <div className="space-y-1 sm:space-y-2">
                {item.maleCharacteristics?.map((char, i) => (
                  <div key={`male-${i}`} className="flex justify-between gap-1">
                    <span className="text-[#1c140a]/70 text-xs">{char.label}</span>
                    <span className="font-medium text-[#1c140a] text-xs">{char.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Кнопка "Подробнее" снизу */}
          <div className="flex items-center justify-end border-t border-[#1c5f67]/30 pt-3 mt-auto">
            <div className="flex items-center gap-1 bg-[#1c5f67]/10 hover:bg-[#1c5f67]/20 px-3 py-2 rounded-full transition-all">
              <span className="text-sm text-[#1c5f67] font-medium">Подробнее</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#1c5f67] transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Collections() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Item | null>(null)
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0)

  // Функция для перехода на страницу продукта
  const handleCardClick = (item: Item) => {
    router.push(`/${item.slug}`)
  }

  // Функция для перехода к следующему/предыдущему элементу на мобилке
  const scrollToMobileItem = (index: number) => {
    const container = document.getElementById("collections-scroll-mobile")
    if (!container) return

    const cardWidth = 300
    const gap = 16
    const containerWidth = container.offsetWidth
    const totalWidth = cardWidth + gap
    
    // Вычисляем позицию для центрирования
    const scrollPosition = (totalWidth * index) - (containerWidth / 2) + (cardWidth / 2)
    
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    })
    
    setCurrentMobileIndex(index)
  }

  const handleMobileNavigation = (direction: 'prev' | 'next') => {
    let newIndex
    if (direction === 'prev') {
      newIndex = currentMobileIndex > 0 ? currentMobileIndex - 1 : items.length - 1
    } else {
      newIndex = currentMobileIndex < items.length - 1 ? currentMobileIndex + 1 : 0
    }
    scrollToMobileItem(newIndex)
  }

  return (
    <SectionContainer id="collections" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10 md:mb-14"
      >
        <p
          className="text-sm tracking-[0.35em] uppercase text-[#1c5f67]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Избранное
        </p>
        <h2
          className="text-3xl md:text-4xl mt-3"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Коллекции
        </h2>
      </motion.div>

      {/* Адаптивная сетка с горизонтальным скроллом */}
      <div className="relative w-full">
        {/* Мобильные устройства: горизонтальный скролл с центрированием */}
        <div className="block sm:hidden">
          <div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollBehavior: "smooth",
              overflowY: "hidden",
              paddingLeft: "calc(50vw - 150px)", // Центрирование карточки
              paddingRight: "calc(50vw - 150px)",
            }}
            id="collections-scroll-mobile"
          >
            {items.map((item) => (
              <div 
                key={item.id} 
                className="min-w-[300px] max-w-[300px] w-[300px] snap-center flex-shrink-0"
              >
                <Card
                  item={item}
                  onClick={() => handleCardClick(item)}
                />
              </div>
            ))}
          </div>
          
          {/* Индикаторы для мобилки */}
          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToMobileItem(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentMobileIndex 
                    ? 'bg-[#1c5f67] w-6' 
                    : 'bg-[#1c5f67]/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Планшеты: 2 колонки с горизонтальным скроллом */}
        <div className="hidden sm:block lg:hidden">
          <div
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{
              scrollBehavior: "smooth",
              overflowY: "hidden",
            }}
            id="collections-scroll-tablet"
          >
            {items.map((item) => (
              <div 
                key={item.id} 
                className="min-w-[320px] max-w-[340px] w-[340px] snap-center flex-shrink-0"
              >
                <Card
                  item={item}
                  onClick={() => handleCardClick(item)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Десктоп: горизонтальный скролл с большими карточками */}
        <div className="hidden lg:block">
          <div
            className="flex gap-6 overflow-x-auto pb-2 px-2 scrollbar-thin scrollbar-thumb-[#d9b144]/40 scrollbar-track-transparent snap-x snap-mandatory"
            style={{
              scrollBehavior: "smooth",
              overflowY: "hidden",
              touchAction: "pan-y pinch-zoom",
            }}
            id="collections-scroll-desktop"
            onWheel={(e) => {
              if (e.deltaY !== 0) {
                e.preventDefault();
                e.currentTarget.scrollLeft += e.deltaY;
              }
            }}
          >
            {items.map((item) => (
              <div 
                key={item.id} 
                className="min-w-[340px] max-w-[360px] w-[360px] snap-center flex-shrink-0"
              >
                <Card
                  item={item}
                  onClick={() => handleCardClick(item)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Стрелки навигации */}
        <button
          type="button"
          aria-label="Прокрутить влево"
          className="flex absolute left-2 sm:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 sm:bg-white/80 border border-[#1c5f67]/30 rounded-full p-1 sm:p-1.5 lg:p-2 shadow hover:bg-white transition-all"
          onClick={() => {
            // Мобильная версия - переходим к предыдущей карточке
            if (window.innerWidth < 640) {
              handleMobileNavigation('prev')
              return
            }
            
            // Планшет и десктоп - обычный скролл
            const tabletEl = document.getElementById("collections-scroll-tablet");
            const desktopEl = document.getElementById("collections-scroll-desktop");
            
            if (tabletEl) tabletEl.scrollBy({ left: -340, behavior: "smooth" });
            if (desktopEl) desktopEl.scrollBy({ left: -360, behavior: "smooth" });
          }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="#1c5f67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        
        <button
          type="button"
          aria-label="Прокрутить вправо"
          className="flex absolute right-2 sm:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 sm:bg-white/80 border border-[#1c5f67]/30 rounded-full p-1 sm:p-1.5 lg:p-2 shadow hover:bg-white transition-all"
          onClick={() => {
            // Мобильная версия - переходим к следующей карточке
            if (window.innerWidth < 640) {
              handleMobileNavigation('next')
              return
            }
            
            // Планшет и десктоп - обычный скролл
            const tabletEl = document.getElementById("collections-scroll-tablet");
            const desktopEl = document.getElementById("collections-scroll-desktop");
            
            if (tabletEl) tabletEl.scrollBy({ left: 340, behavior: "smooth" });
            if (desktopEl) desktopEl.scrollBy({ left: 360, behavior: "smooth" });
          }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="#1c5f67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <ProductModal
        open={open}
        onOpenChange={setOpen}
        item={
          selected || {
            id: 0,
            title: "",
            subtitle: "",
            price: "",
            image: "/placeholder.svg?height=900&width=720",
            description: "",
            gallery: ["/placeholder.svg?height=1200&width=900"],
            video: null,
            femaleCharacteristics: [
              { label: "Золото", value: "585 пробы" },
              { label: "Бриллиант", value: "0,04 карата" },
              { label: "Вес", value: "2,5 - 3,5 г" },
            ],
            maleCharacteristics: [
              { label: "Серебро", value: "925 пробы" },
              { label: "Вес", value: "3 - 4 г" },
            ],
          }
        }
      />
    </SectionContainer>
  )
}