import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nosotros from "./pages/Nosotros";
import Panaderia from "./pages/Panaderia";
import Industrial from "./pages/Industrial";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/Home";
gsap.registerPlugin(ScrollTrigger);

export default function App() {


  return (
    <>
      <Router>
        <Navbar /> {/* Navbar siempre visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/panaderia" element={<Panaderia />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

