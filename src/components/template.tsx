'use client'

import { AddPlayers } from './add-players'
import { PlayersHeader } from './players-header'

interface TemplateProps {
  children: React.ReactNode
  playersCount: number
  roundCount?: number
  onAddPlayer: (name: string) => void
  onReset: () => void
}

export function Template ({ children, playersCount, roundCount, onAddPlayer, onReset }: TemplateProps) {
  return (
    <div className='mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8'>
      <PlayersHeader playersCount={playersCount} roundCount={roundCount} onReset={onReset} />
      <AddPlayers addPlayer={onAddPlayer} />

      {playersCount > 0
        ? children
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
