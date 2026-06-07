const puntos = [
  {
    titulo: '100% Natural',
    descripcion: 'De la extracción de la materia prima directamente a tu fachada. Sin procesos que alteren su esencia.',
  },
  {
    titulo: 'Vetas únicas',
    descripcion: 'Cada pieza es irrepetible. Las vetas naturales garantizan un acabado que ninguna fábrica puede replicar.',
  },
  {
    titulo: 'Armonía visual',
    descripcion: 'Diseñado para quienes buscan un remate visual que se integre con el entorno de forma natural y elegante.',
  },
  {
    titulo: 'Instalación artesanal',
    descripcion: 'Se instala a mano por expertos. Adhesivo certificado para garantizar durabilidad y resistencia al tiempo.',
  },
]

export default function Diferencial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">
            Por qué Milenio
          </span>
          <h2 className="text-4xl font-bold text-stone-900 mt-3">
            El diferencial está en lo natural
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {puntos.map((p) => (
            <div key={p.titulo} className="space-y-3">
              <div className="w-10 h-1 bg-stone-800 rounded" />
              <h3 className="text-lg font-bold text-stone-900">{p.titulo}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{p.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
