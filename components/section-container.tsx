import { cn } from "@/lib/utils"
import { type ReactNode } from "react"

export default function SectionContainer({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("w-full", className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">{children}</div>
    </section>
  )
}
