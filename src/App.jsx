import React from "react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Testmonials from "./components/Testmonials"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  
  return (
    <main className="text-gray-400 bg-zinc-900 body-font w-full h-auto">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      {/* <Testmonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App
