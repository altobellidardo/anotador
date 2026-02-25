import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Truco from '@/components/truco'
import { getGame } from '@/lib/getGame'
import Berenjena from '@/components/berenjena/index'

export async function generateMetadata ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) return { title: 'Juego no encontrado' }
  return {
    title: `${game.name} - Marcador de Cartas`,
    description: game.description,
  }
}

export default async function GamePage ({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const game = getGame(slug)

  if (!game) {
    notFound()
  }

  switch (game.name) {
    case 'Truco':
      return <Truco />
    case 'Berenjena':
      return <Berenjena />
    default:
      return null
  }
}
