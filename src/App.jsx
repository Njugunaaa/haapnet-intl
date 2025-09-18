"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Commitment from "./pages/Commitment"
import Achievements from "./pages/Achievements"
import News from "./pages/News"
import Events from "./pages/Events"
import GetInvolved from "./pages/GetInvolved"
import Contact from "./pages/Contact"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Nav />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/commitment" element={<Commitment />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App
