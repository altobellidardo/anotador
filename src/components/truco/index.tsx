'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { TrucoScores, TrucoTeam } from '@/common/types'
import { GAME_CONFIG } from '@/common/constants'
import { ConfirmDrawer } from '@/components/confirm-drawer'
import { RotateCcw } from 'lucide-react'
import { Matchbox } from './matchbox'

function TrucoScoreboard () {
  const [scores, setScores] = useState<TrucoScores>({ nosotros: 0, ellos: 0 })

  const changeScore = useCallback((team: TrucoTeam, amount: number) => {
    setScores(prev => {
      const newScore = Math.max(0, Math.min(GAME_CONFIG.TRUCO.MAX_SCORE, prev[team] + amount))
      return { ...prev, [team]: newScore }
    })
  }, [])

  const Matchboxes = useCallback(({ amount }: { amount: number }) => {
    const boxes = []

    for (let i = 0; i < GAME_CONFIG.TRUCO.TOTAL_BOXES; i++) {
      const pointsLeft = Math.max(0, amount - i * GAME_CONFIG.TRUCO.POINTS_PER_BOX)
      const pointsInBox = Math.min(GAME_CONFIG.TRUCO.POINTS_PER_BOX, pointsLeft)
      const index = GAME_CONFIG.TRUCO.BOX_ORDER[i]

      boxes[index] = <Matchbox key={index} amount={pointsInBox} />
    }

    return boxes
  }, [])

  return (
    <section className='h-full flex flex-col items-center justify-center p-4'>
      <div className='rounded-2xl shadow-xl w-full max-w-md overflow-hidden border-2 border-border'>

        <div className='grid grid-cols-2 divide-x-2 divide-border p-6'>

          {(['nosotros', 'ellos'] as TrucoTeam[]).map((team) => (
            <div key={team} className='flex flex-col items-center px-2'>
              <h2 className='text-lg font-bold text-primary mb-6 capitalize select-none'>{team}</h2>
              <div className='text-3xl font-black text-accent-foreground mb-2'>{scores[team]}</div>

              <div className='grid grid-cols-2 gap-4 min-h-45 mb-8 w-full justify-items-center'>
                <Matchboxes amount={scores[team]} />
              </div>

              <div className='flex space-x-3 mt-auto'>
                <Button
                  onClick={() => changeScore(team, -1)}
                  className='bg-red-700/30 hover:bg-red-800/50 active:bg-red-800/70 text-primary disabled:opacity-50 rounded-xl text-3xl size-12 transition-transform active:scale-95 leading-none pt-1 select-none'
                  disabled={scores[team] === 0}
                >
                  -
                </Button>
                <Button
                  onClick={() => changeScore(team, 1)}
                  className='bg-green-700/30 hover:bg-green-800/50 active:bg-green-800/70 text-primary disabled:opacity-50 rounded-xl text-3xl size-12 transition-transform active:scale-95 leading-none pt-1 select-none'
                  disabled={scores[team] === GAME_CONFIG.TRUCO.MAX_SCORE}
                >
                  +
                </Button>
              </div>
            </div>
          ))}
        </div>

        <ConfirmDrawer
          title='¿Estás seguro de reiniciar el juego?'
          description='Esta acción no se puede deshacer.'
          confirmFn={() => setScores({ nosotros: 0, ellos: 0 })}
        >
          <Button
            variant='outline'
            size='sm'
            disabled={scores.nosotros === 0 && scores.ellos === 0}
            className='absolute bottom-4 right-4 disabled:opacity-50'
          >
            <RotateCcw className='size-4' />
            Reiniciar
          </Button>
        </ConfirmDrawer>
      </div>
    </section>
  )
}

export default TrucoScoreboard
