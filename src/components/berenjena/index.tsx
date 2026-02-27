'use client'

import { randomUUID } from '@/lib/uuid'
import { AddPlayers } from '../add-players'
import { useBerenjena } from '@/stores/berenjena'
import { BerenjenaScore } from './scores'
import { PlayersHeader } from './players-header'

function Berenjena () {
  const { players, addPlayer } = useBerenjena()

  const newPlayer = (name: string) => {
    if (!name.trim()) return

    addPlayer({
      id: randomUUID(),
      name: name.trim().charAt(0).toUpperCase() + name.trim().slice(1),
      scores: []
    })
  }

  return (
    <div className='mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8'>
      <PlayersHeader />
      <AddPlayers addPlayer={newPlayer} />

      {players.length > 0
        ? <BerenjenaScore />
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
