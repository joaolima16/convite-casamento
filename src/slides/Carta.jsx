import Reveal from '../components/Reveal'
import { config } from '../data'

export default function Carta() {
  return (
    <>
      <Reveal as="h2" i={0}>Queridos padrinhos</Reveal>
      <Reveal i={1} className="rule" />
      <Reveal as="p" i={2}>Entre tanta gente querida, vocês são as pessoas que escolhemos para caminhar mais perto de nós neste dia.</Reveal>
      <Reveal as="p" i={3}>Aceitar ser padrinho ou madrinha é entrar na nossa história, e isso significa muito para nós.</Reveal>
      <Reveal as="p" i={4} className="soft">Preparamos este manual para deixar cada detalhe claro e tranquilo. Qualquer dúvida, é só chamar.</Reveal>
      <Reveal as="p" i={5} className="sign">{config.noiva} e {config.noivo}</Reveal>
    </>
  )
}
