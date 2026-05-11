// "use client"

// import SectionContainer from "./section-container"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { sendMessage } from "@/app/actions/send-message"
// import { useState } from "react"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { Mail, Phone, MapPin } from 'lucide-react'

// export default function Contact() {
//   const [status, setStatus] = useState<{ ok: boolean; message?: string; error?: string } | null>(null)

//   return (
//     <SectionContainer id="contact" className="py-20 md:py-14">
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
//           Связаться
//         </p>
//         <h2
//           className="text-3xl md:text-4xl mt-3"
//           style={{ fontFamily: "var(--font-cormorant)" }}
//         >
//           Мы рядом, чтобы помочь
//         </h2>
//       </motion.div>

//       <div className="grid gap-8 lg:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, x: -18 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6 }}
//           className="rounded-[28px] border border-[#1c5f67]/40 bg-white p-5 md:p-6 shadow-[0_20px_60px_rgba(217,177,68,0.12)]"
//         >
//           <form
//             action={async (formData: FormData) => {
//               const res = await sendMessage(formData)
//               setStatus(res)
//             }}
//             className="space-y-4"
//           >
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="space-y-2">
//                 <Label htmlFor="name" className="text-[#1c140a]">Имя</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   placeholder="Ваше имя"
//                   className="rounded-2xl bg-white border-[#1c5f67]/40 text-[#1c140a] placeholder:text-[#1c140a]/45 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1c5f67]"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-[#1c140a]">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   className="rounded-2xl bg-white border-[#1c5f67]/40 text-[#1c140a] placeholder:text-[#1c140a]/45 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1c5f67]"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex items-center justify-between gap-4 flex-wrap">
// <Button
//   type="submit"
// className="relative overflow-hidden rounded-full px-6 h-10
//   bg-[#1c5f67] hover:bg-[#1e453d]
//   border border-[#1c5f67]/90
//   text-white font-medium
//   shadow-[0_4px_20px_rgba(42,85,78,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]
//   hover:shadow-[0_6px_25px_rgba(42,85,78,0.4)]
//   transition-all duration-300
//   hover:brightness-110
//   transform hover:scale-[1.02] active:scale-100
//   group">
//   <span className="relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
//     Отправить
//   </span>
  
// </Button>
//               {status && (
//                 <p
//                   role="status"
//                   className={status.ok ? "text-emerald-700" : "text-red-600"}
//                 >
//                   {status.ok ? status.message : status.error}
//                 </p>
//               )}
//             </div>
//           </form>

//           <div className="mt-6 grid gap-3 text-[#1c140a]/80">
//             <p className="flex items-center gap-2">
//               <Mail className="h-4 w-4 text-[#1c5f67]" />
//               merhat.jew@gmail.com
//             </p>
//             <p className="flex items-center gap-2">
//               <Phone className="h-4 w-4 text-[#1c5f67]" />
//               +7 700 243 7689
//             </p>
//             <p className="flex items-center gap-2">
//               <MapPin className="h-4 w-4 text-[#1c5f67]" />
//               г Алматы, бц Success, Жандосова 1/1, 3 этаж
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 18 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6 }}
//           className="relative rounded-[28px] overflow-hidden border border-[#1c5f67]/40 bg-white"
//         >
//           <Image
//             src="/1.jpg?height=900&width=1400"
//             alt="Карта расположения бутика"
//             fill
//             className="object-cover"
//             sizes="(min-width: 1024px) 50vw, 100vw"
//           />
//           <div className="absolute inset-0 bg-gradient-to-tr from-[#fff2cc]/50 via-transparent to-white/30" />
//           <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/70 backdrop-blur-md border border-[#1c5f67]/40 p-4">
//             <p className="text-sm text-[#1c140a]/70">
//               Откройте для себя наследие ювелирного искусства.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </SectionContainer>
//   )
// }



// "use client"

// import SectionContainer from "./section-container"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { useState } from "react"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { Mail, Phone, MapPin } from 'lucide-react'

// export default function Contact() {
//   const [status, setStatus] = useState<{ ok: boolean; message?: string; error?: string } | null>(null)

//   // Функция для отправки данных в Telegram
//       const sendToMail = async (formData: FormData) => {
//   try {
//     const response = await fetch("/sendmail.php", {
//       method: "POST",
//       body: formData,
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     return { ok: false, error: "Ошибка сети" };
//   }
// };

