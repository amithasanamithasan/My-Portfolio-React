
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Particle from './Components/Particle'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'

function App() {
 
  return (
    <div>
     <Particle/>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
  
    </div>
  )
}

export default App
