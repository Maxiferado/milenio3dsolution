const lineas = [
  {
    nombre: 'Línea Comercial',
    descripcion: 'Tonos grises con carácter. Ideal para fachadas modernas y proyectos residenciales de alta demanda.',
    tono: 'bg-slate-400',
    etiqueta: 'Grises',
  },
  {
    nombre: 'Línea Media',
    descripcion: 'Tonos claros que aportan amplitud y luminosidad. La opción más versátil del catálogo.',
    tono: 'bg-stone-300',
    etiqueta: 'Tonos Claros',
  },
  {
    nombre: 'Línea Exclusiva',
    descripcion: 'Colores únicos que parecen fabricados pero son 100% naturales. Para proyectos que buscan destacar.',
    tono: 'bg-amber-700',
    etiqueta: 'Exclusivos',
  },
]

export default function Catalogo() {
  return (
    <section id="catalogo" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">
            Catálogo
          </span>
          <h2 className="text-4xl font-bold text-stone-900 mt-3">
            Tres líneas, infinitas posibilidades
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            Cada línea fue seleccionada para adaptarse a diferentes estilos arquitectónicos
            sin perder la esencia natural del material.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {lineas.map((l) => (
            <div key={l.nombre} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className={`${l.tono} h-48 flex items-center justify-center`}>
                <span className="text-white/70 text-xs">[ Textura — pendiente cliente ]</span>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">
                  {l.etiqueta}
                </span>
                <h3 className="text-lg font-bold text-stone-900">{l.nombre}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{l.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
