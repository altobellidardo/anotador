import { GAME_CONFIG } from '@/common/constants'
import { BerePlayer } from '@/common/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type State = {
  players: BerePlayer[]
  roundInputs: Record<BerePlayer['id'], number>
}

type Action = {
  addPlayer: (player: BerePlayer) => void
  removePlayer: (id: string) => void
  resetGame: () => void
  removeLastRound: () => void
  addRound: () => void,
  resetInputs: () => void,
  setRoundInput: (input: Record<BerePlayer['id'], number>) => void
}

export const useBerenjena = create<State & Action>()(persist(
  (set) => ({
    players: [],
    roundInputs: {},

    addPlayer: player => set(state => ({
      players: [...state.players, player],
      roundInputs: { ...state.roundInputs, [player.id]: 0 },
    })),

    removePlayer: id => set(state => ({
      players: state.players.filter(p => p.id !== id),
      roundInputs: Object.fromEntries(
        Object.entries(state.roundInputs).filter(([key]) => key !== id)
      ),
    })),

    resetGame: () => set({
      players: [...GAME_CONFIG.BERENJENA.INITIAL_STATE.players],
      roundInputs: GAME_CONFIG.BERENJENA.INITIAL_STATE.roundInputs,
    }),

    removeLastRound: () => set(state => ({
      players: state.players.map(player => ({
        ...player,
        scores: player.scores.slice(0, -1),
      }))
    })),

    addRound: () => set(state => ({
      players: state.players.map(player => ({
        ...player,
        scores: [
          ...player.scores,
          state.roundInputs[player.id] || 0,
        ],
      })),
      roundInputs: {},
    })),

    resetInputs: () => set(state => ({
      roundInputs: state.players.reduce((acc, player) => ({
        ...acc,
        [player.id]: 0,
      }), {})
    })),

    setRoundInput: input => set(state => ({
      roundInputs: {
        ...state.roundInputs,
        ...input,
      }
    })),
  }),
  {
    name: 'berenjena-store',
    storage: createJSONStorage(() => localStorage),
  }
))
