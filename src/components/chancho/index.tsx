'use client'

import { randomUUID } from '@/lib/uuid'
import { useChancho } from '@/stores/chancho'
import { ChanchoScore } from './scores'
import { Template } from '../template'

function Chancho () {
  const { players, addPlayer, resetGame } = useChancho()

  const newPlayer = (name: string) => {
    if (!name.trim()) return

    addPlayer({
      id: randomUUID(),
      name: name.trim().charAt(0).toUpperCase() + name.trim().slice(1),
      score: 0
    })
  }

  return (
    <Template
      playersCount={players.length}
      onAddPlayer={newPlayer}
      onReset={resetGame}
    >
      <ChanchoScore />
    </Template>
  )
}

export default Chancho
