// Elemento que aparece com animação quando a tela fica ativa. `i` define a ordem (atraso).
export default function Reveal({ as: Tag = 'div', i = 0, className = '', style, children, ...rest }) {
  return (
    <Tag className={`r ${className}`.trim()} style={{ '--i': i, ...style }} {...rest}>
      {children}
    </Tag>
  )
}
