import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // cada vez que cambia la ruta, vuelve arriba
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // puedes cambiar a "auto" si no quieres animación
    });
  }, [pathname]);

  return null;
}
