import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleParts = [
  ["N", "u", "e", "s", "t", "r", "o", ""],
  ["p", "r", "o", "d", "u", "c", "t", "o", ""],
  ["e", "s"],
  ["1", "0", "0", "%"],
  ["B", "o", "y", "a", "c", "e", "n", "s", "e"],
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
    <section className="w-full bg-[#FEC601] relative overflow-hidden">
      <div className="pt-20 pb-0">
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
            Generación tras generación, hemos compartido el sabor que nos une.
            Muchos ya lo conocen... Y quien lo prueba siempre quiere más
            <br />
            <span className="text-gray font-semibold"> ¿Tú, ya lo probaste? </span>
          </p>

          {/* Decoración abajo */}
          <img
            src="/toli-calidad.svg"
            alt="Plants taste better"
            className="w-50 mx-auto mt-10 opacity-80"
          />
        </div>
      </div>

      {/* Onda SVG */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-auto block"
        style={{ marginTop: "-2px" }}
      >
        <path
          d="M0,64L120,74.7C240,85,480,107,720,106.7C960,107,1200,85,1320,74.7L1440,64L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
          fill="#e80029"
        />
      </svg>
    </section>
  );
}
