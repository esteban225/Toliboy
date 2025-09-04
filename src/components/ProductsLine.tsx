import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Define la interfaz para el tipo de datos de las tarjetas
interface Card {
  img: string;
  title: string;
  subtitle: string;
  link: string;
}

export default function ProductsLine() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Si no hay tarjetas, sal de la función.
    if (!cardsRef.current.length) return;

    cardsRef.current.forEach((card) => {
      // Asegura que el elemento exista antes de animarlo.
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, x: -100 }, // Estado inicial de la animación (movimiento horizontal)
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.2, // Aplica un pequeño retraso a cada tarjeta para un efecto escalonado
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Limpia las referencias al desmontar el componente.
    return () => {
      cardsRef.current = [];
    };
  }, []);

  const cards: Card[] = [
    {
      img: "/panaderia&pasteleria.avif",
      title: "Panadería y Pastelería",
      subtitle: "Ingredientes de calidad",
      link: "/panaderia",
    },
    {
      img: "/panaderia&pasteleria.avif",
      title: "Línea Pastelería",
      subtitle: "Listos para preparar",
      link: "/panaderia",
    },
    {
      img: "/lineaindustrial.avif",
      title: "Línea Industrial",
      subtitle: "Protección para tu negocio",
      link: "/industrial",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-10 p-4 w-full">
      {cards.map((card, i) => (
        <a
          key={i}
          href={card.link}
          ref={(el) => (cardsRef.current[i] = el)}
          className="anim-card flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm w-full max-w-sm sm:max-w-xl md:flex-row md:max-w-4xl hover:bg-gray-100 transition duration-300"
        >
          <img
            className="object-cover w-full h-64 rounded-t-lg md:h-64 md:w-80 md:rounded-none md:rounded-l-lg"
            src={card.img}
            alt={card.title}
            loading="lazy"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
              {card.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700">{card.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
