import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Importamos el componente Link de React Router
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productLines = [
  {
    id: 1,
    image:
      "/Banner-Panaderia.webp",
    icon: "https://img.icons8.com/?size=100&id=118867&format=png&color=000000",
    title: "Panadería",
    description: "Nuestros panes no solo se hornean, se crean con las manos, como antes, como en casa.",
    link: "/catalogo/panaderia",
  },
  {
    id: 2,
    image:
      "/Banner-Pasteleria.webp",
    icon: "https://img.icons8.com/?size=100&id=kL10iTg3RGya&format=png&color=000000",
    title: "Pastelería",
    description: "Deliciosos ponques y otras delicias preparadas para compartir y endulzar tu día a día.",
    link: "/catalogo/pasteleria",
  },
  {
    id: 3,
    image:
      "/Banner-Richard.webp",
    icon: "https://img.icons8.com/?size=100&id=htNEv6WH8tvr&format=png&color=000000",
    title: "Richard Maestro ©",
    description: "Soluciones para industrias que buscan Innovación, sabor y confiabilidad en cada ingrediente.",
    link: "/catalogo/industrial",
  },
];

export default function ProductLines() {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 80, opacity: 0, scale: 0.95, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current[0]?.parentElement,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="w-full py-20 bg-[#FEF9F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {productLines.map((product, i) => (
            <Link
              key={product.id}
              to={product.link}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group block bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-red-400"
              aria-label={`Explorar línea de productos de ${product.title}`}
            >
              {/* Imagen principal */}
              <div className="relative w-full h-60">
                <img
                  src={product.image}
                  alt={`Imagen de la categoría ${product.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <img
                  src={product.icon}
                  alt={`Icono de ${product.title}`}
                  className="absolute bottom-4 right-4 w-14 h-14 drop-shadow-xl"
                  loading="lazy"
                />
              </div>

              {/* Texto */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}