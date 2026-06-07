export default function Configurador() {
  return (
    <section id="configurador" className="py-24 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">
            Configurador 3D
          </span>
          <h2 className="text-4xl font-bold mt-3">
            Construye tu fachada
          </h2>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto">
            Visualiza cómo queda tu espacio con los materiales de Milenio antes de comprar.
            Arrastra las texturas sobre el modelo y recibe tu cotización al instante.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 bg-stone-800 rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-stone-700 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🧱</span>
              </div>
              <p className="text-stone-400 text-sm">
                [ Escena 3D — React Three Fiber ]
              </p>
              <p className="text-stone-500 text-xs">
                Pendiente: modelos .glb del arquitecto
              </p>
            </div>
          </div>

          <div className="bg-stone-800 rounded-2xl p-5 flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-400">
              Materiales
            </h3>
            {['Comercial · Gris', 'Media · Clara', 'Exclusiva'].map((m) => (
              <div
                key={m}
                className="bg-stone-700 rounded-xl p-3 text-sm text-stone-300 cursor-grab hover:bg-stone-600 transition-colors"
              >
                {m}
              </div>
            ))}

            <div className="mt-auto border-t border-stone-700 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-stone-400">Total estimado</span>
                <span className="font-bold">$ —</span>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-400 transition-colors text-white font-semibold py-3 rounded-xl text-sm">
                Cotizar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
