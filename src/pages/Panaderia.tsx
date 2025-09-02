import { motion } from "framer-motion";

const products = [
  {
    name: "Brazo de Reina",
    weight: "Peso unitario 85g",
    image: "/p6.avif",
  },
  {
    name: "Tajadas de sabores",
    weight: "Peso unitario 65g",
    image: "/p5.avif",
  },
  {
    name: "Yoyos",
    weight: "Presentaciones de 300g y 500g",
    image: "/p8.avif",
  },
  { name: "Ponqué Junior", weight: "Peso 230g", image: "/p3.avif" },
  { name: "Repolla", weight: "Peso unitario 65g", image: "/p4.avif" },
  {
    name: "Ponqué Lonchero",
    weight: "Peso unitario 80g",
    image: "/p2.avif",
  },
  { name: "Chocorico", weight: "Peso unitario 85g", image: "/p7.avif" },
  { name: "Brownie", weight: "Peso unitario 85g", image: "/p1.avif" },
  {
    name: "Pan tajado integral",
    weight: "Peso unitario 450g",
    image: "/p9.avif",
  },
];

export default function Catalogo() {
  return (
    <section className="relative bg-red-50 text-red-900 py-20 px-6">
      {/* Encabezado */}
      <div className="relative w-full h-64 mb-12">
        {/* Imagen de fondo */}
        <img
          src="/panaderia&pasteleria.avif"
          alt="Panadería"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay para oscurecer la imagen */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Texto centrado */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Panadería y Pastelería
          </h2>
          <h3 className="text-lg md:text-xl text-red-200 mt-3">
            Catálogo de Productos
          </h3>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Imagen */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-red-800">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-red-700">{product.weight}</p>
              <button className="mt-4 px-5 py-2 bg-red-500 text-white text-sm rounded-full font-medium hover:bg-red-600 transition">
                Ver más
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
