'use client'

import { randomUUID } from '@/lib/uuid'
import { useBerenjena } from '@/stores/berenjena'
import { BerenjenaScore } from './scores'
import { Template } from '../template'

function Berenjena () {
  const { players, addPlayer, resetGame } = useBerenjena()

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
      <BerenjenaScore />
    </Template>
  )
}

export default Berenjena
