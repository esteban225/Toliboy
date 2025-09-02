import "../App.css";
import { ArrowDown } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación inicial del hero
      gsap.from("#inicio h1", {
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from("#inicio p", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from("#inicio a", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });

      // ✅ Animación de títulos al hacer scroll
      gsap.utils.toArray("section h2").forEach((el) => {
        gsap.from(el as HTMLElement, {
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out",
        });
      });

      // ✅ Animación de párrafos
      gsap.utils.toArray("section p").forEach((el) => {
        gsap.from(el as HTMLElement, {
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
        });
      });

      // ✅ Animación de tarjetas
      gsap.utils.toArray(".card-producto").forEach((card, i) => {
        gsap.from(card as HTMLElement, {
          scrollTrigger: {
            trigger: card as HTMLElement,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });

      // ✅ Animación carrusel (entrada desde la derecha)
      gsap.from(".animate-scroll-x", {
        scrollTrigger: {
          trigger: ".animate-scroll-x",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert(); // ✅ Limpia animaciones al desmontar
  }, []);

  return (
    <>
      {/* SECCIÓN 1 - INICIO */}
      <section
        id="inicio"
        className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/toliboy-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/80 -z-10" />

        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-2xl text-white tracking-wide">
          Bienvenido
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200 drop-shadow-lg">
          Nuestra familia lleva veinticinco años en la ciudad de Duitama, Boyacá
          produciendo y comercializando materias primas y productos de panadería
          y pastelería de la mejor calidad.
        </p>

        <a
          href="#linea-productos"
          className="mt-10 animate-bounce flex flex-col items-center"
        >
          Conocer más
          <ArrowDown className="w-10 h-10 text-white drop-shadow-xl" />
        </a>
      </section>

      {/* SECCIÓN 2 - CONOCE LA LÍNEA DE PRODUCTOS */}
      <section
        id="linea-productos"
        className="w-full py-20 bg-red-50 text-center"
      >
        <h2 className="text-4xl font-extrabold text-red-600 mb-6 drop-shadow-lg">
          Conoce la línea de productos
        </h2>
        <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Soluciones en panificación a gran escala, pensadas para negocios,
          hoteles y mayoristas que buscan excelencia.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6 mt-10">
          {/* Card Panadería y Pastelería */}
          <div className="card-producto relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="/panaderia&pasteleria.jpg"
              alt="Panadería y Pastelería"
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-xl font-semibold text-white drop-shadow-md">
                Calidad y Cantidad
              </h3>
              <p className="text-3xl font-bold text-white mt-2 drop-shadow-md">
                Línea de Pastelería
              </p>
              <a
                href="/panaderia"
                className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
              >
                Más Información
              </a>
            </div>
          </div>

          {/* Card Línea Industrial */}
          <div className="card-producto relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src="/lineaindustrial.jpg"
              alt="Línea Industrial"
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-xl font-semibold text-white drop-shadow-md">
                Richard Maestro
              </h3>
              <p className="text-3xl font-bold text-white mt-2 drop-shadow-md">
                Línea Industrial
              </p>
              <a
                href="/industrial"
                className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
              >
                Más Información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 - EXPLORA NUESTROS PRODUCTOS */}
      <section id="explora" className="w-full py-20 bg-red-50 text-center">
        <h2 className="text-3xl font-extrabold text-red-600 mb-6 drop-shadow-lg">
          Explora nuestros productos
        </h2>
        <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Descubre la variedad de sabores y texturas que tenemos para ti,
          elaborados con tradición y calidad artesanal.
        </p>

        <div className="max-w-6xl mx-auto overflow-hidden mt-10">
          <div className="flex gap-6 animate-scroll-x">
            {/* Producto 1 */}
            <div className="relative group overflow-hidden rounded-md shadow-md min-w-[250px]">
              <img
                src="/p1.jpg"
                alt="Brownie"
                className="w-64 h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-4">
                <h3 className="text-lg font-bold text-white">Brownie</h3>
                <a
                  href="#"
                  className="mt-2 bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition"
                >
                  Ver más
                </a>
              </div>
            </div>
            {/* Producto 2 */}
            <div className="relative group overflow-hidden rounded-md shadow-md min-w-[250px]">
              <img
                src="/p2.jpg"
                alt="Ponqué lonchero"
                className="w-64 h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-4">
                <h3 className="text-lg font-bold text-white">
                  Ponqué lonchero
                </h3>
                <a
                  href="#"
                  className="mt-2 bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition"
                >
                  Ver más
                </a>
              </div>
            </div>
            {/* Producto 3 */}
            <div className="relative group overflow-hidden rounded-md shadow-md min-w-[250px]">
              <img
                src="/p3.jpg"
                alt="Ponqué junior"
                className="w-64 h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-4">
                <h3 className="text-lg font-bold text-white">Ponqué junior</h3>
                <a
                  href="#"
                  className="mt-2 bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition"
                >
                  Ver más
                </a>
              </div>
            </div>
            {/* Producto 4 */}
            <div className="relative group overflow-hidden rounded-md shadow-md min-w-[250px]">
              <img
                src="/p4.jpg"
                alt="Repolla"
                className="w-64 h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-4">
                <h3 className="text-lg font-bold text-white">Repolla</h3>
                <a
                  href="#"
                  className="mt-2 bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition"
                >
                  Ver más
                </a>
              </div>
            </div>
            {/* Producto 5 */}
            <div className="relative group overflow-hidden rounded-md shadow-md min-w-[250px]">
              <img
                src="/p5.jpg"
                alt="Tajadas de sabores"
                className="w-64 h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-4">
                <h3 className="text-lg font-bold text-white">
                  Tajadas de sabores
                </h3>
                <a
                  href="#"
                  className="mt-2 bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition"
                >
                  Ver más
                </a>
              </div>
            </div>
            {/* Producto 6 */}
            <div className="relative group overflow-hidden rounded-md shadow-md min-w-[250px]">
              <img
                src="/p6.jpg"
                alt="Brazo de reina"
                className="w-64 h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-4">
                <h3 className="text-lg font-bold text-white">Brazo de reina</h3>
                <a
                  href="#"
                  className="mt-2 bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition"
                >
                  Ver más
                </a>
              </div>
            </div>
            {/* Producto 7 */}
            <div className="relative group overflow-hidden rounded-md shadow-md min-w-[250px]">
              <img
                src="/p7.jpg"
                alt="Choco Rico"
                className="w-64 h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-4">
                <h3 className="text-lg font-bold text-white">Choco Rico</h3>
                <a
                  href="#"
                  className="mt-2 bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition"
                >
                  Ver más
                </a>
              </div>
            </div>
            {/* Producto 8 */}
            <div className="relative group overflow-hidden rounded-md shadow-md min-w-[250px]">
              <img
                src="/p8.jpg"
                alt="Yoyos"
                className="w-64 h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-4">
                <h3 className="text-lg font-bold text-white">Yoyos</h3>
                <a
                  href="#"
                  className="mt-2 bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
