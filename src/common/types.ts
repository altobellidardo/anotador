export type TrucoTeam = 'nosotros' | 'ellos'
export type TrucoScores = Record<TrucoTeam, number>

export interface BerePlayer {
  id: string
  name: string
  scores: number[]
}

export interface ChanPlayer {
  id: string
  name: string
  score: number
}
