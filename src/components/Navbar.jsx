import { useState } from 'react'
import CuboMenu from './CuboMenu'

const links = [
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#configurador', label: 'Configurador' },
  { href: '#instalacion', label: 'Instalación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-widest uppercase text-stone-800">
          Milenio
        </span>

        <div className="hidden md:flex gap-8 text-sm text-stone-600 font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-stone-900 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#configurador"
          className="hidden md:inline-block bg-stone-800 text-white text-sm px-5 py-2 rounded-full hover:bg-stone-700 transition-colors"
        >
          Construye tu fachada
        </a>

        <CuboMenu isOpen={abierto} onClick={() => setAbierto(!abierto)} />
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          abierto ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-stone-100 bg-white">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setAbierto(false)}
              className="text-stone-700 font-medium text-base hover:text-stone-900 transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#configurador"
            onClick={() => setAbierto(false)}
            className="mt-2 bg-stone-800 text-white text-sm px-5 py-3 rounded-full hover:bg-stone-700 transition-colors text-center font-semibold"
          >
            Construye tu fachada
          </a>
        </div>
      </div>
    </nav>
  )
}
