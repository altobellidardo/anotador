import { UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface Props {
  addPlayer: (name: string) => void,
}

export function AddPlayers ({ addPlayer }: Props) {
  const handleAddPlayer = (name: string) => {
    addPlayer(name)
  }

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
