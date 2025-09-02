import "../App.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("section h2").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 80%" },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out",
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const productos = [
    { img: "p1.avif", alt: "Brownie", title: "Brownie" },
    { img: "p2.avif", alt: "Ponqué lonchero", title: "Ponqué lonchero" },
    { img: "p3.avif", alt: "Ponqué junior", title: "Ponqué junior" },
    { img: "p4.avif", alt: "Repolla", title: "Repolla" },
    { img: "p5.avif", alt: "Tajadas de sabores", title: "Tajadas de sabores" },
    { img: "p6.avif", alt: "Brazo de reina", title: "Brazo de reina" },
    { img: "p7.avif", alt: "Choco Rico", title: "Choco Rico" },
    { img: "p8.avif", alt: "Yoyos", title: "Yoyos" },
  ];

  return (
    <div className="w-full bg-[#FEF9F2]">
      {/* HERO */}
      <section className="w-full flex flex-col items-center text-center py-2">
        <img
          src="/banner.avif"
          alt="Hero Toliboy"
          className="rounded-2xl shadow-xl w-full md:max-w-7xl px-4 md:px-0"
        />
      </section>

      {/* PRODUCTOS */}
      <div className="max-w-7xl mx-auto overflow-auto mt-10 py-2 scrollbar-hide">
        <div className="flex gap-4 animate-scroll-x">
          {productos.map((prod) => (
            <div
              key={prod.alt}
              className="relative group overflow-hidden rounded-md shadow-md flex-shrink-0 min-w-[50vw] sm:min-w-[40vw] md:min-w-[250px]"
            >
              <img
                src={`/${prod.img}`}
                alt={prod.alt}
                loading="lazy"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-4">
                <h3 className="text-sm md:text-lg font-bold text-white text-center">
                  {prod.title}
                </h3>
                <Link
                  to="/panaderia"
                  className="mt-2 bg-red-600 text-white text-xs md:text-base px-3 py-1 rounded font-semibold hover:bg-red-700 transition"
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONOCE NUESTRAS LÍNEAS */}
      <section className="w-full py-16 text-center">
        <div className="bg-[#002E6D] text-white text-2xl font-bold py-3">
          Conoce nuestras líneas
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
          {/* Card Línea de Panadería y Pastelería */}
          <div className="card-producto relative group overflow-hidden rounded-xl shadow-lg w-full max-w-sm mx-auto">
            <img
              src="/panaderia&pasteleria.avif"
              alt="Línea de Panadería y Pastelería"
              loading="lazy"
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-xl font-semibold text-white">
                Ingredientes de calidad
              </h3>
              <p className="text-3xl font-bold text-white mt-2">
                Panadería y Pastelería
              </p>
              <Link
                to="/panaderia"
                className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Más Información
              </Link>
            </div>
          </div>

          {/* Card: Línea de Congelados */}
          <div className="card-producto relative group overflow-hidden rounded-xl shadow-lg w-full max-w-sm mx-auto">
            <img
              src="/panaderia&pasteleria.avif"
              alt="Línea de Congelados"
              loading="lazy"
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-xl font-semibold text-white">
                Listos para preparar
              </h3>
              <p className="text-3xl font-bold text-white mt-2">
                Línea Pastelería
              </p>
              <Link
                to="/panaderia"
                className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Más Información
              </Link>
            </div>
          </div>

          {/* Card Línea Industrial */}
          <div className="card-producto relative group overflow-hidden rounded-xl shadow-lg w-full max-w-sm mx-auto">
            <img
              src="/lineaindustrial.avif"
              alt="Línea Industrial"
              loading="lazy"
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-xl font-semibold text-white">
                Protección para tu negocio
              </h3>
              <p className="text-3xl font-bold text-white mt-2">
                Línea Industrial
              </p>
              <Link
                to="/industrial"
                className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Más Información
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 25 AÑOS DE TRADICIÓN */}
      <section className="w-full bg-[#E30613] py-16 text-center text-white relative">
        <img
          src="/mascota-toliboy.svg"
          alt="Mascota"
          className="mx-auto w-28 mb-4"
        />
        <h2 className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto">
          Más de 25 años ofreciendo calidad y tradición en panadería y
          pastelería.
        </h2>
        <button className="mt-6 bg-[#002E6D] px-6 py-2 rounded-lg font-semibold hover:bg-blue-900">
          <Link
            to="/industrial"
            className="mt-6  bg-[#002E6D] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 transition"
          >
            Más Información
          </Link>
        </button>
      </section>

      {/* CONTACTO */}
      <section className="w-full bg-[#FEC601] py-16 text-center">
        <img
          src="/contacto-toliboy.svg"
          alt="Contáctanos"
          className="mx-auto w-32 mb-4"
        />
        <h2 className="text-2xl font-bold text-[#002E6D]">Contáctanos</h2>
      </section>
    </div>
  );
}
