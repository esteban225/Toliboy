import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Nosotros() {
  return (
    <div className="w-full bg-[#fdf2e1ff]">
      {/* Banner Principal */}
      <section
        className="relative h-[220px] md:h-[300px] bg-cover bg-center flex items-center justify-center px-6 bg-[#fdf2e1ff]"
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
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-md">
            Nuestra empresa
          </h1>
        </motion.div>
      </section>

      {/* Descripción */}
      <section className="bg-[#fdf2e1ff] py-16 px-6 md:px-12 container mx-auto grid md:grid-cols-2 gap-12 items-center mt-5">
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
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
            Productos Comestibles Toliboy
          </h2>
          <h3 className="text-1xl md:text-2xl font-bold mb-4">
            Hechos con el corazón de Boyacá
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Desde Duitama, Boyacá, llevamos 30 años creando productos de
            panadería y pastelería que llenan de sabor y tradición los
            hogares del departamento.
            <br />
            En Toliboy elaboramos materias primas para panadería y pastelería
            pensadas para hacerte la vida más fácil, con la calidad y el sabor
            que solo la experiencia y el trabajo boyacense pueden ofrecer.
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
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
            Nuestra historia
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Entre montañas que huelen a esfuerzo y tradición, nació Productos
            Comestibles Toliboy. El 5 de diciembre de 1995, todo comienza con la
            sociedad entre un tolimense y un boyacense. Sin maquinaria, pero con
            un gran corazón, comenzó un sueño que cambiaría el rumbo de muchas
            familias boyacenses.
            <br />
            <br />
            Detrás de este sueño estaba Ricardo Díaz, un hombre con el alma
            llena de fe, sin más recursos que conocimiento, pasión y ganas de
            salir adelante.
            <br />
            <br />
            Con más de 30 años de experiencia en panadería y pastelería, Ricardo
            Díaz decidió hacerlo todo de manera manual, con la precisión y el
            amor de quien cree en lo que hace. Día tras día, su dedicación
            transformó la escasez en oportunidad, el trabajo duro en aprendizaje
            y su pequeño proyecto artesanal en una empresa que hoy endulza la
            vida de Boyacá.
            <br />
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
      <section className="bg-[#fdf2e1ff] py-16 px-6 md:px-12">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-12"
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
                "Nutrimos la vida con sabor, tradición y confianza, con productos fabricados por un talento humano competente y comprometido, dejando huella para brindar bienestar a nuestros grupos de interés y lograr un crecimiento empresarial sostenible.",
            },
            {
              titulo: "Visión",
              texto:
                "En el 2030 seremos modelo empresarial en la fabricación de alimentos y materias primas nutritivas, que transmitan felicidad a nuestros clientes, desarrollando estrategias rentables y sostenibles, evolucionando con innovación, tradición y sentido humano.",
            },
            {
              titulo: "Política de calidad",
              texto:
                "Productos comestibles TOLIBOY S.A.S. es una empresa dedicada a procesar y comercializar productos alimenticios saludables de la mejor calidad, afianzando la credibilidad de nuestras marcas de productos, comprometidos en el cumplimiento de los requisitos aplicables al sector y el mejoramiento continuo de nuestro sistema de gestión de la calidad a través de los procesos, con innovación, oportunidad para mejorar la competitividad, productividad, apoyando la dirección estratégica, cumpliendo las normas y los estándares de calidad del producto, apoyados con personas competentes, capacitadas, motivadas e interesadas en responder a las necesidades, expectativas de los clientes, partes interesadas y en el logro de los objetivos estratégicos y de la calidad de la organización; incursionando en nuevos mercados y manteniendo el posicionamiento de nuestras marcas, favoreciendo el desarrollo del entorno social y la conservación del medio ambiente, generando rentabilidad para los socios.",
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
              <h3 className="text-xl font-semibold text-red-600">
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
