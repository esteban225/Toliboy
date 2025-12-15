import { Outlet } from "react-router-dom";
import NavbarProductos from "../components/NavbarProductos";

export default function Catalogo() {
  return (
    <div>
      <div className="px-25 py-6 bg-[#fdf2e1ff]"><NavbarProductos /></div>
      <div className=" bg-[#fdf2e1ff]">
        <Outlet />
      </div>
    </div>
  );
}
