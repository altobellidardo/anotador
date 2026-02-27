import { RotateCcw } from 'lucide-react'
import { ConfirmDrawer } from './confirm-drawer'
import { Button } from './ui/button'

interface PlayersHeaderProps {
  playersCount: number
  roundCount?: number
  onReset: () => void
}

export function PlayersHeader ({ playersCount, roundCount = 0, onReset }: PlayersHeaderProps) {
  const makeText = () => {
    if (roundCount && roundCount > 0) return `Ronda ${roundCount}`
    if (playersCount === 0) return 'Agrega jugadores para comenzar'
    return `${playersCount} jugador${playersCount === 1 ? '' : 'es'}`
  }

  return (
    <div className='flex items-center justify-between'>
      <p className='text-sm text-muted-foreground'>{makeText()}</p>
      <ConfirmDrawer
        title='Reiniciar juego'
        description='¿Estás seguro de que quieres reiniciar el juego? Se perderán todos los datos.'
        confirmFn={onReset}
      >
        <Button variant='outline' size='sm' disabled={playersCount === 0}>
          <RotateCcw className='size-4' />
          Reiniciar
        </Button>
      </ConfirmDrawer>
    </div>
  )
}
