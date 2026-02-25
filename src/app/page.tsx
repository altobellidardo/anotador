import { GameSelector } from '@/components/game-selector'

function Home () {
  return (
    <main className='flex min-h-dvh flex-col'>

      <section className='flex flex-1 flex-col items-center justify-center px-4 py-16'>
        <div className='mx-auto flex max-w-2xl flex-col items-center gap-8 text-center'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-(family-name:--font-heading) text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl'>
              Anota los puntos de tus partidas
            </h1>
            <p className='mx-auto max-w-md text-lg leading-relaxed text-muted-foreground text-pretty'>
              Lleva el marcador de tus juegos de cartas favoritos de forma
              sencilla y rapida.
            </p>
          </div>

          <GameSelector />
        </div>
      </section>
    </main>
  )
}

export default Home
