# CLAUDE.md — Milenio3DSolution

Documentación técnica del proyecto para sesiones futuras.

---

## Descripción del proyecto

Landing page con configurador 3D interactivo para el cliente **Milenio**, empresa de piedra natural para fachadas. El usuario puede visualizar cómo quedan los materiales en un modelo 3D, ver el costo estimado y enviar la cotización por WhatsApp Business.

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | React 18 + Vite |
| Motor 3D | React Three Fiber + @react-three/drei |
| Estado | Zustand |
| Estilos | Tailwind CSS v3 |
| Modelos 3D | `.glb` servido desde `public/models/` |
| Cotización | Link `wa.me` con mensaje generado en el frontend |

> Se descartó Next.js por overhead innecesario — no hay SSR, login ni servidor requerido.

---

## Estructura de carpetas

```
milenio3dapp/
├── public/
│   ├── models/          # Modelos .glb (servidos como estáticos)
│   └── textures/        # Texturas .jpg/.png del catálogo
├── src/
│   ├── components/      # Componentes de la landing
│   │   ├── Navbar.jsx       # Navbar fija con menú cubo 3D en mobile
│   │   ├── CuboMenu.jsx     # Cubo CSS 3D como hamburger menu
│   │   ├── Hero.jsx         # Sección hero principal
│   │   ├── Diferencial.jsx  # 4 puntos clave del producto
│   │   ├── Catalogo.jsx     # Las 3 líneas de producto
│   │   ├── Configurador.jsx # Escena R3F + panel de materiales
│   │   ├── Instalacion.jsx  # Proceso en 4 pasos
│   │   ├── CTA.jsx          # Llamado final a WhatsApp
│   │   └── Footer.jsx       # Footer
│   ├── store/
│   │   └── configuradorStore.js  # Zustand: materiales, selección, total
│   ├── App.jsx          # Ensamblaje de secciones
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind base + @keyframes cubeSpin
├── investigacionMilenioDev.org  # Brief original del proyecto
└── CLAUDE.md            # Este archivo
```

---

## Flujo del configurador 3D

1. Usuario selecciona un material del panel lateral
2. Hace clic en un mesh del modelo 3D → se aplica el color del material
3. El total se calcula en tiempo real: `m² × precio del material`
4. Botón "Cotizar por WhatsApp" → abre `wa.me` con desglose completo

---

## Producto del cliente

- **Qué es:** Piedra natural para revestimientos de fachadas, sin procesos industriales
- **Líneas:**
  - **Comercial** — Tonos grises · $45.000/m²
  - **Media** — Tonos claros · $55.000/m²
  - **Exclusiva** — Colores únicos · $85.000/m²
- **Instalación:** A mano, con pego certificado para azulejos de piscina
- **Estrato objetivo:** 3.7 a 6

---

## Assets pendientes del cliente

- [ ] Modelos 3D definitivos del arquitecto en `.glb`
- [ ] Fotografías de texturas por línea (alta resolución)
- [ ] Precios reales por m² de cada material
- [ ] Número WhatsApp Business
- [ ] Brief de diseño visual (colores, tipografía, copy)

> Modelo actual: `Cottage_FREE.glb` (placeholder de prueba, 52 MB)
> Cuando lleguen los modelos definitivos, configurar **Git LFS** para archivos pesados.

---

## Comandos

```bash
npm run dev      # Servidor de desarrollo en http://localhost:5173
npm run build    # Build de producción en /dist
npm run preview  # Preview del build
```

---

## Repositorio

GitHub: https://github.com/Maxiferado/milenio3dsolution  
Branch principal: `main`  
Conexión: SSH

---

## Notas de desarrollo

- El menú hamburger mobile es un **cubo CSS 3D en 3/4** con rotación automática (`@keyframes cubeSpin`). Componente: `CuboMenu.jsx`.
- Los modelos `.glb` deben estar en `public/models/` (no en `src/assets/`) para que `useGLTF('/models/archivo.glb')` funcione correctamente con Vite.
- El chunk de Three.js supera 500 KB — optimizar con `React.lazy()` + `Suspense` cuando se acerque el deploy.
