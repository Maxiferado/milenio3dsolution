export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-widest uppercase text-stone-800">
          Milenio
        </span>
        <div className="hidden md:flex gap-8 text-sm text-stone-600 font-medium">
          <a href="#catalogo" className="hover:text-stone-900 transition-colors">Catálogo</a>
          <a href="#configurador" className="hover:text-stone-900 transition-colors">Configurador</a>
          <a href="#instalacion" className="hover:text-stone-900 transition-colors">Instalación</a>
          <a href="#contacto" className="hover:text-stone-900 transition-colors">Contacto</a>
        </div>
        <a
          href="#configurador"
          className="bg-stone-800 text-white text-sm px-5 py-2 rounded-full hover:bg-stone-700 transition-colors"
        >
          Construye tu fachada
        </a>
      </div>
    </nav>
  )
}
