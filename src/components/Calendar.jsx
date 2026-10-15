import { dateInfo, MESES } from '../utils'

const SEMANA = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']

export default function Calendar() {
  const { year, month, day } = dateInfo
  const primeiro = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()

  return (
    <>
      <div className="cal-m">{MESES[month]}</div>
      <div className="cal-y">{year}</div>
      <div className="grid">
        {SEMANA.map((d) => (
          <div key={d} className="dw">{d}</div>
        ))}
        {Array.from({ length: primeiro }, (_, i) => (
          <div key={`v${i}`} />
        ))}
        {Array.from({ length: total }, (_, i) => {
          const n = i + 1
          return n === day ? (
            <div key={n} className="d on">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z" fill="#6A1B2B" />
              </svg>
              <b>{n}</b>
            </div>
          ) : (
            <div key={n} className="d">{n}</div>
          )
        })}
      </div>
    </>
  )
}
