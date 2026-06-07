export default function CTA() {
  return (
    <section id="contacto" className="py-24 bg-stone-800 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">
          ¿Listo para empezar?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          La fachada que sueñas <br />
          <span className="text-stone-400">está más cerca de lo que crees.</span>
        </h2>
        <p className="text-stone-400 text-lg max-w-xl mx-auto">
          Construye tu fachada en el configurador y recibe tu cotización con foto del modelo
          directamente en WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#configurador"
            className="bg-white text-stone-900 px-8 py-4 rounded-full text-sm font-semibold hover:bg-stone-100 transition-colors"
          >
            Ir al configurador 3D
          </a>
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
