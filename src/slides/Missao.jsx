import Reveal from '../components/Reveal'

export default function Missao() {
  return (
    <>
      <Reveal as="h2" i={0}>Missão dos padrinhos</Reveal>
      <Reveal i={1} className="rule" />
      <Reveal as="p" i={2} className="mission">
        Os padrinhos têm um papel muito além de estar ao lado dos noivos no altar. Eles representam amor, apoio e presença verdadeira.
      </Reveal>
      <Reveal as="p" i={3} className="mission">
        Ser padrinho ou madrinha significa fazer parte da nossa história, de um jeito especial, não apenas no dia do casamento, mas na vida que estamos construindo juntos.
      </Reveal>
    </>
  )
}
