import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

gsap.registerPlugin(ScrollTrigger);

function MainApp() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      // 👇 Mostrar SweetAlert solo en Home
      if (location.pathname === "/nosotros") {
        Swal.fire({
          title: "¿Quieres ser parte de nuestro equipo?",
          text: "Únete a nosotros y crezcamos juntos 💼✨",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "¡Sí quiero!",
          cancelButtonText: "No, gracias",
          confirmButtonColor: "#16a34a", // verde
          cancelButtonColor: "#6b7280", // gris
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/contacto"; // Redirige a contacto
          }
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
