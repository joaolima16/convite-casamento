import Reveal from '../components/Reveal'
import { config } from '../data'

export default function Dicas() {
  return (
    <>
      <Reveal as="h2" i={0}>Para o grande dia</Reveal>
      <div className="tips">
        {config.dicas.map(([titulo, texto], i) => (
          <Reveal as="p" key={titulo} i={i + 1}>
            <b>{titulo}</b>
            {texto}
          </Reveal>
        ))}
        <Reveal as="p" i={config.dicas.length + 1}>
          <b>Nossa hashtag</b>
          {config.hashtag}
        </Reveal>
      </div>
    </>
  )
}
