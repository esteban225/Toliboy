import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Nosotros() {
  return (
    <div className="w-full">
      {/* Banner Principal */}
      <section
        className="relative h-[220px] md:h-[300px] bg-cover bg-center flex items-center justify-center px-6 bg-[#FEF9F2]"
        style={{
          backgroundImage: "url('/nosotros1.webp')",
          backgroundPosition: "59% 47%",
        }}
      >
        {/* Overlay con color corporativo */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Contenido animado */}
        <motion.div
          className="relative z-10 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-md">
            Nuestra empresa
          </h1>
        </motion.div>
      </section>

      {/* Descripción */}
      <section className="bg-red-50 py-16 px-6 md:px-12 container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/nosotros1.webp"
          alt="Productos Toliboy"
          className="rounded-2xl shadow-lg object-cover aspect-[16/9] w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
            Productos Comestibles TOLIBOY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Somos una empresa Colombiana ubicada en la ciudad de Duitama Boyacá,
            productora y comercializadora de materias primas para panadería y
            productos de panadería y pastelería, creada con el objetivo de dar
            soluciones prácticas a nuestros clientes y a la industria
            panificadora, alimentos y confitería. Con veinticinco años de
            experiencia, y participación a nivel nacional.
          </p>
        </motion.div>
      </section>

      {/* Historia */}
      <section className="py-16 px-6 md:px-12 container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
            Historia
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Productos Comestibles TOLIBOY inicio actividades el 1 de noviembre
            de 1995, con un horno estático de cuatro gavetas, una artesa para
            amasar, un escaviladero, un mesón y veinticuatro latas para
            panadería. La razón social se deriva de la sociedad entre un
            tolimense y un boyacense. El mayor obstáculo era la carencia total
            de maquinaria, pero Ricardo Diaz seguro de sus conocimientos se
            comprometió a realizar todos los procesos manualmente de forma muy
            artesanal pues contaba con una vasta experiencia de treinta años en
            el oficio de panadería y pastelería
          </p>
        </motion.div>
        <motion.img
          src="/nosotros2.webp"
          alt="Historia Toliboy"
          className="rounded-2xl shadow-lg object-cover aspect-[16/9] w-full"
          whileHover={{ scale: 1.05 }}
        />
      </section>

      {/* Información corporativa */}
      <section className="bg-red-50 py-16 px-6 md:px-12">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-red-800 mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Información Corporativa
        </motion.h2>

        <div className="space-y-10 max-w-4xl mx-auto">
          {[
            {
              titulo: "Misión",
              texto:
                "Nutrimos la vida con sabor, tradición y confianza, con productos fabricados por un talento humano componente y comprometido, dejando huella para brindar bienestar a nuestro grupos de interés y lograr un crecimiento empresarial sostenible.",
            },
            {
              titulo: "Visión",
              texto:
                "En el 2030 seremos modelo empresarial en la fabricación de alimentos y materias primas nutritivas, que transmitan felicidad a nuestros clientes, desarrollando estrategias rentables y sostenibles, evolucionando con incoación, tradición y sentido humano.",
            },
            {
              titulo: "Política de calidad",
              texto:
                "Productos comestibles TOLIBOY S.A.S., es una empresa dedicada a Procesar y comercializar productos alimenticios saludables de la mejor calidad, afianzando la credibilidad de nuestras marcas de productos, comprometidos en el cumplimiento de los requisitos aplicables al sector y el mejoramiento continuo de nuestro sistema de gestión de la calidad a través de los procesos, con innovación, oportunidad para mejorar la competitividad, productividad, apoyando la dirección estratégica, cumpliendo las normas y los estándares de calidad del producto, apoyados con personas competentes, capacitadas, motivadas e interesadas en responder a las necesidades, expectativas de los clientes, partes interesadas y en el logro de los objetivos estratégicos y de la calidad de la organización; incursionando en nuevos mercados y manteniendo el posicionamiento de nuestras marcas, favoreciendo el desarrollo del entorno social y la conservación del medio ambiente, generando rentabilidad para los socios.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-red-800">
                {item.titulo}
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">{item.texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Valores corporativos */}
      <section className="bg-gradient-to-r from-red-800 to-red-700 text-white py-16 px-6">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          Valores Corporativos
        </motion.h2>
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {[
            "Trabajo en equipo",
            "Responsabilidad",
            "Respeto",
            "Equidad",
            "Confianza",
            "Familia",
          ].map((valor, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white/10 rounded-xl p-6 shadow-md hover:bg-white/20 transition"
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-semibold">{valor}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
