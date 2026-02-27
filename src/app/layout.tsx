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
        className={`${outfitSans.variable} ${geistMono.variable} antialiased relative min-h-dvh bg-background overflow-x-hidden`}
      >
        {/* Abstract Background Effects */}
        <div className='pointer-events-none fixed inset-0 z-0 overflow-hidden'>
          <div className='absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-linear-to-br from-primary/30 to-rose-500/20 opacity-60 blur-[120px] mix-blend-normal' />
          <div className='absolute top-[10%] -right-[10%] h-[70%] w-[50%] rounded-full bg-linear-to-bl from-amber-500/20 to-primary/20 opacity-50 blur-[100px] mix-blend-normal' />
          <div className='absolute -bottom-[20%] left-[20%] h-[50%] w-[80%] rounded-full bg-linear-to-tr from-emerald-500/20 to-primary/30 opacity-60 blur-[120px] mix-blend-normal' />
          {/* Subtle grid pattern overlay */}
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]' />
        </div>

        {/* Foreground Content wrapper */}
        <div className='relative z-10 flex min-h-dvh flex-col backdrop-blur-[2px]'>
          {children}
        </div>
      </body>
    </html>
  )
}
