import { useCallback, useEffect, useRef, useState } from 'react'
import { config } from './data'
import { FlowerCorners, FlowerDefs } from './components/Flowers'
import Petals from './components/Petals'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Slide from './components/Slide'
import Capa from './slides/Capa'
import Carta from './slides/Carta'
import ReserveData from './slides/ReserveData'
import Missao from './slides/Missao'
import Madrinhas from './slides/Madrinhas'
import Padrinhos from './slides/Padrinhos'
import Cronograma from './slides/Cronograma'
import Dicas from './slides/Dicas'

// Ordem das telas do manual. Para remover ou reordenar, mexa só nesta lista.
const TELAS = [
  { titulo: 'Capa', Tela: Capa },
  { titulo: 'Carta', Tela: Carta },
  { titulo: 'Reserve a data', Tela: ReserveData },
  { titulo: 'Missão', Tela: Missao },
  { titulo: 'Madrinhas', Tela: Madrinhas },
  { titulo: 'Padrinhos', Tela: Padrinhos },
  { titulo: 'O dia', Tela: Cronograma },
  { titulo: 'Dicas', Tela: Dicas },
]

const TEMPO_ENVELOPE = 2300

export default function App() {
  const [phase, setPhase] = useState('closed') // closed -> open -> gone
  const [current, setCurrent] = useState(-1)
  const timer = useRef(null)
  const touch = useRef(null)

  const go = useCallback((n) => {
    setCurrent((c) => (n < 0 || n >= TELAS.length || c < 0 ? c : n))
  }, [])

  const abrir = () => {
    if (phase !== 'closed') return
    setPhase('open')
    timer.current = setTimeout(() => {
      setPhase('gone')
      setCurrent(0)
    }, TEMPO_ENVELOPE)
  }

  useEffect(() => () => clearTimeout(timer.current), [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(current + 1)
      if (e.key === 'ArrowLeft') go(current - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, go])

  const onTouchStart = (e) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e) => {
    if (!touch.current) return
    const dx = e.changedTouches[0].clientX - touch.current.x
    const dy = e.changedTouches[0].clientY - touch.current.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) go(dx < 0 ? current + 1 : current - 1)
    touch.current = null
  }

  return (
    <main className="app">
      <FlowerDefs />
      <div className="card">
        <FlowerCorners />
        {phase === 'gone' && <Petals />}

        <Intro phase={phase} onOpen={abrir} monograma={`${config.noiva[0]}${config.noivo[0]}`} />

        <div className="deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {TELAS.map(({ titulo, Tela }, i) => (
            <Slide key={titulo} index={i} current={current}>
              <Tela />
            </Slide>
          ))}
        </div>

        {phase === 'gone' && <Nav titles={TELAS.map((t) => t.titulo)} current={current} onGo={go} />}
      </div>
    </main>
  )
}
