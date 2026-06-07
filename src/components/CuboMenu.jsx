export default function CuboMenu({ isOpen, onClick }) {
  const s = 18

  const cara = (transform, bg, border = '#57534e') => ({
    position: 'absolute',
    width: s,
    height: s,
    background: bg,
    border: `1px solid ${border}`,
    transform,
  })

  return (
    <button
      onClick={onClick}
      className="md:hidden w-12 h-12 flex items-center justify-center focus:outline-none"
      style={{ perspective: '140px' }}
      aria-label="Menú"
    >
      <div
        style={{
          width: s,
          height: s,
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: isOpen
            ? 'rotateX(-25deg) rotateY(225deg)'
            : 'rotateX(-25deg) rotateY(45deg)',
          transition: 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)',
          animation: isOpen ? 'none' : 'cubeSpin 7s linear infinite',
        }}
      >
        <div style={cara(`translateZ(${s / 2}px)`, '#292524')} />
        <div style={cara(`rotateY(180deg) translateZ(${s / 2}px)`, '#1c1917')} />
        <div style={cara(`rotateY(-90deg) translateZ(${s / 2}px)`, '#1c1917')} />
        <div style={cara(`rotateY(90deg) translateZ(${s / 2}px)`, '#44403c')} />
        <div style={cara(`rotateX(90deg) translateZ(${s / 2}px)`, '#78716c')} />
        <div style={cara(`rotateX(-90deg) translateZ(${s / 2}px)`, '#0c0a09')} />
      </div>
    </button>
  )
}
