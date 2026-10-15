import { useMemo } from 'react'

// Pétalas que caem de leve no fundo do cartão.
export default function Petals({ count = 9 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.round(Math.random() * 92),
        dur: (9 + Math.random() * 8).toFixed(1),
        delay: (Math.random() * 9).toFixed(1),
        scale: (0.7 + Math.random() * 0.8).toFixed(2),
      })),
    [count],
  )

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p, i) => (
        <i key={i} style={{ left: `${p.left}%`, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, scale: p.scale }} />
      ))}
    </div>
  )
}
