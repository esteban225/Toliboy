import { NavLink, useLocation } from "react-router-dom";

export default function NavbarProductos() {
  const location = useLocation();

  // Configuración de colores dinámicos por ruta
  const routeColors: Record<
    string,
    { bg: string; text: string; hover: string }
  > = {
    "/catalogo/todo": {
      bg: "bg-[#4E2C1D]", // marrón oscuro
      text: "text-[#4E2C1D]",
      hover: "hover:text-[#4E2C1D]",
    },
    "/catalogo/pasteleria": {
      bg: "bg-[#E80029]", // rojo pastel
      text: "text-[#E80029]",
      hover: "hover:text-[#E80029]",
    },
    "/catalogo/panaderia": {
      bg: "bg-[#134289]", // azul panadería
      text: "text-[#134289]",
      hover: "hover:text-[#134289]",
    },
    "/catalogo/industrial": {
      bg: "bg-[#0a4635]", // verde industrial
      text: "text-[#0a4635]",
      hover: "hover:text-[#0a4635]",
    },
  };

  // Determinar color activo según la ruta
  const activeRoute =
    Object.entries(routeColors).find(([path]) =>
      location.pathname.startsWith(path)
    )?.[1] || routeColors["/catalogo/todo"];

  return (
    <nav
      className={`w-full transition-colors duration-500 ${activeRoute.bg} p-3 sm:p-4 md:p-5 rounded-4xl`}
    >
      <ul className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-center font-semibold">
        {/* TODO */}
        <li>
          <NavLink
            to="/catalogo/todo"
            className={({ isActive }) =>
              isActive
                ? `bg-white ${routeColors["/catalogo/todo"].text} px-3 py-1 sm:px-4 sm:py-2 rounded-4xl font-bold transition-all duration-300 text-xs sm:text-sm md:text-base`
                : `text-white ${routeColors["/catalogo/todo"].hover} hover:bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-4xl transition-all duration-300 text-xs sm:text-sm md:text-base`
            }
          >
            Todo
          </NavLink>
        </li>

        {/* PASTELERÍA */}
        <li>
          <NavLink
            to="/catalogo/pasteleria"
            className={({ isActive }) =>
              isActive
                ? `bg-white ${routeColors["/catalogo/pasteleria"].text} px-3 py-1 sm:px-4 sm:py-2 rounded-4xl font-bold transition-all duration-300 text-xs sm:text-sm md:text-base`
                : `text-white ${routeColors["/catalogo/pasteleria"].hover} hover:bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-4xl transition-all duration-300 text-xs sm:text-sm md:text-base`
            }
          >
            Pastelería
          </NavLink>
        </li>

        {/* PANADERÍA */}
        <li>
          <NavLink
            to="/catalogo/panaderia"
            className={({ isActive }) =>
              isActive
                ? `bg-white ${routeColors["/catalogo/panaderia"].text} px-3 py-1 sm:px-4 sm:py-2 rounded-4xl font-bold transition-all duration-300 text-xs sm:text-sm md:text-base`
                : `text-white ${routeColors["/catalogo/panaderia"].hover} hover:bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-4xl transition-all duration-300 text-xs sm:text-sm md:text-base`
            }
          >
            Panadería
          </NavLink>
        </li>

        {/* INDUSTRIAL */}
        <li>
          <NavLink
            to="/catalogo/industrial"
            className={({ isActive }) =>
              isActive
                ? `bg-white ${routeColors["/catalogo/industrial"].text} px-3 py-1 sm:px-4 sm:py-2 rounded-4xl font-bold transition-all duration-300 text-xs sm:text-sm md:text-base`
                : `text-white ${routeColors["/catalogo/industrial"].hover} hover:bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-4xl transition-all duration-300 text-xs sm:text-sm md:text-base`
            }
          >
            Richard Maestro &copy;
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
