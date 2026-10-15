// Envelope fechado. `phase`: 'closed' | 'open' | 'gone'.
export default function Intro({ phase, onOpen, monograma }) {
  const cls = `intro${phase !== 'closed' ? ' open' : ''}${phase === 'gone' ? ' gone' : ''}`
  return (
    <section className={cls} aria-label="Convite fechado">
      <p className="kicker">Você recebeu um convite</p>
      <p className="to">
        Para os nossos
        <br />
        padrinhos
      </p>
      <div className="env">
        <div className="env-back" />
        <div className="letter">
          <b>Manual dos</b>
          <span>Padrinhos</span>
        </div>
        <div className="pocket" />
        <div className="flap" />
        <button className="seal" type="button" aria-label="Abrir o convite" onClick={onOpen}>
          <span>{monograma}</span>
        </button>
      </div>
      <p className="hint">Toque no selo para abrir</p>
    </section>
  )
}
