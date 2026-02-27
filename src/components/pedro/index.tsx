'use client'

import { AddPlayers } from '../add-players'
import { PlayersHeader } from '../players-header'
import { randomUUID } from '@/lib/uuid'
import { useCallback } from 'react'
import { PedroPlayer } from '@/common/types'
import { usePedro } from '@/stores/pedro'
// import { ScoresChancho } from './scores'

function Pedro () {
  const { players, resetGame, addPlayer } = usePedro()

  const newPlayer = useCallback((name: string) => {
    if (!name.trim()) return

    const player: PedroPlayer = {
      id: randomUUID(),
      name: name.trim().charAt(0).toUpperCase() + name.trim().slice(1),
      score: 0,
    }
    addPlayer(player)
  }, [addPlayer])

  return (
    <div className='mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8'>
      <PlayersHeader players={players} resetGame={resetGame} />
      <AddPlayers addPlayer={newPlayer} />

      {players.length > 0
        ? players.map(player => (
          <div key={player.id}>
            <p>{player.name}</p>
            <p>{player.score}</p>
          </div>
        ))
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

export default Pedro
