export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-100 pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">
            100% Natural · Sin procesos industriales
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight">
            De la naturaleza <br />
            <span className="text-stone-500">a tu fachada.</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            Piedra natural con vetas únicas para remates visuales que armonizan con tu espacio.
            Desde la extracción hasta la instalación, sin perder lo que la hace especial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#configurador"
              className="bg-stone-800 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors text-center"
            >
              Construye tu fachada
            </a>
            <a
              href="#catalogo"
              className="border border-stone-400 text-stone-700 px-8 py-4 rounded-full text-sm font-semibold hover:bg-stone-200 transition-colors text-center"
            >
              Ver catálogo
            </a>
          </div>
        </div>

        <div className="bg-stone-300 rounded-2xl aspect-square flex items-center justify-center">
          <span className="text-stone-500 text-sm">[ Imagen hero — pendiente cliente ]</span>
        </div>

      </div>
    </section>
  )
}
