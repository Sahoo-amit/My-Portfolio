import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Skill from "./components/skills";
import Navbar from "./contents/navbar";
import Particle from "./utils/particle.jsx";
import "./App.css"

function App() {
  const location = useLocation()
  const renderParticle = location.pathname === "/";
  
  return (
    <div className="App">
      <Navbar />
      {renderParticle && <Particle id="particles" />}
      <div className="routers">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skill />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
