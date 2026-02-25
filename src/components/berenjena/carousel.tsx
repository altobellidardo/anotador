import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useBerenjena } from '@/stores/berenjena'
import { Button } from '@/components/ui/button'

export function CarouselDemo () {
  const { players, roundInputs, setRoundInput } = useBerenjena()

  const inc = (id: string) => {
    if (roundInputs[id] === 0) {
      setRoundInput({ ...roundInputs, [id]: roundInputs[id] + 5 })
    } else {
      setRoundInput({ ...roundInputs, [id]: roundInputs[id] + 1 })
    }
  }

  const dec = (id: string) => {
    if (roundInputs[id] > 5) {
      setRoundInput({ ...roundInputs, [id]: roundInputs[id] - 1 })
    } else if (roundInputs[id] > 0) {
      setRoundInput({ ...roundInputs, [id]: roundInputs[id] - 5 })
    }
  }

  return (
    <Carousel className='w-full max-w-48 sm:max-w-xs mx-auto select-none'>
      <CarouselContent>
        {players.map((player, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardHeader>
                  <CardTitle className='text-center'>{player.name}</CardTitle>
                </CardHeader>
                <CardContent className='flex h-36 items-center justify-center p-6'>
                  <div className='flex flex-col items-center gap-6'>
                    <span className='text-4xl font-semibold'>{roundInputs[player.id]}</span>
                    <div className='flex items-center gap-2'>
                      <Button variant='secondary' size='lg' className='text-xl font-bold active:bg-primary/30 select-none' onClick={() => inc(player.id)}>+</Button>
                      <Button variant='secondary' size='lg' className='text-xl font-bold active:bg-primary/30 select-none' disabled={roundInputs[player.id] === 0} onClick={() => dec(player.id)}>-</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
