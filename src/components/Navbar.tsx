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
        <div className="md:hidden bg-red-700 text-white px-6 py-6 space-y-4 rounded-b-2xl shadow-lg">
          {[
            { name: "Inicio", path: "/" },
            { name: "Panadería y Pastelería", path: "/panaderia" },
            { name: "Línea industrial", path: "/industrial" },
            { name: "Nosotros", path: "/nosotros" },
            { name: "Contacto", path: "/contacto" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-red-600 rounded-xl text-center 
                 font-medium shadow-md transition hover:bg-red-500 
                 hover:shadow-lg active:scale-95"
            >
              {item.name}
            </Link>
          ))}

          {/* Redes sociales */}
          <div className="flex justify-center gap-6 pt-5 border-t border-red-500">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-red-600 rounded-full hover:bg-red-500 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-red-600 rounded-full hover:bg-red-500 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-red-600 rounded-full hover:bg-red-500 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
