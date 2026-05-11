"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'

export default function ProductPage() {
  const product =     {
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
      { label: "Золото", value: "750 пробы" },
      { label: "Бриллиант", value: "1 кр" },
    ],
    maleCharacteristics: [
      { label: "Вес", value: "3,68 г" },
    ],
    additionalInfo: "Камень \n — Бриллиант: 1 карат \n — Чистота: 3/5 \n — Цвет: G–H \n — Огранка: круглая, 57 граней \n — Происхождение: Канада",
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const images = product.gallery && product.gallery.length > 0 ? product.gallery : ['/placeholder.svg']
  const hasVideo = !!product.video

  const currentImage = images[Math.min(activeIndex, images.length - 1)]

  const handlePrev = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : images.length - (hasVideo ? 0 : 1)))
  }

  const handleNext = () => {
    setActiveIndex(prev => (prev < images.length - (hasVideo ? 0 : 1) ? prev + 1 : 0))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="p-4 lg:p-6 border-b border-gray-100">
        <Link 
          href="/"
          className="inline-flex items-center text-[#1c5f67] hover:text-[#1c5f67]/80 transition-colors text-sm lg:text-base"
        >
          <ArrowLeft className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
          Назад на главную
        </Link>
      </nav>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Левая колонка - галерея */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <div className="space-y-6">
            {/* Основное изображение */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-50">
              {hasVideo && activeIndex === images.length ? (
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  poster={images[0]}
                >
                  <source src={product.video || ""} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={currentImage}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
              
              {/* Стрелки навигации */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white shadow-md transition-all"
                  >
                    <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white shadow-md transition-all"
                  >
                    <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Превью галереи */}
            {(images.length > 1 || hasVideo) && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative h-16 w-16 lg:h-20 lg:w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      activeIndex === idx 
                        ? 'border-[#1c5f67] scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Превью ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
                {hasVideo && (
                  <button
                    onClick={() => setActiveIndex(images.length)}
                    className={`relative h-16 w-16 lg:h-20 lg:w-20 shrink-0 rounded-lg border-2 flex items-center justify-center transition-all ${
                      activeIndex === images.length 
                        ? 'border-[#1c5f67] scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Play className="h-6 w-6 lg:h-8 lg:w-8 text-[#1c5f67]" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Правая колонка - информация */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <div className="space-y-6">
            {/* Заголовок */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#1c140a] mb-2">
                {product.title}
              </h1>
              <p className="text-lg text-[#1c140a]/70">{product.subtitle}</p>
            </div>

            <div className="h-px w-24 bg-gradient-to-r from-[#1c5f67] to-transparent" />

            {/* Описание */}
            <p className="text-[#1c140a]/80 leading-relaxed text-base lg:text-lg">
              {product.description}
            </p>

            {/* Цена */}
            <p className="text-xl lg:text-2xl text-[#1c5f67] font-semibold">
              {product.price}
            </p>

            {/* Характеристики */}
            {(product.femaleCharacteristics || product.maleCharacteristics) && (
              <div className="space-y-6">
                {product.femaleCharacteristics && product.femaleCharacteristics.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-[#1c5f67] mb-3 text-lg">Кольцо:</h3>
                    <ul className="space-y-2 text-sm lg:text-base text-[#1c140a]/70">
                      {product.femaleCharacteristics.map((c, i) => (
                        <li key={i} className="flex">
                          <span className="w-24 lg:w-28 text-[#1c5f67] font-medium">{c.label}:</span>
                          <span>{c.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.maleCharacteristics && product.maleCharacteristics.length > 0 && (
                  <div>
                    <ul className="space-y-2 text-sm lg:text-base text-[#1c140a]/70">
                      {product.maleCharacteristics.map((c, i) => (
                        <li key={i} className="flex">
                          <span className="w-24 lg:w-28 text-[#1c5f67] font-medium">{c.label}:</span>
                          <span>{c.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Дополнительная информация */}
            {product.additionalInfo && (
              <div className="whitespace-pre-line border-l-4 border-[#1c5f67] pl-4 lg:pl-6">
                <p className="text-[#1c140a]/80 leading-relaxed text-sm lg:text-base italic">
                  {product.additionalInfo}
                </p>
              </div>
            )}

            {/* Преимущества */}
            <div className="bg-gray-50 rounded-2xl p-4 lg:p-6">
              <h4 className="font-semibold text-[#1c5f67] mb-3">Условия:</h4>
              <ul className="space-y-2 text-sm lg:text-base text-[#1c140a]/70">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#1c5f67] rounded-full mr-3"></span>
                  Доставка по Казахстану
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#1c5f67] rounded-full mr-3"></span>
                  Возврат в течение 30 дней
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#1c5f67] rounded-full mr-3"></span>
                  Подарочная упаковка
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#1c5f67] rounded-full mr-3"></span>
                  Сертификат подлинности
                </li>
              </ul>
            </div>

            {/* Кнопка консультации */}
            <Button
              asChild
              className="w-full lg:w-auto rounded-full bg-[#1c5f67] px-8 py-3 text-white hover:bg-[#1c5f67]/90 text-base lg:text-lg font-semibold"
            >
              <a 
                href="https://wa.me/77002437689" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Консультация в WhatsApp
              </a>
            </Button>

          </div>
        </div>
      </div>
    </div>
  )
}