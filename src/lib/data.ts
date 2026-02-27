import { GAMES_ID } from '@/common/constants'
import { Egg, Layers, Swords, GalleryHorizontalEnd, Ham } from 'lucide-react'

export const games = [
  {
    id: GAMES_ID.BERENJENA,
    name: 'Berenjena',
    description: 'Apuesta por tus cartas',
    icon: Egg
  },
  {
    id: GAMES_ID.PEDRO,
    name: 'Pedro',
    description: 'Apuesta por tus cartas',
    icon: Layers
  },
  {
    id: GAMES_ID.TRUCO,
    name: 'Truco',
    description: 'Clásico argentino',
    icon: Swords
  },
  {
    id: GAMES_ID.CHINCHON,
    name: 'Chinchon',
    description: 'Combina y baja tus cartas',
    icon: GalleryHorizontalEnd
  },
  {
    id: GAMES_ID.CHANCHO,
    name: 'Chancho va!',
    description: 'Consigue las iguales',
    icon: Ham
  }
]
