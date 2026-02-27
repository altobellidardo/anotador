'use client'

import { randomUUID } from '@/lib/uuid'
import { AddPlayers } from '../add-players'
import { useChancho } from '@/stores/chancho'
import { ChanchoScore } from './scores'
import { PlayersHeader } from './players-header'

function Chancho () {
  const { players, addPlayer } = useChancho()

  const newPlayer = (name: string) => {
    if (!name.trim()) return

    addPlayer({
      id: randomUUID(),
      name: name.trim().charAt(0).toUpperCase() + name.trim().slice(1),
      score: 0
    })
  }

  return (
    <div className='mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8'>
      <PlayersHeader />
      <AddPlayers addPlayer={newPlayer} />

      {players.length > 0
        ? <ChanchoScore />
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

export default Chancho
