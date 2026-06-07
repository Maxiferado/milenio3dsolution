import { useRef, Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { usarConfigurador } from '../store/configuradorStore'
import * as THREE from 'three'

function Modelo({ onClickMesh }) {
  const { scene } = useGLTF('/models/Cottage_FREE.glb')
  const { superficiesAplicadas, materiales } = usarConfigurador()

  scene.traverse((obj) => {
    if (!obj.isMesh) return
    const aplicado = superficiesAplicadas[obj.name]
    if (aplicado) {
      const mat = materiales.find((m) => m.id === aplicado.materialId)
      if (mat) obj.material = new THREE.MeshStandardMaterial({ color: mat.color, roughness: 0.8 })
    }
  })

  return (
    <primitive
      object={scene}
      onClick={(e) => {
        e.stopPropagation()
        onClickMesh(e.object.name)
      }}
    />
  )
}

function BotonesCaptura() {
  const { gl, scene, camera } = useThree()
  return null
}

function PanelMateriales({ glRef }) {
  const { materiales, materialActivo, seleccionarMaterial, superficiesAplicadas, calcularTotal, limpiar } =
    usarConfigurador()

  const total = calcularTotal()

  const cotizar = () => {
    const desglose = Object.entries(superficiesAplicadas)
      .map(([mesh, { materialId, m2 }]) => {
        const mat = materiales.find((m) => m.id === materialId)
        return `• ${mesh}: ${mat?.nombre} — ${m2}m² × $${mat?.preciom2?.toLocaleString()} = $${(mat?.preciom2 * m2).toLocaleString()}`
      })
      .join('\n')

    const mensaje = encodeURIComponent(
      `Hola! Quiero cotizar mi fachada Milenio:\n\n${desglose}\n\n*Total estimado: $${total.toLocaleString()} COP*`
    )
    window.open(`https://wa.me/573000000000?text=${mensaje}`, '_blank')
  }

  return (
    <div className="bg-stone-800 rounded-2xl p-5 flex flex-col gap-3 h-full">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
        Materiales
      </h3>
      <p className="text-stone-500 text-xs">Selecciona y haz clic sobre el modelo</p>

      <div className="flex flex-col gap-2">
        {materiales.map((m) => (
          <button
            key={m.id}
            onClick={() => seleccionarMaterial(m.id)}
            className={`flex items-center gap-3 rounded-xl p-3 text-sm transition-all ${
              materialActivo === m.id
                ? 'bg-stone-600 text-white ring-2 ring-stone-400'
                : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
            }`}
          >
            <span
              className="w-6 h-6 rounded-md flex-shrink-0 border border-stone-500"
              style={{ background: m.color }}
            />
            <span className="text-left leading-tight">
              <span className="block font-medium">{m.nombre}</span>
              <span className="text-xs text-stone-400">${m.preciom2.toLocaleString()}/m²</span>
            </span>
          </button>
        ))}
      </div>

      {Object.keys(superficiesAplicadas).length > 0 && (
        <div className="bg-stone-900 rounded-xl p-3 space-y-1 mt-1">
          <p className="text-xs text-stone-400 font-semibold uppercase tracking-wide mb-2">Selección</p>
          {Object.entries(superficiesAplicadas).map(([mesh, { materialId, m2 }]) => {
            const mat = materiales.find((m) => m.id === materialId)
            return (
              <div key={mesh} className="flex justify-between text-xs text-stone-300">
                <span className="truncate max-w-[120px]">{mesh}</span>
                <span className="text-stone-400">${(mat?.preciom2 * m2).toLocaleString()}</span>
              </div>
            )
          })}
        </div>
      )}

      <div className="mt-auto space-y-3 border-t border-stone-700 pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-stone-400">Total estimado</span>
          <span className="font-bold text-white">
            {total > 0 ? `$${total.toLocaleString()} COP` : '—'}
          </span>
        </div>
        {total > 0 && (
          <button
            onClick={limpiar}
            className="w-full text-xs text-stone-500 hover:text-stone-300 transition-colors"
          >
            Limpiar selección
          </button>
        )}
        <button
          onClick={cotizar}
          disabled={total === 0}
          className="w-full bg-green-500 hover:bg-green-400 disabled:bg-stone-700 disabled:text-stone-500 disabled:cursor-not-allowed transition-colors text-white font-semibold py-3 rounded-xl text-sm"
        >
          Cotizar por WhatsApp
        </button>
      </div>
    </div>
  )
}

export default function Configurador() {
  return (
    <section id="configurador" className="py-24 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">
            Configurador 3D
          </span>
          <h2 className="text-4xl font-bold mt-3">Construye tu fachada</h2>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-sm">
            Selecciona un material y haz clic sobre las superficies del modelo para aplicarlo.
            Recibe tu cotización por WhatsApp al instante.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6" style={{ minHeight: '500px' }}>
          <div className="lg:col-span-3 bg-stone-800 rounded-2xl overflow-hidden" style={{ minHeight: '460px' }}>
            <Canvas
              camera={{ position: [4, 3, 6], fov: 45 }}
              style={{ width: '100%', height: '100%', minHeight: '460px' }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
              <Suspense fallback={null}>
                <Modelo onClickMesh={(name) => usarConfigurador.getState().aplicarMaterial(name)} />
                <ContactShadows position={[0, -0.01, 0]} opacity={0.4} scale={20} blur={1.5} />
                <Environment preset="city" />
              </Suspense>
              <OrbitControls makeDefault enablePan={false} minDistance={2} maxDistance={20} />
            </Canvas>
          </div>

          <PanelMateriales />
        </div>
      </div>
    </section>
  )
}
