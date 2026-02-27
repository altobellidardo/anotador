import { ImageResponse } from 'next/og'

export const contentType = 'image/png'

export default function Icon ({ searchParams }: { searchParams: Promise<{ size?: string }> }) {
  // Extract and calculate size or default to 192 since params in manifest.ts aren't directly available without explicit query
  const dimension = 192

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          borderRadius: '24%',
          border: '12px solid #b45309',
        }}
      >
        <div style={{ fontSize: 96 }}>🃏</div>
      </div>
    ),
    { width: dimension, height: dimension }
  )
}
