import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useChinchon } from '@/stores/chinchon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function CarouselChinchon() {
  const { players, roundInputs, setRoundInput } = useChinchon()

  const changeAmount = (id: string, amount: number) => {
    let newVal = roundInputs[id] + amount
    if (newVal < 0 && newVal !== -10) {
      if (amount < 0) newVal = amount === -10 ? -10 : 0
      else newVal = 0
    }
    setRoundInput({ ...roundInputs, [id]: newVal })
  }

  return (
    <Carousel className='w-[65vw] max-w-[260px] sm:max-w-xs mx-auto select-none'>
      <CarouselContent>
        {players.map((player) => (
          <CarouselItem key={player.id}>
            <div className='p-1'>
              <Card>
                <CardHeader>
                  <CardTitle className='text-center'>{player.name}</CardTitle>
                </CardHeader>
                <CardContent className='flex h-36 items-center justify-center p-6'>
                  <div className='flex flex-col items-center gap-3 w-full'>
                    <div className='flex items-center gap-3 justify-center w-full'>
                      <Button variant='secondary' size='icon' className='h-12 w-12 text-2xl font-bold active:bg-primary/30 shrink-0 select-none touch-manipulation' disabled={roundInputs[player.id] <= 0} onClick={() => changeAmount(player.id, -1)}>-</Button>
                      <Input
                        type='number'
                        value={roundInputs[player.id] === 0 ? '' : roundInputs[player.id]}
                        placeholder='0'
                        onChange={(e) => {
                          const val = parseInt(e.target.value)
                          let newVal = isNaN(val) ? 0 : val
                          if (newVal < 0 && newVal !== -10) {
                            newVal = newVal < -10 ? -10 : 0
                          }
                          setRoundInput({ ...roundInputs, [player.id]: newVal })
                        }}
                        className='w-20 text-center text-4xl font-semibold h-14 bg-background focus-visible:ring-1 focus-visible:ring-primary shadow-inner [&::-webkit-inner-spin-button]:appearance-none'
                      />
                      <Button variant='secondary' size='icon' className='h-12 w-12 text-2xl font-bold active:bg-primary/30 shrink-0 select-none touch-manipulation' onClick={() => changeAmount(player.id, 1)}>+</Button>
                    </div>
                    <div className='flex items-center gap-4 mt-2'>
                      <Button variant='outline' size='sm' className='text-xs font-bold px-4 h-9 select-none touch-manipulation' disabled={roundInputs[player.id] < 0} onClick={() => changeAmount(player.id, -10)}>-10 pts</Button>
                      <Button variant='outline' size='sm' className='text-xs font-bold px-4 h-9 select-none touch-manipulation' onClick={() => changeAmount(player.id, 10)}>+10 pts</Button>
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
