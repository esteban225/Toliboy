import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fdf2e1ff] text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logos */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0">
              </div>
              <div className="flex-shrink-0">
                <img
                  src="/toli-calidad.svg"
                  alt="Toliboy Calidad"
                  className="h-20  sm:h-24 md:h-22 w-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <p className="text-sm sm:text-base text-blue-900 text-center md:text-left max-w-xs">
              Más de 30 años ofreciendo calidad y tradición en cada producto
            </p>
          </div>

        {/* Links de navegación */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg sm:text-xl mb-4 text-blue-900">Enlaces Rápidos</h3>
          <ul className="space-y-1 text-blue-900">
            <li>
              <Link 
                to="/" 
                className="inline-flex items-center hover:text-red-300 transition-colors duration-200 text-sm sm:text-base group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Inicio</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/catalogo/panaderia" 
                className="inline-flex items-center hover:text-red-300 transition-colors duration-200 text-sm sm:text-base group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Panadería</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/catalogo/pasteleria" 
                className="inline-flex items-center hover:text-red-300 transition-colors duration-200 text-sm sm:text-base group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Pastelería</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/catalogo/industrial" 
                className="inline-flex items-center hover:text-red-300 transition-colors duration-200 text-sm sm:text-base group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Industrial</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/nosotros" 
                className="inline-flex items-center hover:text-red-300 transition-colors duration-200 text-sm sm:text-base group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Nosotros</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contacto" 
                className="inline-flex items-center hover:text-red-300 transition-colors duration-200 text-sm sm:text-base group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Contacto</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg sm:text-xl mb-4 text-blue-900">Síguenos</h3>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a
              href="https://www.facebook.com/toliboy.co"
              target="_blank"
              rel="noreferrer"
              className="group bg-red-700 p-3 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="Seguir en Facebook"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-red-100" />
            </a>
            <a
              href="https://www.instagram.com/productos_toliboy?igsh=OHR3MHJ6Njg3cTZ5"
              target="_blank"
              rel="noreferrer"
              className="group bg-red-700 p-3 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="Seguir en Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-red-100" />
            </a>
          </div>
          <div className="space-y-2 text-sm text-blue-900">
            <p>📍 Duitama - Boyacá, Colombia</p>
            <p>📞 Contáctanos para pedidos</p>
            <p>⏰ Lun - Sáb: 6:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-8 md:mt-12 border-t border-red-700 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-900 text-center sm:text-left">
              © {new Date().getFullYear()} Toliboy. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs text-red-300">
              <span>Hecho con ❤️ en Boyacá</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
