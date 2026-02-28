import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { GAMES_ID } from '@/common/constants'
import { getGame } from '@/lib/getGame'

const Truco = dynamic(() => import('@/components/truco/index'))
const Berenjena = dynamic(() => import('@/components/berenjena/index'))
const Chancho = dynamic(() => import('@/components/chancho/index'))
const Pedro = dynamic(() => import('@/components/pedro/index'))
const Chinchon = dynamic(() => import('@/components/chinchon/index'))

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

  switch (game.id) {
    case GAMES_ID.TRUCO:
      return <Truco />
    case GAMES_ID.BERENJENA:
      return <Berenjena />
    case GAMES_ID.CHANCHO:
      return <Chancho />
    case GAMES_ID.PEDRO:
      return <Pedro />
    case GAMES_ID.CHINCHON:
      return <Chinchon />
    default:
      return null
  }
}
