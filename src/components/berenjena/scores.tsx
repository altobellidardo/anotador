import { Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useBerenjena } from '@/stores/berenjena'
import { ScoreDrawer } from './drawer'
import type { BerePlayer } from '@/common/types'
import { useCallback } from 'react'

export function ScoresBerenjena () {
  const { players, removePlayer } = useBerenjena()

  const totalScore = useCallback((player: BerePlayer) =>
    player.scores.reduce((sum, s) => sum + s, 0), [])

  return (
    <>
      <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {players.map((player) => (
          <Card key={player.id} className='relative gap-0'>
            <CardHeader>
              <div className='flex items-start justify-between'>
                <CardTitle className='font-(family-name:--font-heading) text-base'>
                  {player.name}
                </CardTitle>
                <Button
                  variant='ghost'
                  size='icon-sm'
                  onClick={() => removePlayer(player.id)}
                  className='text-muted-foreground hover:text-destructive'
                >
                  <Trash2 className='size-3.5' />
                  <span className='sr-only'>
                    Eliminar {player.name}
                  </span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className='flex flex-col gap-3'>
              <div className='flex items-baseline justify-between rounded-lg bg-primary/5 px-3 py-2'>
                <span className='text-xs font-medium uppercase tracking-wider text-muted-foreground'>
                  Total
                </span>
                <span className='font-(family-name:--font-heading) text-2xl font-bold text-primary'>
                  {totalScore(player)}
                </span>
              </div>

              {player.scores.length > 0 && (
                <div className='flex flex-wrap gap-1.5'>
                  {player.scores.map((score: number, i: number) => (
                    <span
                      key={i}
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
                            score >= 0
                              ? 'bg-primary/10 text-primary'
                              : 'bg-destructive/10 text-destructive'
                          }`}
                    >
                      R{i + 1}:
                      {score}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <ScoreDrawer />
    </>
  )
}
