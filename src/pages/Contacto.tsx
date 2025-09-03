export default function Contacto() {
  return (
    <section className="w-full bg-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Formulario */}
        <div>
          <h2 className="text-3xl font-bold text-amber-800 mb-6">Contáctanos</h2>
          <p className="text-gray-600 mb-6">
            Si tienes alguna duda o quieres más información, completa el
            siguiente formulario y nos pondremos en contacto contigo.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Mensaje
              </label>
              <textarea
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* Mapa */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.132541142667!2d-73.02535472418501!3d5.8369346307590755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3f19f58225d5%3A0xb4e9072e742e4c5d!2sToliboy!5e0!3m2!1ses-419!2sco!4v1756912812178!5m2!1ses-419!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Ubicación Bogotá Colombia"
            className="w-full h-[400px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.132541142667!2d-73.02535472418501!3d5.8369346307590755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3f19f58225d5%3A0xb4e9072e742e4c5d!2sToliboy!5e0!3m2!1ses-419!2sco!4v1756912812178!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
