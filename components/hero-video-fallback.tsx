"use client"

import { useState } from "react"
import Image from "next/image"

export default function HeroVideoFallback({
  posterSrc = "/placeholder.svg?height=1600&width=1200",
}: {
  posterSrc?: string
}) {
  // Optional helper component if you want to switch to a poster image when video fails
  const [error, setError] = useState(false)
  if (error) {
    return (
      <Image
        src={posterSrc || "/placeholder.svg"}
        alt="Фоновое изображение"
        fill
        className="object-cover"
        sizes="100vw"
      />
    )
  }
  // For brevity, not using video here. Provided in case you add a <video> later.
  return (
    <Image
      src={posterSrc || "/placeholder.svg"}
      alt="Фоновое изображение"
      fill
      className="object-cover"
      sizes="100vw"
      onError={() => setError(true)}
    />
  )
}
