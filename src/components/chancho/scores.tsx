import { ArrowDown, ArrowUp, Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useChancho } from '@/stores/chancho'
import { cn } from '@/lib/utils'

function Letter ({ active, text }: { active: boolean; text: string }) {
  return (
    <span className={cn('rounded-lg bg-primary/5 px-3 py-2 text-2xl font-bold text-primary', active && 'bg-primary text-primary-foreground')}>{text}</span>
  )
}

export function ChanchoScore () {
  const { players, removePlayer, incScore, decScore } = useChancho()

  return (
    <>
      <div className='grid gap-3 sm:grid-cols-2'>
        {players.map((player) => (
          <Card key={player.id} className={cn('gap-0', player.score >= 7 && 'bg-red-500/50')}>
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
            <CardContent className='flex flex-col gap-4'>
              <div className='space-x-1' aria-label={`Puntuación de ${player.name}`}>
                <Letter active={player.score >= 1} text='C' />
                <Letter active={player.score >= 2} text='H' />
                <Letter active={player.score >= 3} text='A' />
                <Letter active={player.score >= 4} text='N' />
                <Letter active={player.score >= 5} text='C' />
                <Letter active={player.score >= 6} text='H' />
                <Letter active={player.score >= 7} text='O' />
              </div>

              <div className='flex items-center gap-2'>
                <Button
                  variant='secondary'
                  size='lg'
                  className='text-xl font-bold active:bg-primary/30 select-none'
                  onClick={() => incScore(player.id)}
                  disabled={player.score >= 7}
                >
                  <ArrowUp className='size-5' />
                </Button>
                <Button
                  variant='secondary'
                  size='lg'
                  className='text-xl font-bold active:bg-primary/30 select-none'
                  onClick={() => decScore(player.id)}
                  disabled={player.score <= 0}
                >
                  <ArrowDown className='size-5' />
                </Button>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
