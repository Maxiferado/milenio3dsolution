import { create } from 'zustand'

const materiales = [
  { id: 'comercial', nombre: 'Comercial · Gris', color: '#94a3b8', preciom2: 45000 },
  { id: 'media', nombre: 'Media · Clara', color: '#d6d3d1', preciom2: 55000 },
  { id: 'exclusiva', nombre: 'Exclusiva', color: '#92400e', preciom2: 85000 },
]

export const usarConfigurador = create((set, get) => ({
  materiales,
  materialActivo: null,
  superficiesAplicadas: {},

  seleccionarMaterial: (id) => set({ materialActivo: id }),

  aplicarMaterial: (nombreMesh, m2 = 10) => {
    const { materialActivo, superficiesAplicadas } = get()
    if (!materialActivo) return
    set({
      superficiesAplicadas: {
        ...superficiesAplicadas,
        [nombreMesh]: { materialId: materialActivo, m2 },
      },
    })
  },

  calcularTotal: () => {
    const { materiales, superficiesAplicadas } = get()
    return Object.values(superficiesAplicadas).reduce((acc, { materialId, m2 }) => {
      const mat = materiales.find((m) => m.id === materialId)
      return acc + (mat ? mat.preciom2 * m2 : 0)
    }, 0)
  },

  limpiar: () => set({ superficiesAplicadas: {}, materialActivo: null }),
}))
