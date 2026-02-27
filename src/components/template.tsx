'use client'

import { randomUUID } from '@/lib/uuid'
import { useCallback } from 'react'
import { ChanPlayer, PlayerStoreHook, PlayerStoreState } from '@/common/types'
import { PlayersHeader } from './players-header'
import { AddPlayers } from './add-players'

interface Props<TPlayer extends ChanPlayer = ChanPlayer> {
  children: React.ReactNode
  store: PlayerStoreHook<TPlayer>
}

function Template <TPlayer extends ChanPlayer> ({ children, store }: Props<TPlayer>) {
  const { players, resetGame, addPlayer } = store() as PlayerStoreState<TPlayer>

  const newPlayer = useCallback((name: string) => {
    if (!name.trim()) return

    const player: TPlayer = {
      id: randomUUID(),
      name: name.trim().charAt(0).toUpperCase() + name.trim().slice(1),
      score: 0,
    } as TPlayer
    addPlayer(player)
  }, [addPlayer])

  return (
    <div className='mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8'>
      <PlayersHeader players={players} resetGame={resetGame} />
      <AddPlayers addPlayer={newPlayer} />

      {players.length > 0
        ? <>{children}</>
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

export default Template
