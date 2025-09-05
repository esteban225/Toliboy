import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

export default function NavbarProductos() {
  return (
    <nav className="navbar bg-[#FEF9F2] text-red-900">
      <ul>
        <li>
          <NavLink
            to="/catalogo/pasteleria"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pastelería
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalogo/panaderia"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Panadería
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalogo/industrial"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Industrial
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
