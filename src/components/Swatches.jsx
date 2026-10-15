import Reveal from './Reveal'

export default function Swatches({ cores, i = 3 }) {
  return (
    <Reveal i={i} className="sw">
      {cores.map(([cor, nome]) => (
        <div key={nome}>
          <i style={{ background: cor }} />
          {nome}
        </div>
      ))}
    </Reveal>
  )
}
