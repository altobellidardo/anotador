'use client'

import { randomUUID } from '@/lib/uuid'
import { usePedro } from '@/stores/pedro'
import { PedroScore } from './score'
import { Template } from '../template'

function Pedro () {
  const { players, addPlayer, resetGame } = usePedro()

  const newPlayer = (name: string) => {
    if (!name.trim()) return

    addPlayer({
      id: randomUUID(),
      name: name.trim().charAt(0).toUpperCase() + name.trim().slice(1),
      scores: []
    })
  }

  return (
    <Template
      playersCount={players.length}
      roundCount={players.length ? players[0]?.scores.length : 0}
      onAddPlayer={newPlayer}
      onReset={resetGame}
    >
      <PedroScore />
    </Template>
  )
}

export default Pedro
