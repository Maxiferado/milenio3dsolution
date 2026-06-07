import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Diferencial from './components/Diferencial'
import Catalogo from './components/Catalogo'
import Configurador from './components/Configurador'
import Instalacion from './components/Instalacion'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Diferencial />
      <Catalogo />
      <Configurador />
      <Instalacion />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
