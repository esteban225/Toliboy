import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-red-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="flex items-center flex-col">
          {/* Logo */}
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
              alt="toliboy logo"
              className="h-36 w-auto custom:h-41 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Links de navegación */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Enlaces</h3>
          <ul className="space-y-2 text-white">
            <li className="hover:text-red-400 cursor-pointer">Inicio</li>
            <li className="hover:text-red-400 cursor-pointer">Panadería</li>
            <li className="hover:text-red-400 cursor-pointer">Pastelería</li>
            <li className="hover:text-red-400 cursor-pointer">Nosotros</li>
            <li className="hover:text-red-400 cursor-pointer">Contacto</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Síguenos</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-6 h-6 hover:text-red-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-6 h-6 hover:text-red-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-6 h-6 hover:text-red-400" />
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
