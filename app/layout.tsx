import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Merhat Jewelry',
  description: 'Премиальные ювелирные украшения в Казахстане',
  generator: 'QUASAR',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoMerhat.svg" />
        {/* Подключаем Montserrat из Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html {
            font-family: 'Montserrat', sans-serif;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}