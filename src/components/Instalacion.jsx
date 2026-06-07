const pasos = [
  { numero: '01', titulo: 'Elige tu material', desc: 'Selecciona la línea y el tono que mejor se adapta a tu proyecto.' },
  { numero: '02', titulo: 'Cotiza en minutos', desc: 'Usa el configurador 3D y recibe el desglose de precios por WhatsApp.' },
  { numero: '03', titulo: 'Instalación a mano', desc: 'Nuestros expertos instalan cada pieza con adhesivo certificado para fachadas.' },
  { numero: '04', titulo: 'Fachada lista', desc: 'Disfruta un acabado natural que mejora con el tiempo y resiste los elementos.' },
]

export default function Instalacion() {
  return (
    <section id="instalacion" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">
            Proceso
          </span>
          <h2 className="text-4xl font-bold text-stone-900 mt-3">
            Así de simple
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {pasos.map((p) => (
            <div key={p.numero} className="space-y-4">
              <span className="text-5xl font-bold text-stone-200">{p.numero}</span>
              <h3 className="text-lg font-bold text-stone-900">{p.titulo}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-stone-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-stone-900 mb-2">Manual de instalación</h3>
            <p className="text-stone-500 text-sm">
              Recomendamos usar pego certificado para azulejos de piscina. Descarga nuestra guía
              técnica elaborada junto a nuestro ingeniero químico.
            </p>
          </div>
          <button className="bg-stone-800 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors whitespace-nowrap">
            Descargar guía
          </button>
        </div>
      </div>
    </section>
  )
}
