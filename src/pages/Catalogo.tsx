import { Outlet } from "react-router-dom";
import NavbarProductos from "../components/NavbarProductos";

export default function Catalogo() {
  return (
    <div>
      <NavbarProductos />
      <div className="p-0">
        <Outlet />
      </div>
    </div>
  );
}
