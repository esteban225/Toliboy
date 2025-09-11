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
      bg: "bg-[#FFC62D]", // amarillo industrial
      text: "text-[#FFC62D]",
      hover: "hover:text-[#FFC62D]",
    },
  };

  // Determinar color activo según la ruta
  const activeRoute =
    Object.entries(routeColors).find(([path]) =>
      location.pathname.startsWith(path)
    )?.[1] || routeColors["/catalogo/todo"];

  return (
    <nav
      className={`w-full transition-colors duration-500 ${activeRoute.bg} p-5 rounded-4xl`}
    >
      <ul className="flex flex-wrap gap-6 sm:gap-20 md:gap-32 lg:gap-40 justify-center font-semibold">
        {/* TODO */}
        <li>
          <NavLink
            to="/catalogo/todo"
            className={({ isActive }) =>
              isActive
                ? `bg-white ${routeColors["/catalogo/todo"].text} px-4 py-2 rounded-4xl font-bold transition-all duration-300`
                : `text-white ${routeColors["/catalogo/todo"].hover} hover:bg-white px-4 py-2 rounded-4xl transition-all duration-300`
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
                ? `bg-white ${routeColors["/catalogo/pasteleria"].text} px-4 py-2 rounded-4xl font-bold transition-all duration-300`
                : `text-white ${routeColors["/catalogo/pasteleria"].hover} hover:bg-white px-4 py-2 rounded-4xl transition-all duration-300`
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
                ? `bg-white ${routeColors["/catalogo/panaderia"].text} px-4 py-2 rounded-4xl font-bold transition-all duration-300`
                : `text-white ${routeColors["/catalogo/panaderia"].hover} hover:bg-white px-4 py-2 rounded-4xl transition-all duration-300`
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
                ? `bg-white ${routeColors["/catalogo/industrial"].text} px-4 py-2 rounded-4xl font-bold transition-all duration-300`
                : `text-white ${routeColors["/catalogo/industrial"].hover} hover:bg-white px-4 py-2 rounded-4xl transition-all duration-300`
            }
          >
            Richard Maestro &copy;
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
