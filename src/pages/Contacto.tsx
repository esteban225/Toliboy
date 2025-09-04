import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [estado, setEstado] = useState<
    "idle" | "enviando" | "enviado" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("enviando");

    emailjs
      .send(
        "service_xxx", // Reemplaza con tu Service ID de EmailJS
        "template_xxx", // Reemplaza con tu Template ID de EmailJS
        {
          nombre: form.nombre,
          email: form.email,
          mensaje: form.mensaje,
        },
        "publicKey_xxx" // Reemplaza con tu Public Key de EmailJS
      )
      .then(() => {
        setEstado("enviado");
        setForm({ nombre: "", email: "", mensaje: "" });
      })
      .catch(() => setEstado("error"));
  };

  return (
    <section className="w-full bg-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Formulario */}
        <div>
          <h2 className="text-3xl font-bold text-amber-800 mb-6">
            Contáctanos
          </h2>
          <p className="text-gray-600 mb-6">
            Si tienes alguna duda o quieres más información, completa el
            siguiente formulario y nos pondremos en contacto contigo.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={estado === "enviando"}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition disabled:opacity-50"
            >
              {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {estado === "enviado" && (
              <p className="text-green-600 font-medium mt-2">
                ✅ ¡Mensaje enviado con éxito!
              </p>
            )}
            {estado === "error" && (
              <p className="text-red-600 font-medium mt-2">
                ❌ Ocurrió un error. Inténtalo de nuevo.
              </p>
            )}
          </form>
        </div>

        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
          {/* Mapa */}
          <div className="h-[300px] md:h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.132541142667!2d-73.02535472418501!3d5.8369346307590755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3f19f58225d5%3A0xb4e9072e742e4c5d!2sToliboy!5e0!3m2!1ses-419!2sco!4v1756912812178!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Ubicación Toliboy - Boyacá, Colombia"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Info de contacto */}
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-amber-800">
              Información de contacto
            </h3>

            {/* Teléfonos */}
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="w-5 h-5 text-red-600" />
              <p>
                Celular:{" "}
                <span className="font-medium">313 321 5268 – 310 550 5133</span>{" "}
                <br />
                Teléfono:{" "}
                <span className="font-medium">098 762 6677 – 762 8430</span>
              </p>
            </div>

            {/* Emails */}
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-red-600" />
              <p>
                ventas@toliboy.com <br />
                contacto@toliboy.com
              </p>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-4 pt-3">
              <a
                href="https://www.facebook.com/toliboy.co"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/toliboy.co"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-600 rounded-full text-white hover:bg-pink-700 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:comercial@toliboy.com"
                className="p-3 bg-red-600 rounded-full text-white hover:bg-red-700 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
