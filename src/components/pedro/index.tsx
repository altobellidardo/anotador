'use client'

import Template from '../template'
import { usePedro } from '@/stores/pedro'
import { ScoresPedro } from './scores'

function Pedro () {
  return (
    <Template
      store={usePedro}
      playerFactory={(base) => ({ ...base, score: 0 })}
    >
      <ScoresPedro />
    </Template>
  )
}

export default Pedro
