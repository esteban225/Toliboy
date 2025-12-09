import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import Button from "./Button";
import "../css/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/catalogo" },
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
      <div className="max-w-7xl mx-auto py-3 px-4 md:px-8 flex items-center justify-between">
        {/* Botón menú hamburguesa (solo <768px) */}
        <button
          className="md:hidden pl-20 text-gray-800  mr-auto"
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
                className="text-red-700 hover:text-[#134289] transition  font-light"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Logo - Queda en el centro en md y primero en sm */}
        <div className="flex items-center gap-3 order-first md:order-2">
          <Link to="/">
            <img
              src="/Logo-secundario.svg"
              alt="toliboy logo"
              className="h-20 w-auto"
            />
          </Link>
        </div>
        {/* Botón de Contacto - Queda a la derecha en md y último en sm */}{" "}
        <Button
          to={contactLink.path}
          className="hidden md:block md:order-3"
        >
          {contactLink.name}
        </Button>
      </div>

      {/* Menú móvil (solo <768px) */}
      {isOpen && (
        <div
          className="md:hidden px-4 sm:px-6 py-6 space-y-4 rounded-b-2xl shadow-lg"
          style={{ backgroundColor: "#fdf2e1ff" }}
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
