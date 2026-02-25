export const GAME_CONFIG = {
  TRUCO: {
    MAX_SCORE: 30,
    POINTS_PER_BOX: 5,
    TOTAL_BOXES: 6,
    BOX_ORDER: [0, 2, 4, 1, 3, 5] as const,
  },
} as const

export const UI_CONFIG = {
  COLORS: {
    MATCHBOX_ACTIVE: '#b45309',
    MATCHBOX_INACTIVE: '#b4530933',
  },
  DIMENSIONS: {
    MATCHBOX_SIZE: { width: 44, height: 44 },
    VIEWBOX: '0 0 50 50',
  },
  STROKE: {
    WIDTH: 5,
    LINECAP: 'round' as const,
  },
} as const
