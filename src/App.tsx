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
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Catalogo from "./pages/Catalogo";

// Componentes de catálogo

import ProductTodo from "./pages/ProductTodo"; // 👈 nuevo para mostrar todos los productos
import ProductPasteleria from "./pages/ProductPasteleria";
import ProductPanaderia from "./pages/ProductPanaderia";
import ProductIndustrial from "./pages/ProductIndustrial";

gsap.registerPlugin(ScrollTrigger);

function MainApp() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.pathname === "/contacto") {
        Swal.fire({
          title: "¿Quieres unirte a nuestro equipo?",
          text: "Crece con nosotros. ¡Tu talento es lo que buscamos!, envíanos un correo con tu información de contacto y tu CV a contacto@toliboy.com",
          cancelButtonText: "OK",
        });
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />

        {/* 📌 Rutas anidadas del catálogo */}
        <Route path="/catalogo" element={<Catalogo />}>
          <Route index element={<ProductTodo />} />   {/* 👈 Ahora el index muestra "Todo" */}
          <Route path="todo" element={<ProductTodo />} />
          <Route path="pasteleria" element={<ProductPasteleria />} />
          <Route path="panaderia" element={<ProductPanaderia />} />
          <Route path="industrial" element={<ProductIndustrial />} />
        </Route>

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
