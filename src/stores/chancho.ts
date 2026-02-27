import { ChanPlayer } from '@/common/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { GAME_CONFIG } from '@/common/constants'

type State = {
  players: ChanPlayer[]
}

type Action = {
  addPlayer: (player: ChanPlayer) => void
  removePlayer: (id: string) => void
  resetGame: () => void
  incScore: (id: string) => void
  decScore: (id: string) => void
}

export const useChancho = create<State & Action>()(persist(
  (set) => ({
    players: [],

    addPlayer: player => set(state => ({
      players: [...state.players, player]
    })),

    removePlayer: id => set(state => ({
      players: state.players.filter(p => p.id !== id),
    })),

    resetGame: () => set({
      players: [...GAME_CONFIG.CHANCHO.INITIAL_STATE.players],
    }),

    incScore: id => set(state => ({
      players: state.players.map(p => p.id === id ? { ...p, score: Math.min(p.score + 1, 7) } : p),
    })),

    decScore: id => set(state => ({
      players: state.players.map(p => p.id === id ? { ...p, score: Math.max(p.score - 1, 0) } : p),
    })),
  }),
  {
    name: 'chancho-store',
    storage: createJSONStorage(() => localStorage),
  }
))
