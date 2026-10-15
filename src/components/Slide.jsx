export default function Slide({ index, current, children }) {
  const active = index === current
  const past = index < current
  return (
    <section className={`slide${active ? ' active' : ''}${past ? ' past' : ''}`} aria-hidden={!active}>
      <div className="inner">{children}</div>
    </section>
  )
}
