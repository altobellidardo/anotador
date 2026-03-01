import { UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface Props {
  addPlayer: (name: string) => void,
}

export function AddPlayers({ addPlayer }: Props) {
  const handleAddPlayer = (name: string) => {
    addPlayer(name)
  }

  return (
    <Card className='border-dashed border-border'>
      <CardContent className='pt-0'>
        <form
          action={(formData) => {
            const name = formData.get('newPlayerName') as string
            if (name) handleAddPlayer(name)
            const input = document.querySelector('input[name="newPlayerName"]') as HTMLInputElement
            if (input) input.value = ''
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
