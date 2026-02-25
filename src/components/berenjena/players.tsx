import { UserPlus } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { useCallback } from 'react'
import type { Player } from './index'
import { useBerenjena } from '@/stores/berenjena'
import { randomUUID } from '@/lib/uuid'

export function PlayerBerenjena () {
  const { addPlayer } = useBerenjena()

  const handleAddPlayer = useCallback((name: string) => {
    if (!name.trim()) return

    const player: Player = {
      id: randomUUID(),
      name: name.trim().charAt(0).toUpperCase() + name.trim().slice(1),
      scores: [],
    }
    addPlayer(player)
  }, [addPlayer])

  return (
    <Card className='border-dashed border-border'>
      <CardContent className='pt-0'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleAddPlayer(e.target.newPlayerName.value)
            e.target.newPlayerName.value = ''
          }}
          className='flex gap-2'
        >
          <Input
            placeholder='Nombre del jugador'
            className='flex-1'
            name='newPlayerName'
          />
          <Button type='submit'>
            <UserPlus className='size-4' />
            <span className='hidden sm:inline'>Agregar</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
