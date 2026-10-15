import Reveal from '../components/Reveal'
import { config } from '../data'

export default function Cronograma() {
  return (
    <>
      <Reveal as="h2" i={0}>O dia em horários</Reveal>
      <Reveal as="ul" i={1} className="tl">
        {config.roteiro.map(([hora, texto, destaque]) => (
          <li key={hora} className={destaque ? 'main' : undefined}>
            <time>{hora}</time>
            <i />
            <span>{texto}</span>
          </li>
        ))}
      </Reveal>
      <Reveal as="p" i={2} className="soft">Os horários podem mudar um pouco. Avisamos no grupo dos padrinhos.</Reveal>
    </>
  )
}
