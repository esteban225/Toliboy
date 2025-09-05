import { motion } from "framer-motion";
import "../css/Navbar.css"; // Asegúrate de que esta ruta sea correcta
import ProductoCard from "./ProductoCard";
import "../css/ProductCard.css";


interface Product {
  name: string;
  weight: string;
  image: string;
}

const productsIndustrial: Product[] = [
  {
    name: "Brazo de Reina",
    weight: "Peso unitario 85g",
    image: "/industrial/p1.webp",
  },
  {
    name: "ChocoRico",
    weight: "Peso unitario 65g",
    image: "/industrial/p1.webp",
  },
  {
    name: "Hojardre",
    weight: "Presentaciones de 300g y 500g",
    image: "/industrial/p1.webp",
  },
  { name: "Ponqué Junior", weight: "Peso 230g", image: "/industrial/p1.webp" },
  {
    name: "Lonchero de queso",
    weight: "Peso unitario 65g",
    image: "/industrial/p1.webp",
  },
  {
    name: "Ponqué Lonchero",
    weight: "Peso unitario 80g",
    image: "/industrial/p1.webp",
  },
 
];
// Componente principal del catálogo
export default function ProductsIndustrial() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Industrial */}
      <section className="relative bg-red-50 text-red-900 py-20 px-6">
        {/* Encabezado */}
        <div className="relative w-full h-64 mb-12">
          <img
            src="/panaderia&pasteleria.webp"
            alt="Industrial"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Industrial 
            </h2>
            <h3 className="text-lg md:text-xl text-red-200 mt-3">
              Catálogo de Productos
            </h3>
          </div>
        </div>

        {/* Render de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {productsIndustrial.map((product, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <ProductoCard
                nombreProducto={product.name}
                descripcion={product.weight}
                precio={""}
                imagen={product.image}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
