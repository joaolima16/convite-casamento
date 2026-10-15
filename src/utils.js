import { config } from './data'

export const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
export const DIAS = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']

const two = (n) => String(n).padStart(2, '0')

export function horaFmt(h) {
  const [hh, mm] = h.split(':')
  return mm === '00' ? `${Number(hh)}h` : `${Number(hh)}h${mm}`
}

const [year, m, day] = config.data.split('-').map(Number)
const month = m - 1
const weekday = DIAS[new Date(year, month, day).getDay()]

export const dateInfo = {
  year,
  month,
  day,
  mesNome: MESES[month],
  curta: `${two(day)} · ${two(month + 1)} · ${year}`,
  longa: `${weekday[0].toUpperCase()}${weekday.slice(1)}, ${day} de ${MESES[month]} de ${year}`,
  hora: horaFmt(config.hora),
  alvo: new Date(`${config.data}T${config.hora}:00-03:00`).getTime(),
}

export { two }
