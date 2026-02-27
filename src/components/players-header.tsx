import { RotateCcw } from 'lucide-react'
import { ConfirmDrawer } from './confirm-drawer'
import { Button } from './ui/button'
import { BerePlayer, ChanPlayer } from '@/common/types'

interface Props {
  players: BerePlayer[] | ChanPlayer[],
  resetGame: () => void
  roundCount?: number
}

export function PlayersHeader ({ players, resetGame, roundCount }: Props) {
  const playersLength = players.length

  return (
    <div className='flex items-center justify-between'>
      <div>
        {roundCount !== undefined
          ? (
            <p className='text-sm text-muted-foreground'>
              {roundCount > 0
                ? `Ronda ${roundCount}`
                : 'Agrega jugadores para comenzar'}
            </p>
            )
          : playersLength === 0
            ? (
              <p className='text-sm text-muted-foreground'>
                Agrega jugadores para comenzar
              </p>
              )
            : (
              <p>{playersLength} jugador{playersLength !== 1 && 'es'}</p>
              )}
      </div>
      <ConfirmDrawer
        title='Reiniciar juego'
        description='¿Estás seguro de que quieres reiniciar el juego? Se perderán todos los datos.'
        confirmFn={resetGame}
      >
        <Button variant='outline' size='sm' disabled={playersLength === 0}>
          <RotateCcw className='size-4' />
          Reiniciar
        </Button>
      </ConfirmDrawer>
    </div>
  )
}
