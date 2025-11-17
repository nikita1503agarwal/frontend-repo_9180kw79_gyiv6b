import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Objectives from './components/Objectives'
import Users from './components/Users'
import Differentiators from './components/Differentiators'
import Integrations from './components/Integrations'
import Roadmap from './components/Roadmap'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <Hero />
        <Objectives />
        <Users />
        <Differentiators />
        <Integrations />
        <Roadmap />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>AI + GeoAI FAA Drone Compliance Platform • Building the trust layer for autonomous drone operations.</p>
        </div>
      </footer>
    </div>
  )
}

export default App