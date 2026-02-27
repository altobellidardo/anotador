import { RotateCcw } from 'lucide-react'
import { ConfirmDrawer } from '../confirm-drawer'
import { Button } from '../ui/button'
import { useBerenjena } from '@/stores/berenjena'
import { useCallback } from 'react'

export function PlayersHeader () {
  const { players, resetGame } = useBerenjena()

  const makeText = useCallback(() => {
    const roundCount = players.length ? players[0]?.scores.length : 0
    let text = ''

    if (roundCount > 0) {
      text = `Ronda ${roundCount}`
    } else if (players.length === 0) {
      text = 'Agrega jugadores para comenzar'
    } else {
      text = `${players.length} jugador${players.length === 1 ? '' : 'es'}`
    }

    return text
  }, [players])

  return (
    <div className='flex items-center justify-between'>
      <p className='text-sm text-muted-foreground'>{makeText()}</p>
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
