import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getGame } from '@/lib/getGame'

export default async function GameLayout ({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const game = getGame(slug)

  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='border-b border-border/60 bg-card'>
        <div className='mx-auto flex h-14 max-w-4xl items-center gap-3 px-4'>
          <Link
            href='/'
            className='flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            <ArrowLeft className='size-4' />
            <span className='sr-only sm:not-sr-only'>Volver</span>
          </Link>
          <div className='h-5 w-px bg-border' />
          <span className='font-(family-name:--font-heading) text-sm font-bold text-foreground'>
            Anotador <span className='capitalize'>{game?.name}</span>
          </span>
        </div>
      </header>
      <main className='h-full flex flex-1 flex-col justify-center'>{children}</main>
    </div>
  )
}
