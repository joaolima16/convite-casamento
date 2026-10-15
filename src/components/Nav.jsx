export default function Nav({ titles, current, onGo }) {
  const last = titles.length - 1
  return (
    <nav className="nav" aria-label="Navegação do manual">
      <button className="arrow" type="button" aria-label="Anterior" disabled={current === 0} onClick={() => onGo(current - 1)}>
        <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <div className="mid">
        <small>{titles[current]}</small>
        <div className="dots">
          {titles.map((t, i) => (
            <button key={t} type="button" className={i === current ? 'on' : ''} aria-label={`Ir para ${t}`} onClick={() => onGo(i)} />
          ))}
        </div>
      </div>
      <button className="arrow" type="button" aria-label="Próximo" disabled={current === last} onClick={() => onGo(current + 1)}>
        <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
      </button>
    </nav>
  )
}
