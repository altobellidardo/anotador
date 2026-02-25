import type { Metadata } from 'next'
import { Outfit, Geist_Mono as GeistMono } from 'next/font/google'
import './globals.css'

const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
})

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Anotador de Puntos',
  description: 'Lleva el marcador de tus juegos de cartas favoritos de forma sencilla y rapida.',
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' className='dark'>
      <body
        className={`${outfitSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
