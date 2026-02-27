import { ArrowDown, ArrowUp, Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useChancho } from '@/stores/chancho'
import { cn } from '@/lib/utils'

function Letter ({ active, text }: { active: boolean; text: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-xl size-10 sm:size-12 lg:size-14 text-xl sm:text-2xl lg:text-3xl font-black shadow-sm ring-1 ring-primary/10 transition-all duration-300 transform',
        active
          ? 'bg-linear-to-b from-primary to-primary/80 text-primary-foreground shadow-md scale-110 -translate-y-1'
          : 'bg-linear-to-b from-primary/10 to-primary/5 text-primary/40'
      )}
    >
      {text}
    </span>
  )
}

export function ChanchoScore () {
  const { players, removePlayer, incScore, decScore } = useChancho()

  return (
    <>
      <div className='grid gap-4 sm:grid-cols-2'>
        {players.map((player) => (
          <Card
            key={player.id}
            className={cn(
              'relative gap-0 overflow-hidden transform transition-all duration-300 hover:shadow-xl border-primary/10 hover:border-primary/30 group',
              player.score >= 7 && 'bg-red-500/50'
            )}
          >
            <div className='absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

            <CardHeader className='pb-2'>
              <div className='flex items-start justify-between'>
                <CardTitle className='font-(family-name:--font-heading) text-lg truncate pr-2'>
                  {player.name}
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
            <CardContent className='flex flex-col gap-6 pt-2'>
              <div
                className='flex justify-center gap-1 sm:gap-2 items-center px-1 py-2 w-full'
                aria-label={`Puntuación de ${player.name}`}
              >
                <Letter active={player.score >= 1} text='C' />
                <Letter active={player.score >= 2} text='H' />
                <Letter active={player.score >= 3} text='A' />
                <Letter active={player.score >= 4} text='N' />
                <Letter active={player.score >= 5} text='C' />
                <Letter active={player.score >= 6} text='H' />
                <Letter active={player.score >= 7} text='O' />
              </div>

              <div className='flex items-center gap-3'>
                <Button
                  variant='secondary'
                  size='lg'
                  className='flex-1 h-14 text-xl font-bold rounded-xl active:bg-primary/30 hover:bg-primary/20 transition-colors select-none touch-manipulation focus-visible:ring-2 focus-visible:ring-primary/50'
                  onClick={() => incScore(player.id)}
                  disabled={player.score >= 7}
                  aria-label='Aumentar puntuación'
                >
                  <ArrowUp className='size-6' />
                </Button>
                <Button
                  variant='secondary'
                  size='lg'
                  className='flex-1 h-14 text-xl font-bold rounded-xl active:bg-red-500/30 hover:bg-red-500/20 hover:text-red-600 transition-colors select-none touch-manipulation focus-visible:ring-2 focus-visible:ring-red-500/50'
                  onClick={() => decScore(player.id)}
                  disabled={player.score <= 0}
                  aria-label='Disminuir puntuación'
                >
                  <ArrowDown className='size-6' />
                </Button>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
