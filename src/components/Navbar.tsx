import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import Button from "./Button";

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
      style={{ backgroundColor: "#fdf2e1ff" }}
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative">
        
        {/* GRID RESPONSIVO */}
        <div className="flex items-center justify-between md:grid md:grid-cols-3 gap-4 md:gap-8">
          
          {/* BOTÓN MENÚ MOBILE */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={32} />}
          </button>

          {/* MENÚ IZQUIERDA (DESKTOP) */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6 font-medium justify-start">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-red-600 hover:text-[#134289] transition font-semibold text-sm lg:text-lg hover:underline px-2 py-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* LOGO CENTRADO */}
          <div className="flex justify-center flex-1 md:flex-none">
            <Link to="/" className="hover:opacity-80 transition">
              <img
                src="/Logo-secundario.svg"
                alt="Toliboy logo"
                className="h-16 sm:h-20 md:h-24 w-auto"
              />
            </Link>
          </div>

          {/* BOTÓN DERECHA (DESKTOP) */}
          <div className="hidden md:flex justify-end">
            <Button to={contactLink.path} className="font-bold text-sm lg:text-base">
              {contactLink.name}
            </Button>
          </div>
        </div>
      </div>

      {/* MENÚ MOBILE */}
      {isOpen && (
        <div
          className="md:hidden px-4 sm:px-6 py-6 space-y-3 border-t"
          style={{ backgroundColor: "#fdf2e1ff", borderColor: "#e80029" }}
        >
          {[...navLinks, contactLink].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-center font-medium shadow-md transition hover:shadow-lg"
              style={{
                backgroundColor: "#e80029",
                color: "#fcf7e8",
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* REDES SOCIALES */}
          <div
            className="flex justify-center gap-4 pt-4 border-t"
            style={{ borderColor: "#4e2c1d" }}
          >
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full transition hover:scale-110"
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
