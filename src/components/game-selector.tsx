'use client'

import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { games } from '@/lib/data'

export function GameSelector () {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size='lg'
          className='gap-2 px-8 text-base font-semibold'
        >
          Elegir juego
          <ChevronDown className='size-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='center' className='w-64'>
        {games.map((game) => {
          const Icon = game.icon
          return (
            <DropdownMenuItem
              key={game.name}
              onClick={() => router.push(game.id)}
              className='flex cursor-pointer items-center gap-3 py-3'
            >
              <div className='flex size-9 items-center justify-center rounded-lg bg-primary/10'>
                <Icon className='size-5 text-primary' />
              </div>
              <div className='flex flex-col'>
                <span className='font-medium text-foreground'>{game.name}</span>
                <span className='text-xs text-muted-foreground'>
                  {game.description}
                </span>
              </div>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
