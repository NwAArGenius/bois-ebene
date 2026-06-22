import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Properties from './components/Properties'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ServiceArea from './components/ServiceArea'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Properties />
        <About />
        <Testimonials />
        <ServiceArea />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
