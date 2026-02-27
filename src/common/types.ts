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

export type PedroPlayer = BerePlayer
export type ChinchonPlayer = BerePlayer
