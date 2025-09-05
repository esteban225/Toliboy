import "./App.css";
import { useEffect } from "react";
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
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/contacto") {
      Swal.fire({
        title: "¿Quieres unirte a nuestro equipo?",
        text: "Crece con nosotros. ¡Tu talento es lo que buscamos!, envianos un correo con tu informacion de contacto y tu CV a contacto@toliboy.com",
        cancelButtonText: "OK",
      });
    }
  }, [location.pathname]);

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
