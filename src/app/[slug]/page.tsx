import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Truco from '@/components/truco/index'
import { getGame } from '@/lib/getGame'
import Berenjena from '@/components/berenjena/index'
import Chancho from '@/components/chancho/index'
import { GAMES_ID } from '@/common/constants'
import Pedro from '@/components/pedro'

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
    default:
      return null
  }
}
