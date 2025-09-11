import { Outlet } from "react-router-dom";
import NavbarProductos from "../components/NavbarProductos";

export default function Catalogo() {
  return (
    <div>
      <div className="px-25 py-6 bg-[#FEF9F2]"><NavbarProductos /></div>
      <div className=" bg-[#FEF9F2]">
        <Outlet />
      </div>
    </div>
  );
}
