import { GameSelector } from '@/components/game-selector'

function Home () {
  return (
    <main className='flex flex-1 flex-col'>
      <section className='flex flex-1 flex-col items-center justify-center px-4 py-16'>
        <div className='mx-auto flex w-full max-w-2xl flex-col items-center gap-10 text-center'>
          <div className='flex flex-col gap-4 drop-shadow-sm'>
            <h1 className='font-(family-name:--font-heading) text-5xl font-black tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent pb-2'>
              Anota los puntos de tus partidas
            </h1>
            <p className='mx-auto max-w-md text-lg sm:text-xl font-medium leading-relaxed text-muted-foreground text-pretty drop-shadow-sm'>
              Lleva el marcador de tus juegos de cartas favoritos de forma
              sencilla y rápida.
            </p>
          </div>

          <div className='w-full'>
            <GameSelector />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
