import Reveal from '../components/Reveal'
import Swatches from '../components/Swatches'
import { config } from '../data'
import foto from '../assets/madrinhas.jpg'

export default function Madrinhas() {
  return (
    <>
      <Reveal as="h2" i={0}>Madrinhas</Reveal>
      <Reveal as="p" i={1}>
        Vestido longo em tons de <b>Marsala</b>. Escolham o modelo em que se sentirem mais bonitas e confortáveis.
      </Reveal>
      <div className="figs">
        <Reveal
          as="img"
          i={2}
          className="fig-photo fig-scene"
          src={foto}
          alt="Madrinhas com vestidos longos marsala de modelos diferentes em um jardim com flores brancas"
        />
      </div>
      <Swatches cores={config.coresMadrinhas} />
    </>
  )
}
