import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleParts = [
  ["N", "u", "e", "s", "t", "r", "o", "s"],
  ["p", "r", "o", "d", "u", "c", "t", "o", "s"],
  ["s", "o", "n"],
  ["1", "0", "0", "%"],
  ["n", "a", "t", "u", "r", "a", "l", "e", "s"],
];

export default function RichTextSection() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll("span");

      gsap.fromTo(
        letters,
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="w-full py-20 bg-[#FEC601] rounded-b-full border-amber-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        {/* Decoración arriba */}
        <img
          src="/toli.svg"
          alt="Decorative flower"
          className="w-26 h-26 mx-auto mb-6 opacity-70"
        />

        {/* Título animado */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold leading-snug mb-6 flex flex-wrap justify-center"
        >
          {titleParts.map((part, partIndex) => (
            <span key={partIndex} className="mr-2">
              {part.map((letter, i) => (
                <span key={i} className="inline-block">
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h2>

        {/* Párrafo animado */}
        <p
          ref={paragraphRef}
          className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          Tanto si eres un experto en alimentación a base de plantas como si no
          te gustan las verduras, sabemos que nunca has probado nada igual. ¿No
          nos crees? ¡Anímate a probarlo!
        </p>

        {/* Decoración abajo */}
        <img
          src="/toli-calidad.svg"
          alt="Plants taste better"
          className="w-50 mx-auto mt-10 opacity-80"
        />
      </div>
    </section>
  );
}
