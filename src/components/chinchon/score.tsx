import { Trash2, Trophy, ArrowUpCircle, ArrowDownCircle, MinusCircle } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useChinchon } from '@/stores/chinchon'
import type { ChinchonPlayer } from '@/common/types'
import dynamic from 'next/dynamic'

const ScoreDrawer = dynamic(() => import('./drawer').then(mod => mod.ScoreDrawer))

const totalScore = (player: ChinchonPlayer) =>
  player.scores.reduce((sum, s) => sum + s, 0)

export function ChinchonScore () {
  const { players, removePlayer } = useChinchon()

  const hasStarted = players.some(p => p.scores.length > 0)
  const minScore = players.length > 0 ? Math.min(...players.map(totalScore)) : 0

  return (
    <>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {players.map((player) => {
          const score = totalScore(player)
          const isWinner = hasStarted && score === minScore

          return (
            <Card
              key={player.id}
              className='relative gap-0 overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-primary/10 hover:border-primary/30 group'
            >
              <div className='absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

              <CardHeader className='pb-3'>
                <div className='flex items-start justify-between'>
                  <CardTitle className='font-(family-name:--font-heading) text-lg flex items-center gap-2 truncate pr-2'>
                    {player.name}
                    {isWinner && <Trophy className='size-5 text-amber-500 drop-shadow-sm' />}
                  </CardTitle>
                  <Button
                    variant='ghost'
                    size='icon-sm'
                    onClick={() => removePlayer(player.id)}
                    className='text-muted-foreground hover:text-destructive hover:bg-destructive/10 active:scale-95 transition-all z-10 touch-manipulation focus-visible:ring-2 focus-visible:ring-destructive/50'
                    aria-label={`Eliminar ${player.name}`}
                  >
                    <Trash2 className='size-4' />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className='flex flex-col gap-4'>
                <div className='flex items-baseline justify-between rounded-xl bg-linear-to-r from-primary/10 to-primary/5 px-4 py-3 shadow-inner ring-1 ring-primary/10'>
                  <span className='text-xs font-bold uppercase tracking-widest text-primary/70'>
                    Total
                  </span>
                  <span className='font-(family-name:--font-heading) text-4xl font-black text-primary drop-shadow-sm tabular-nums'>
                    {score}
                  </span>
                </div>

                {player.scores.length > 0 && (
                  <div className='flex flex-wrap gap-2 pt-1'>
                    {player.scores.map((s: number, i: number) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm transition-transform hover:scale-105 cursor-default ${s === 0
                          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 ring-1 ring-amber-500/20'
                          : 'bg-rose-500/15 text-rose-700 dark:text-rose-400 ring-1 ring-rose-500/20'
                          }`}
                      >
                        {s > 0 ? <ArrowUpCircle className='size-3.5 opacity-70' /> : s < 0 ? <ArrowDownCircle className='size-3.5 opacity-70' /> : <MinusCircle className='size-3.5 opacity-70' />}
                        <span className='tabular-nums'>R{i + 1}: {s}</span>
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <ScoreDrawer />
    </>
  )
}
