import { motion } from "framer-motion";
import ProductoCard from "./ProductoCard";
import type { Product } from "../data/products";

interface Props {
  products: Product[];
  title: string;
  background: string;
  weight: string;
}

export default function ProductGrid({ products, title, background }: Props) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      className={`relative ${background} text-red-900 py-8 px-4 sm:px-8 md:px-16 lg:px-24`}
    >
      {/* Encabezado */}
      <div className="relative w-full h-94 mb-12">
        <img
          src="/panaderia&pasteleria.webp"
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            {title}
          </h2>
          <h3 className="text-lg md:text-xl text-red-200 mt-3">
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-lg min-h-[380px] md:min-h-[550px] flex"
            style={{ backgroundColor: product.color }}
          >
            {product.weight && (
              <div className="absolute top-1 right-[-170px] bg-[#6F4E37] text-white text-3xl px-43 py-10 rotate-45 shadow-md shadow-red-500">
                {product.weight}
              </div>
            )}

            <ProductoCard
              nombreProducto={product.name}
              descripcion={product.weight}
              precio=""
              imagen={product.image}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
