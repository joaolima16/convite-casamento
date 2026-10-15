// Símbolos SVG reutilizados nos cantos do cartão.
export function FlowerDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <g id="bloom">
          <circle cx="0" cy="-9" r="8" fill="#8A2A3C" />
          <circle cx="8.5" cy="-2.8" r="8" fill="#B76473" />
          <circle cx="5.3" cy="7.3" r="8" fill="#8A2A3C" />
          <circle cx="-5.3" cy="7.3" r="8" fill="#B76473" />
          <circle cx="-8.5" cy="-2.8" r="8" fill="#8A2A3C" />
          <circle cx="0" cy="0" r="4.5" fill="#F8F3E9" />
        </g>
        <symbol id="corner" viewBox="0 0 150 150">
          <g fill="#5B6B3F">
            <ellipse cx="58" cy="42" rx="24" ry="6.5" transform="rotate(32 58 42)" />
            <ellipse cx="40" cy="74" rx="22" ry="6" transform="rotate(68 40 74)" />
            <ellipse cx="96" cy="26" rx="20" ry="5.5" transform="rotate(12 96 26)" />
            <ellipse cx="22" cy="104" rx="18" ry="5" transform="rotate(84 22 104)" />
            <ellipse cx="76" cy="58" rx="16" ry="5" transform="rotate(50 76 58)" opacity=".7" />
          </g>
          <path d="M0 6 Q50 14 96 30 M6 0 Q16 50 30 96" stroke="#5B6B3F" strokeWidth="1.6" fill="none" opacity=".8" />
          <use href="#bloom" x="30" y="28" />
          <use href="#bloom" x="72" y="20" transform="translate(72 20) scale(.7) translate(-72 -20)" />
          <use href="#bloom" x="18" y="72" transform="translate(18 72) scale(.75) translate(-18 -72)" />
          <circle cx="104" cy="52" r="3.2" fill="#D8B9B3" />
          <circle cx="50" cy="100" r="3" fill="#D8B9B3" />
          <circle cx="118" cy="22" r="2.4" fill="#B76473" />
        </symbol>
      </defs>
    </svg>
  )
}

export function FlowerCorners() {
  return (
    <>
      <svg className="fl fl-tr" aria-hidden="true"><use href="#corner" /></svg>
      <svg className="fl fl-bl" aria-hidden="true"><use href="#corner" /></svg>
    </>
  )
}
