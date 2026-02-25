import { games } from './data'

export function getGame (slug: string) {
  const game = games.find(game => game.id === slug)
  return game ?? null
}
