import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-red-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/toli-logo.svg"
            alt="toliboy logo"
            className="h-10 w-auto custom:h-14 transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Botón menú hamburguesa (solo <768px) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú principal (desde 768px) */}
        <ul className="hidden md:flex gap-6 text-red-100 font-medium">
          <li>
            <Link to="/" className="hover:text-red-400">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/panaderia" className="hover:text-red-400">
              Panadería y Pastelería
            </Link>
          </li>
          <li>
            <Link to="/industrial" className="hover:text-red-400">
              Línea industrial
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className="hover:text-red-400">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-red-400">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Redes sociales (siempre visibles) */}
        <div className="hidden md:flex gap-4 text-red-200">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="w-5 h-5 hover:text-red-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="w-5 h-5 hover:text-red-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="w-5 h-5 hover:text-red-400" />
          </a>
        </div>
      </div>

      {/* Menú móvil (solo <768px) */}
      {isOpen && (
        <div className="md:hidden bg-red-700 text-white px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
          <Link to="/panaderia" onClick={() => setIsOpen(false)}>
            Panadería y Pastelería
          </Link>
          <Link to="/industrial" onClick={() => setIsOpen(false)}>
            Línea industrial
          </Link>
          <Link to="/nosotros" onClick={() => setIsOpen(false)}>
            Nosotros
          </Link>
          <Link to="/contacto" onClick={() => setIsOpen(false)}>
            Contacto
          </Link>

          <div className="flex gap-4 pt-4 border-t border-red-600">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
