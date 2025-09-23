import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import "../css/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nuestros Productos", path: "/catalogo" },
    { name: "Nosotros", path: "/nosotros" },
  ];

  const contactLink = { name: "Contáctanos", path: "/contacto" };

  const socialLinks = [
    { icon: <Facebook />, url: "https://www.facebook.com/toliboy.co" },
    { icon: <Instagram />, url: "https://www.instagram.com/toliboy.co/" },
  ];

  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{ backgroundColor: "#FEF9F2" }}
    >
      <div className="max-w-7xl mx-auto  py-3 flex items-center-safe justify-between">
        {/* Botón menú hamburguesa (solo <768px) */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={38} />}
        </button>
        {/* Menú principal (desde 768px) - Queda a la izquierda en md */}
        <ul className="hidden md:flex items-center gap-6 font-medium md:order-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="text-red-700 hover:text-[#134289] transition  font-comic"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Logo - Queda en el centro en md y primero en sm */}
        <div className="flex items-center gap-3 order-first md:order-2">
          <img
            src="/Logo-secundario.svg"
            alt="toliboy logo"
            className="h-20 w-auto"
          />
        </div>
        {/* Botón de Contacto - Queda a la derecha en md y último en sm */}{" "}
        <Link
          to={contactLink.path}
          className="relative hidden md:block md:order-3 bg-red-600 text-white font-semibold py-3 px-6 rounded-4xl transition-transform hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0_0_#1e40af] active:shadow-none active:translate-x-0 active:translate-y-0"
        >
          {contactLink.name}{" "}
        </Link>
      </div>

      {/* Menú móvil (solo <768px) */}
      {isOpen && (
        <div
          className="md:hidden px-6 py-6 space-y-4 rounded-b-2xl shadow-lg"
          style={{ backgroundColor: "#fcf7e8" }}
        >
          {[...navLinks, contactLink].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-center font-medium shadow-md transition"
              style={{
                backgroundColor: "#e80029",
                color: "#fcf7e8",
              }}
            >
              {link.name}
            </Link>
          ))}

          <div
            className="flex justify-center gap-6 pt-5 border-t"
            style={{ borderColor: "#4e2c1d" }}
          >
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full transition"
                style={{ backgroundColor: "#e80029", color: "#fcf7e8" }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
