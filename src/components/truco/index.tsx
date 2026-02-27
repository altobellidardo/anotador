'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TrucoScores, TrucoTeam } from '@/common/types'
import { GAME_CONFIG } from '@/common/constants'
import { ConfirmDrawer } from '@/components/confirm-drawer'
import { RotateCcw, Plus, Minus } from 'lucide-react'
import { Matchbox } from './matchbox'

function Matchboxes ({ amount }: { amount: number }) {
  const boxes = []

  for (let i = 0; i < GAME_CONFIG.TRUCO.TOTAL_BOXES; i++) {
    const pointsLeft = Math.max(0, amount - i * GAME_CONFIG.TRUCO.POINTS_PER_BOX)
    const pointsInBox = Math.min(GAME_CONFIG.TRUCO.POINTS_PER_BOX, pointsLeft)
    const index = GAME_CONFIG.TRUCO.BOX_ORDER[i]

    boxes[index] = <Matchbox key={index} amount={pointsInBox} />
  }

  return <>{boxes}</>
}

function TrucoScoreboard () {
  const [scores, setScores] = useState<TrucoScores>({ nosotros: 0, ellos: 0 })

  const changeScore = (team: TrucoTeam, amount: number) => {
    setScores(prev => {
      const newScore = Math.max(0, Math.min(GAME_CONFIG.TRUCO.MAX_SCORE, prev[team] + amount))
      return { ...prev, [team]: newScore }
    })
  }

  return (
    <section className='h-full flex flex-col items-center justify-center p-4 lg:p-8'>
      <div className='rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden bg-background ring-1 ring-border/50 relative'>
        <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none' />

        <div className='grid grid-cols-2 divide-x divide-border/50 relative z-10'>
          {(['nosotros', 'ellos'] as TrucoTeam[]).map((team) => (
            <div key={team} className='flex flex-col items-center px-4 py-8 sm:px-8'>
              <h2 className='text-sm sm:text-base font-bold text-primary/70 tracking-widest uppercase mb-4 select-none'>
                {team}
              </h2>

              <div className='text-6xl sm:text-7xl font-black text-primary mb-8 drop-shadow-sm tabular-nums transition-all'>
                {scores[team]}
              </div>

              <div className='grid grid-cols-2 gap-4 sm:gap-6 min-h-45 mb-10 w-full justify-items-center'>
                <Matchboxes amount={scores[team]} />
              </div>

              <div className='flex space-x-4 mt-auto w-full max-w-[160px]'>
                <Button
                  onClick={() => changeScore(team, -1)}
                  className='flex-1 h-16 rounded-2xl bg-destructive/10 hover:bg-destructive/20 active:bg-destructive/30 text-destructive disabled:opacity-30 disabled:hover:bg-destructive/10 transition-all active:scale-95 touch-manipulation focus-visible:ring-2 focus-visible:ring-destructive/50'
                  disabled={scores[team] === 0}
                  aria-label={`Restar punto a ${team}`}
                >
                  <Minus className='size-6' />
                </Button>
                <Button
                  onClick={() => changeScore(team, 1)}
                  className='flex-1 h-16 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 active:bg-emerald-500/30 text-emerald-600 dark:text-emerald-400 disabled:opacity-30 disabled:hover:bg-emerald-500/10 transition-all active:scale-95 touch-manipulation focus-visible:ring-2 focus-visible:ring-emerald-500/50 shadow-xs'
                  disabled={scores[team] === GAME_CONFIG.TRUCO.MAX_SCORE}
                  aria-label={`Sumar punto a ${team}`}
                >
                  <Plus className='size-6' />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8 flex w-full max-w-2xl justify-center relative z-10'>
        <ConfirmDrawer
          title='¿Estás seguro de reiniciar el juego?'
          description='Esta acción no se puede deshacer y los puntos volverán a 0.'
          confirmFn={() => setScores({ nosotros: 0, ellos: 0 })}
        >
          <Button
            variant='outline'
            size='lg'
            disabled={scores.nosotros === 0 && scores.ellos === 0}
            className='bg-background/50 backdrop-blur-sm rounded-full shadow-sm hover:shadow active:scale-95 transition-all text-muted-foreground hover:text-foreground touch-manipulation focus-visible:ring-2 disabled:opacity-50 px-8'
          >
            <RotateCcw className='size-4 mr-2' />
            Reiniciar tablero
          </Button>
        </ConfirmDrawer>
      </div>
    </section>
  )
}

export default TrucoScoreboard