//   return (
//     <SectionContainer id="contact" className="py-20 md:py-14">
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
//           Связаться
//         </p>
//         <h2
//           className="text-3xl md:text-4xl mt-3"
//           style={{ fontFamily: "var(--font-cormorant)" }}
//         >
//           Мы рядом, чтобы помочь
//         </h2>
//       </motion.div>

//       <div className="grid gap-8 lg:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, x: -18 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6 }}
//           className="rounded-[28px] border border-[#1c5f67]/40 bg-white p-5 md:p-6 shadow-[0_20px_60px_rgba(217,177,68,0.12)]"
//         >
// <form
//   action={async (formData: FormData) => {
//     const res = await sendToMail(formData);
//     setStatus(res);
//   }}
//   className="space-y-4"
// >
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="space-y-2">
//                 <Label htmlFor="name" className="text-[#1c140a]">Имя</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   placeholder="Ваше имя"
//                   className="rounded-2xl bg-white border-[#1c5f67]/40 text-[#1c140a] placeholder:text-[#1c140a]/45 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1c5f67]"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phone" className="text-[#1c140a]">Телефон</Label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   placeholder="+7 (XXX) XXX-XX-XX"
//                   className="rounded-2xl bg-white border-[#1c5f67]/40 text-[#1c140a] placeholder:text-[#1c140a]/45 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1c5f67]"
//                   required
//                 />
//               </div>
//             </div>
//             {/* <div className="space-y-2">
//               <Label htmlFor="message" className="text-[#1c140a]">Сообщение (необязательно)</Label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Ваше сообщение..."
//                 className="rounded-2xl bg-white border-[#1c5f67]/40 text-[#1c140a] placeholder:text-[#1c140a]/45 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1c5f67] min-h-[100px]"
//               />
//             </div> */}
//             <div className="flex items-center justify-between gap-4 flex-wrap">
//               <Button
//                 type="submit"
//                 className="relative overflow-hidden rounded-full px-6 h-10
//                   bg-[#1c5f67] hover:bg-[#1e453d]
//                   border border-[#1c5f67]/90
//                   text-white font-medium
//                   shadow-[0_4px_20px_rgba(42,85,78,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]
//                   hover:shadow-[0_6px_25px_rgba(42,85,78,0.4)]
//                   transition-all duration-300
//                   hover:brightness-110
//                   transform hover:scale-[1.02] active:scale-100
//                   group"
//               >
//                 <span className="relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
//                   Отправить
//                 </span>
//               </Button>
//               {status && (
//                 <p
//                   role="status"
//                   className={status.ok ? "text-emerald-700" : "text-red-600"}
//                 >
//                   {status.ok ? status.message : status.error}
//                 </p>
//               )}
//             </div>
//           </form>

//           <div className="mt-6 grid gap-3 text-[#1c140a]/80">
//             <a 
//               href="mailto:merhat.jew@gmail.com" 
//               className="flex items-center gap-2 hover:text-[#1c5f67] transition-colors"
//             >
//               <Mail className="h-4 w-4 text-[#1c5f67]" />
//               merhat.jew@gmail.com
//             </a>
//             <a 
//               href="tel:+77002437689" 
//               className="flex items-center gap-2 hover:text-[#1c5f67] transition-colors"
//             >
//               <Phone className="h-4 w-4 text-[#1c5f67]" />
//               +7 700 243 7689
//             </a>
//             <a 
//               href="https://2gis.kz/almaty/firm/70000001038668959?m=76.912853%2C43.237554%2F16" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 hover:text-[#1c5f67] transition-colors"
//             >
//               <MapPin className="h-4 w-4 text-[#1c5f67]" />
//               г Алматы, бц Success, Жандосова 1/1, 3 этаж
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 18 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6 }}
//           className="relative rounded-[28px] overflow-hidden border border-[#1c5f67]/40 bg-white"
//         >
//           <Image
//             src="/rings.jpg?height=900&width=1400"
//             alt="Карта расположения бутика"
//             fill
//             className="object-cover"
//             sizes="(min-width: 1024px) 50vw, 100vw"
//           />
//           <div className="absolute inset-0 bg-gradient-to-tr from-[#fff2cc]/50 via-transparent to-white/30" />
//           <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/70 backdrop-blur-md border border-[#1c5f67]/40 p-4">
//             <p className="text-sm text-[#1c140a]/70">
//               Откройте для себя наследие ювелирного искусства.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </SectionContainer>
//   )
// }




"use client"

