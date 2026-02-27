import { RotateCcw } from 'lucide-react'
import { ConfirmDrawer } from '../confirm-drawer'
import { Button } from '../ui/button'
import { useChancho } from '@/stores/chancho'

export function PlayersHeader () {
  const { players, resetGame } = useChancho()

  return (
    <div className='flex items-center justify-between'>
      <p className='text-sm text-muted-foreground'>
        {!players.length ? 'Agrega jugadores para comenzar' : `${players.length} jugador${players.length === 1 ? '' : 'es'}`}
      </p>
      <ConfirmDrawer
        title='Reiniciar juego'
        description='¿Estás seguro de que quieres reiniciar el juego? Se perderán todos los datos.'
        confirmFn={resetGame}
      >
        <Button variant='outline' size='sm' disabled={players.length === 0}>
          <RotateCcw className='size-4' />
          Reiniciar
        </Button>
      </ConfirmDrawer>
    </div>
  )
}
