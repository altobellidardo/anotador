'use client'

import { randomUUID } from '@/lib/uuid'
import { BasePlayer, PlayerStoreHook, PlayerStoreState } from '@/common/types'
import { PlayersHeader } from './players-header'
import { AddPlayers } from './add-players'

interface Props<TPlayer extends BasePlayer = BasePlayer> {
  children: React.ReactNode
  store: PlayerStoreHook<TPlayer>
  playerFactory: (base: BasePlayer) => TPlayer
  getRoundCount?: (players: TPlayer[]) => number
}

function Template <TPlayer extends BasePlayer> ({ children, store, playerFactory, getRoundCount }: Props<TPlayer>) {
  const { players, resetGame, addPlayer } = store() as PlayerStoreState<TPlayer>

  const newPlayer = (name: string) => {
    if (!name.trim()) return

    const basePlayer: BasePlayer = {
      id: randomUUID(),
      name: name.trim().charAt(0).toUpperCase() + name.trim().slice(1),
    }

    const player = playerFactory(basePlayer)
    addPlayer(player)
  }

  const roundCount = getRoundCount?.(players)

  return (
    <div className='mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8'>
      <PlayersHeader players={players} resetGame={resetGame} roundCount={roundCount} />
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
