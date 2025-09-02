export default function Industrial() {
  return (
    <section className="w-full py-20 bg-red-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Encabezado Línea Industrial */}
        <div className="relative w-full h-64 mb-12">
          {/* Imagen de fondo */}
          <img
            src="/header-industrial.avif"
            alt="Línea Industrial"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Texto */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
              Línea Industrial
            </h2>
            <p className="text-lg md:text-xl text-amber-50 max-w-3xl mx-auto">
              Descubre nuestras soluciones de panificación diseñadas para
              panaderías, hoteles, restaurantes y mayoristas. Productos de alta
              calidad con la eficiencia que tu negocio necesita.
            </p>
          </div>
        </div>

        {/* Cards de productos/servicios */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <img
              src="/img-industrial1.avif"
              alt="Piña fresca en trocitos"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-red-800 mt-4">
              Piña fresca en trocitos
            </h3>
            <p className="text-red-700 mt-2">
              Ingredientes premium para una panificación de alto rendimiento.
            </p>
            <a
              href="/contacto"
              className="inline-block mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Solicitar información
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <img
              src="/img-industrial2.avif"
              alt="Desmoldante"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-red-800 mt-4">
              Desmoldante
            </h3>
            <p className="text-red-700 mt-2">
              Mezclas y premezclas prácticas para optimizar procesos.
            </p>
            <a
              href="/contacto"
              className="inline-block mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Solicitar información
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <img
              src="/img-industrial3.avif"
              alt="Brebas en Almibar"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-red-800 mt-4">
              Brebas en Almibar
            </h3>
            <p className="text-red-700 mt-2">
              Entregamos a gran escala, garantizando calidad y puntualidad.
            </p>
            <a
              href="/contacto"
              className="inline-block mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Solicitar información
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <img
              src="/img-industrial4.avif"
              alt="Glasse"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-red-800 mt-4">Glasse</h3>
            <p className="text-red-700 mt-2">
              Entregamos a gran escala, garantizando calidad y puntualidad.
            </p>
            <a
              href="/contacto"
              className="inline-block mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