import SectionContainer from "./section-container"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle, ShieldCheck, Clock } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState<{ ok: boolean; message?: string; error?: string } | null>(null)

  const sendToMail = async (formData: FormData) => {
    try {
      const response = await fetch("/sendmail.php", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return { ok: false, error: "Ошибка сети" };
    }
  };

  return (
    <SectionContainer id="contact" className="py-20 md:py-14">
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
          Связаться
        </p>
        <h2
          className="text-3xl md:text-4xl mt-3"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Получите консультацию — ответим в течение 15 минут
        </h2>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] border border-[#1c5f67]/40 bg-white p-5 md:p-6 shadow-[0_20px_60px_rgba(217,177,68,0.12)]"
        >
          <form
            action={async (formData: FormData) => {
              const res = await sendToMail(formData);
              setStatus(res);
            }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#1c140a]">Имя</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ваше имя"
                  className="rounded-2xl bg-white border-[#1c5f67]/40 text-[#1c140a] placeholder:text-[#1c140a]/45 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1c5f67]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#1c140a]">Телефон</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 (XXX) XXX-XX-XX"
                  className="rounded-2xl bg-white border-[#1c5f67]/40 text-[#1c140a] placeholder:text-[#1c140a]/45 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1c5f67]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 flex-wrap">
                <Button
                  type="submit"
                  className="relative overflow-hidden rounded-full px-6 h-10
                    bg-[#1c5f67] hover:bg-[#1e453d]
                    border border-[#1c5f67]/90
                    text-white font-medium
                    shadow-[0_4px_20px_rgba(42,85,78,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]
                    hover:shadow-[0_6px_25px_rgba(42,85,78,0.4)]
                    transition-all duration-300
                    hover:brightness-110
                    transform hover:scale-[1.02] active:scale-100"
                >
                  <span className="relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                    Отправить
                  </span>
                </Button>
                {status && (
                  <p
                    role="status"
                    className={status.ok ? "text-emerald-700" : "text-red-600"}
                  >
                    {status.ok ? status.message : status.error}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1.5 text-xs text-[#1c140a]/50">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#1c5f67]/60 shrink-0" />
                  Не передаём данные третьим лицам
                </span>
              </div>
            </div>
          </form>

          <div className="mt-5">
            <a
              href="https://wa.me/77002437689"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full rounded-full h-11
                bg-[#25D366] hover:bg-[#1ebe5c]
                text-white font-medium text-sm
                shadow-[0_4px_20px_rgba(37,211,102,0.35)]
                hover:shadow-[0_6px_28px_rgba(37,211,102,0.45)]
                transition-all duration-300 hover:scale-[1.02] active:scale-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать прямо сейчас
            </a>
          </div>

          <div className="mt-5 grid gap-3 text-[#1c140a]/80 border-t border-[#1c5f67]/10 pt-5">
            <a
              href="mailto:merhat.jew@gmail.com"
              className="flex items-center gap-2 hover:text-[#1c5f67] transition-colors"
            >
              <Mail className="h-4 w-4 text-[#1c5f67] shrink-0" />
              merhat.jew@gmail.com
            </a>
            <a
              href="tel:+77002437689"
              className="flex items-center gap-2 hover:text-[#1c5f67] transition-colors"
            >
              <Phone className="h-4 w-4 text-[#1c5f67] shrink-0" />
              +7 700 243 7689
            </a>
            <a
              href="https://yandex.kz/maps/org/success_biznes_tsentr/134474216164/?ll=76.912426%2C43.237504&z=17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#1c5f67] transition-colors"
            >
              <MapPin className="h-4 w-4 text-[#1c5f67] shrink-0" />
              г Алматы, бц Success, Жандосова 1/1, 3 этаж
            </a>
          </div>
        </motion.div>

        {/* Яндекс.Карта */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[28px] overflow-hidden border border-[#1c5f67]/40 bg-white min-h-[360px]"
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A323d51680c2d5ccf2b13522836e634ebbf4bec17d7a6a40e0a99a73c500db640&amp;source=constructor"
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full border-0"
            title="Яндекс.Карта — офис"
            loading="lazy"
            allowFullScreen
          />
          {/* Подпись поверх карты */}
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#1c5f67]/30 p-3.5 pointer-events-none">
            <p className="text-sm font-medium text-[#1c140a] flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#1c5f67] shrink-0" />
              бц Success, Жандосова 1/1, 3 этаж
            </p>
            <p className="text-xs text-[#1c140a]/55 mt-0.5 ml-6">г. Алматы</p>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}