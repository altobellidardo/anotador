import type { StoreApi, UseBoundStore } from 'zustand'

export type TrucoTeam = 'nosotros' | 'ellos'
export type TrucoScores = Record<TrucoTeam, number>

export interface BasePlayer {
  id: string
  name: string
}

export interface BerePlayer extends BasePlayer {
  scores: number[]
}

export interface ChanPlayer extends BasePlayer {
  score: number
}

export type PedroPlayer = ChanPlayer

export interface PlayerStoreState<TPlayer extends BasePlayer> {
  players: TPlayer[]
  resetGame: () => void
  addPlayer: (player: TPlayer) => void
}

export type PlayerStoreHook<TPlayer extends BasePlayer> = UseBoundStore<StoreApi<PlayerStoreState<TPlayer>>>
