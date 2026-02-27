'use client'

import { randomUUID } from '@/lib/uuid'
import { useChinchon } from '@/stores/chinchon'
import { ChinchonScore } from './score'
import { Template } from '../template'

function Chinchon () {
  const { players, addPlayer, resetGame } = useChinchon()

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
      <ChinchonScore />
    </Template>
  )
}

export default Chinchon
