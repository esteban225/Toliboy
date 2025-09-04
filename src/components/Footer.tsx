import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-red-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logos */}
        <div className="flex items-center flex-col">
          <div className="flex items-center gap-3">
            <img
              src="/Mascota.svg"
              alt="toliboy logo"
              className="h-25 w-auto custom:h-41 transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/toli-calidad.svg"
              alt="toliboy calidad"
              className="h-36 w-auto custom:h-41 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Links de navegación */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Enlaces</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link to="/" className="hover:text-red-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/panaderia" className="hover:text-red-400">
                Panadería
              </Link>
            </li>
            <li>
              <Link to="/industrial" className="hover:text-red-400">
                Industrial
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
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Síguenos</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/toliboy.co"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="w-6 h-6 hover:text-red-400" />
            </a>
            <a
              href="https://www.instagram.com/toliboy.co/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="w-6 h-6 hover:text-red-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-red-700 pt-4 text-center text-sm text-red-200">
        © {new Date().getFullYear()} Toliboy. Todos los derechos reservados.
      </div>
    </footer>
  );
}
