import Reveal from '../components/Reveal'
import Swatches from '../components/Swatches'
import { config } from '../data'
import foto from '../assets/padrinhos.jpeg'

export default function Padrinhos() {
  return (
    <>
      <Reveal as="h2" i={0}>Padrinhos</Reveal>
      <Reveal as="p" i={1}>
        Terno preto e camisa <b>branca</b>, gravata <b>Marsala</b>. Para finalizar, uma rosa marsala na lapela.
      </Reveal>
      <div className="figs">
        <Reveal
          as="img"
          i={2}
          className="fig-photo fig-suit"
          src={foto}
          alt="Terno preto com camisa preta, colete e gravata marsala, rosa na lapela e lenço dourado"
        />
      </div>
      <Swatches cores={config.coresPadrinhos} />
    </>
  )
}
