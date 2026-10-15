import Reveal from '../components/Reveal'
import { config } from '../data'
import { dateInfo } from '../utils'

export default function Capa() {
  const { noiva, noivo } = config
  return (
    <>
      <Reveal i={0} className="mono">
        <span>{noiva[0]}</span>
        <i>&amp;</i>
        <span>{noivo[0]}</span>
      </Reveal>
      <Reveal as="p" i={1} className="title1">Manual dos</Reveal>
      <Reveal as="p" i={2} className="title2">Padrinhos</Reveal>
      <Reveal i={3} className="rule" />
      <Reveal as="p" i={4} className="names">{noiva} &amp; {noivo}</Reveal>
      <Reveal as="p" i={5} className="date">{dateInfo.curta}</Reveal>
    </>
  )
}
