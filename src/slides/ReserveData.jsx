import Reveal from '../components/Reveal'
import Calendar from '../components/Calendar'
import { useCountdown } from '../hooks/useCountdown'
import { dateInfo } from '../utils'

export default function ReserveData() {
  const { dias, horas, min, seg } = useCountdown(dateInfo.alvo)
  const unidades = [
    [dias, 'dias'],
    [horas, 'horas'],
    [min, 'min'],
    [seg, 'seg'],
  ]

  return (
    <>
      <Reveal as="p" i={0} className="label">Reserve essa data</Reveal>
      <Reveal i={1} className="cal">
        <Calendar />
      </Reveal>
      <Reveal as="p" i={2}>
        <b>{dateInfo.longa}</b>
        <br />
        <span className="soft">Cerimônia às {dateInfo.hora}</span>
      </Reveal>
      <Reveal i={3} className="count">
        {unidades.map(([valor, rotulo]) => (
          <div key={rotulo}>
            <strong>{valor}</strong>
            <span>{rotulo}</span>
          </div>
        ))}
      </Reveal>
    </>
  )
}
