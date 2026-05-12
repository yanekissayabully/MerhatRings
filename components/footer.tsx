import { Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const links = [
    { href: "#collections", label: "Коллекции" },
    { href: "#about", label: "О бренде" },
    { href: "#contact", label: "Контакты" },
  ]
  const socials = [
    { href: "https://www.instagram.com/merhat.gold?igsh=MTc3bXVlMjI4ZG15Zg%3D%3D&utm_source=qr", label: "Instagram", icon: Instagram },
    { href: "https://www.youtube.com/@merhat_jewelry", label: "YouTube", icon: Youtube },
    { href: "https://wa.me/77079623217", label: "WhatsApp", icon: MessageCircle },
  ]
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1c5f67] to-transparent opacity-70" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          {/* Логотип (обновленная версия) */}
          <div className="flex items-center gap-3">
            <Link href="#" className="flex items-center gap-2">
              <Image
                src="/logoMerhat.png"
                alt="Merhat Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Навигация */}
          <nav className="flex gap-6 md:justify-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#1c140a]/70 hover:text-[#1c5f67] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Социальные сети с добавленным WhatsApp */}
          <div className="flex gap-4 md:justify-end">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.label === "WhatsApp" ? "_blank" : undefined}
                  rel={s.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-[#1c5f67]/40 text-[#1c140a]/70 hover:text-black hover:bg-[#1c5f67]/10 hover:border-[#1c5f67] transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#1c140a]/60">
          <p>© {new Date().getFullYear()} Merhat Jewelry. Все права защищены.</p>
          <p>Политика конфиденциальности · Условия использования</p>
        </div>
      </div>
    </footer>
  )
}