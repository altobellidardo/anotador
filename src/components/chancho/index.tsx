import { useChancho } from '@/stores/chancho'
import { ScoresChancho } from './scores'
import Template from '../template'

function Chancho () {
  return (
    <Template
      store={useChancho}
      playerFactory={(base) => ({ ...base, score: 0 })}
    >
      <ScoresChancho />
    </Template>
  )
}

export default Chancho
