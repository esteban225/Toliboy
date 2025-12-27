import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ProductoCard from "./ProductoCard";
import type { Product } from "../data/products";

interface Props {
  products: Product[];
  title: string;
  p: string;
  background: string;
}

export default function ProductGrid({ products, title, background, p }: Props) {
  const location = useLocation();

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Colores dinámicos por ruta (mismo que NavbarProductos)
  const routeColors: Record<string, string> = {
    "/catalogo/todo": "#4E2C1D",
    "/catalogo/pasteleria": "#E80029",
    "/catalogo/panaderia": "#134289",
    "/catalogo/industrial": "#0a4635",
  };

  // Determinar color activo según la ruta
  const activeColor =
    Object.entries(routeColors).find(([path]) =>
      location.pathname.startsWith(path)
    )?.[1] || routeColors["/catalogo/todo"];

  // Imagen de fondo por categoría
  const categoryImages: Record<string, string> = {
    pasteleria: "/Banner-Pasteleria.webp",
    panaderia: "/Banner-Panaderia.webp",
    industrial: "/Banner-Richard.webp",
  };
  const category = products[0]?.category || "pasteleria";
  const headerImg = categoryImages[category] || p;

  return (
    <section
      className={`relative ${background} text-red-900 py-8 px-4 sm:px-8 md:px-16 lg:px-24`}
    >
      {/* Encabezado */}
      <div className="relative w-full mb-12 flex items-stretch gap-0">
        {/* Cuadrado con título - Izquierda */}
        <div
          className="hidden md:flex flex-col items-center justify-center w-130 rounded-l-2xl p-8 shadow-lg text-center flex-shrink-0"
          style={{ backgroundColor: activeColor }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
            {title}
          </h2>
          <h3 className="text-base lg:text-lg text-white mt-4 font-semibold">
            Catálogo de Productos
          </h3>
        </div>

        {/* Imagen de fondo */}
        <div className="relative flex-1 h-80 md:h-96 rounded-r-2xl overflow-hidden shadow-lg">
          <img
            src={headerImg}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Título móvil */}
        <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center text-center z-10 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            {title}
          </h2>
          <h3 className="text-base md:text-lg text-white mt-3 font-semibold">
            Catálogo de Productos
          </h3>
        </div>
      </div>

      {/* Render de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial={idx < 3 ? "visible" : "hidden"}
            whileInView={idx < 3 ? undefined : "visible"}
            viewport={idx < 3 ? undefined : { once: true, amount: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-lg min-h-[620px] sm:min-h-[380px] md:min-h-[550px] flex"
            style={{ backgroundColor: product.color }}
          >
            {product.weight && (
              <div className="absolute top-4 -right-14 rotate-45 md:top-6 md:-right-20 z-10">
                <div className="bg-[#6F4E37]/75 text-white text-xl md:text-lg px-16 md:px-24 py-2 md:py-3 shadow-lg font-bold">
                  {product.weight}
                </div>
              </div>
            )}

            <ProductoCard
              nombreProducto={product.name}
              descripcion={product.shortDescription}
              precio=""
              imagen={product.image}
              caracteristicas={product.features}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
