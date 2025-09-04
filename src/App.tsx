import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Swal from "sweetalert2";
import Nosotros from "./pages/Nosotros";
import Panaderia from "./pages/Panaderia";
import Industrial from "./pages/Industrial";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

function MainApp() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      if (location.pathname === "/contacto") {
        Swal.fire({
          title: "¿Quieres unirte a nuestro equipo?",
          text: "Crece con nosotros. ¡Tu talento es lo que buscamos!, envianos un correo con tu informacion de contacto y tu CV a contacto@toliboy.com" ,
          cancelButtonText: "OK",
        });
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="w-12 h-12 border-4 border-white border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/panaderia" element={<Panaderia />} />
        <Route path="/industrial" element={<Industrial />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
