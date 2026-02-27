'use client'

import { AddPlayers } from '../add-players'
import { PlayersHeader } from '../players-header'
import { ScoresBerenjena } from './scores'
import { useBerenjena } from '@/stores/berenjena'
import { useCallback } from 'react'
import { randomUUID } from '@/lib/uuid'
import { BerePlayer } from '@/common/types'

function Berenjena () {
  const { players, resetGame, addPlayer } = useBerenjena()

  const newPlayer = useCallback((name: string) => {
    if (!name.trim()) return

    const player: BerePlayer = {
      id: randomUUID(),
      name: name.trim().charAt(0).toUpperCase() + name.trim().slice(1),
      scores: [],
    }
    addPlayer(player)
  }, [addPlayer])

  const roundCount = players.length > 0 ? players[0].scores.length : 0

  return (
    <div className='mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8'>
      <PlayersHeader players={players} resetGame={resetGame} roundCount={roundCount} />
      <AddPlayers addPlayer={newPlayer} />

      {players.length > 0
        ? <ScoresBerenjena />
        : (
          <div className='flex flex-1 flex-col items-center justify-center gap-2 py-16 text-center'>
            <p className='text-lg font-medium text-muted-foreground'>
              Sin jugadores aún
            </p>
            <p className='text-sm text-muted-foreground/70'>
              Agrega jugadores arriba.
            </p>
          </div>
          )}
    </div>
  )
}

export default Berenjena
