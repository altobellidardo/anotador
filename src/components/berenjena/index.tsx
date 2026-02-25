'use client'

import { HeaderBerenjena } from './header'
import { PlayerBerenjena } from './players'
import { ScoresBerenjena } from './scores'
import { useBerenjena } from '@/stores/berenjena'

export interface Player {
  id: string
  name: string
  scores: number[]
}

function Berenjena () {
  const { players } = useBerenjena()

  return (
    <div className='mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8'>
      <HeaderBerenjena />
      <PlayerBerenjena />

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
