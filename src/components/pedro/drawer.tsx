import { Plus, RotateCcw } from 'lucide-react'
import { Button } from '../ui/button'
import { DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, Drawer } from '../ui/drawer'
import { useState } from 'react'
import { usePedro } from '@/stores/pedro'
import { CarouselPedro } from './carousel'

export function ScoreDrawer () {
  const { players, addRound, removeLastRound, resetInputs } = usePedro()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const roundCount = players.length > 0 ? players[0].scores.length : 0

  return (
    <div className='flex items-center justify-center gap-3'>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} onClose={resetInputs}>
        <DrawerTrigger asChild>
          <Button className='gap-2'>
            <Plus className='size-4' />
            Anotar ronda
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className='mx-auto w-full max-w-sm'>
            <DrawerHeader>
              <DrawerTitle>Anotar ronda</DrawerTitle>
              <DrawerDescription>Ingrese los puntos para cada jugador</DrawerDescription>
            </DrawerHeader>

            <CarouselPedro />

            <DrawerFooter>
              <Button onClick={() => {
                addRound()
                resetInputs()
                setIsDrawerOpen(false)
              }}
              >Confirmar
              </Button>
              <DrawerClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      {roundCount > 0 && (
        <Button
          variant='outline'
          onClick={removeLastRound}
          className='gap-2'
        >
          <RotateCcw className='size-4' />
          Deshacer ultima
        </Button>
      )}
    </div>
  )
}
