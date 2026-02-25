import { RotateCcw } from 'lucide-react'
import { ConfirmDrawer } from '../confirm-drawer'
import { Button } from '../ui/button'
import { useBerenjena } from '@/stores/berenjena'

export function HeaderBerenjena () {
  const { resetGame, players } = useBerenjena()
  const playersLength = players.length
  const roundCount = players.length > 0 ? players[0].scores.length : 0

  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-sm text-muted-foreground'>
          {roundCount > 0
            ? `Ronda ${roundCount}`
            : 'Agrega jugadores para comenzar'}
        </p>
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
