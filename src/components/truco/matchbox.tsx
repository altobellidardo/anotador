import { UI_CONFIG } from '@/common/constants'

const getColor = (condition: boolean) =>
  condition ? UI_CONFIG.COLORS.MATCHBOX_ACTIVE : UI_CONFIG.COLORS.MATCHBOX_INACTIVE

export function Matchbox ({ amount }: { amount: number }) {
  return (
    <svg
      width={UI_CONFIG.DIMENSIONS.MATCHBOX_SIZE.width}
      height={UI_CONFIG.DIMENSIONS.MATCHBOX_SIZE.height}
      viewBox={UI_CONFIG.DIMENSIONS.VIEWBOX}
    >
      {/* 1: Línea vertical izquierda */}
      <line x1='10' y1='10' x2='10' y2='40' stroke={getColor(amount >= 1)} strokeWidth={UI_CONFIG.STROKE.WIDTH} strokeLinecap={UI_CONFIG.STROKE.LINECAP} />
      {/* 2: Línea horizontal superior */}
      <line x1='40' y1='10' x2='10' y2='10' stroke={getColor(amount >= 2)} strokeWidth={UI_CONFIG.STROKE.WIDTH} strokeLinecap={UI_CONFIG.STROKE.LINECAP} />
      {/* 3: Línea vertical derecha */}
      <line x1='40' y1='40' x2='40' y2='10' stroke={getColor(amount >= 3)} strokeWidth={UI_CONFIG.STROKE.WIDTH} strokeLinecap={UI_CONFIG.STROKE.LINECAP} />
      {/* 4: Línea horizontal inferior */}
      <line x1='10' y1='40' x2='40' y2='40' stroke={getColor(amount >= 4)} strokeWidth={UI_CONFIG.STROKE.WIDTH} strokeLinecap={UI_CONFIG.STROKE.LINECAP} />
      {/* 5: Línea diagonal cruzada */}
      <line x1='10' y1='10' x2='40' y2='40' stroke={getColor(amount >= 5)} strokeWidth={UI_CONFIG.STROKE.WIDTH} strokeLinecap={UI_CONFIG.STROKE.LINECAP} />
    </svg>
  )
}
