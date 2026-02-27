import { PedroPlayer } from '@/common/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { GAME_CONFIG } from '@/common/constants'

type State = {
  players: PedroPlayer[]
}

type Action = {
  addPlayer: (player: PedroPlayer) => void
  removePlayer: (id: string) => void
  resetGame: () => void
  incScore: (id: string) => void
  decScore: (id: string) => void
}

export const usePedro = create<State & Action>()(persist(
  (set) => ({
    players: [],

    addPlayer: player => set(state => ({
      players: [...state.players, player]
    })),

    removePlayer: id => set(state => ({
      players: state.players.filter(p => p.id !== id),
    })),

    resetGame: () => set({
      players: [...GAME_CONFIG.PEDRO.INITIAL_STATE.players],
    }),

    incScore: id => set(state => ({
      players: state.players.map(p => p.id === id ? { ...p, score: Math.min(p.score + 1, 7) } : p),
    })),

    decScore: id => set(state => ({
      players: state.players.map(p => p.id === id ? { ...p, score: Math.max(p.score - 1, 0) } : p),
    })),
  }),
  {
    name: 'pedro-store',
    storage: createJSONStorage(() => localStorage),
  }
))
