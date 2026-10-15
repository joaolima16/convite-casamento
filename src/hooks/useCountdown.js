import { useEffect, useState } from 'react'
import { two } from '../utils'

export function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const s = Math.floor(Math.max(0, target - now) / 1000)
  return {
    dias: Math.floor(s / 86400),
    horas: two(Math.floor((s % 86400) / 3600)),
    min: two(Math.floor((s % 3600) / 60)),
    seg: two(s % 60),
  }
}
