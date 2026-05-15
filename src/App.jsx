import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CursorGlow from "./components/CursorGlow"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"

function App() {
  return (
    <main className="relative min-h-screen bg-[#050509] text-white overflow-hidden">

      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />

    </main>
  )
}

export default App