export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-500 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <span className="font-bold tracking-widest uppercase text-stone-300">Milenio</span>
        <span>Piedra natural para fachadas · 100% colombiano</span>
        <span>© {new Date().getFullYear()} Milenio. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
