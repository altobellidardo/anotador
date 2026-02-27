'use client'

import Template from '../template'
import { useBerenjena } from '@/stores/berenjena'
import { ScoresBerenjena } from './scores'

function Berenjena () {
  return (
    <Template
      store={useBerenjena}
      playerFactory={(base) => ({ ...base, scores: [] })}
      getRoundCount={(players) => players[0]?.scores.length ?? 0}
    >
      <ScoresBerenjena />
    </Template>
  )
}

export default Berenjena
