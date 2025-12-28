import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerSvg from "../assets/banner.svg?react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function BannerScroll() {
  const scope = useRef<HTMLDivElement | null>(null);
  const imgContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // 📌 Escritorio
        "(min-width: 769px)": () => {
          const svgEl = scope.current?.querySelector("svg");
          if (svgEl) {
            // 🔹 Solo shapes, excluimos <image>
            const shapesOnly = gsap.utils.toArray<SVGElement>(
              svgEl.querySelectorAll(
                "path, rect, circle, ellipse, polygon, polyline, line, img"
              )
            );

            // Pre-optimización de render
            gsap.set(shapesOnly, { willChange: "transform, opacity" });

            const entryTl = gsap.timeline({
              delay: 0.1,
              defaults: { duration: 0.7, ease: "power2.out" },
            });

            // 🎨 Animación de entrada shapes mejorada
            shapesOnly.forEach((element, index) => {
              let length = 100;
              if (
                "getTotalLength" in element &&
                typeof (element as SVGGeometryElement).getTotalLength ===
                  "function"
              ) {
                length = (element as SVGGeometryElement).getTotalLength();
              }

              gsap.set(element, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0,
                scale: 0.8,
                rotation: index % 2 === 0 ? -10 : 10, // rotación inicial alterna
                transformOrigin: "center center",
                filter: "blur(2px)", // blur inicial sutil
              });

              entryTl.to(
                element,
                {
                  strokeDashoffset: 0,
                  opacity: 1,
                  scale: 1,
                  rotation: 0,
                  filter: "blur(0px)",
                  ease: "back.out(1.2)", // easing más dinámico
                },
                `<+=${0.02 + (index * 0.01)}` // delay progresivo más rápido
              );
            });

          }
        },

        // 📌 Móvil
        "(max-width: 768px)": () => {
          if (mobileContainerRef.current) {
            const elementsToAnimate = gsap.utils.toArray<HTMLElement>(
              mobileContainerRef.current.querySelectorAll("img, h2, p, a")
            );

            gsap.from(elementsToAnimate, {
              opacity: 0,
              y: 40,
              duration: 0.7,
              stagger: 0.15,
              ease: "power2.out",
              willChange: "transform, opacity",
              scrollTrigger: {
                trigger: mobileContainerRef.current,
                start: "top bottom",
                toggleActions: "play none none none",
                invalidateOnRefresh: true,
              },
            });
          }
        },
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="h-full flex items-center justify-center bg-[#fdf2e1ff] overflow-auto">
        {/* 👇 Solo escritorio */}
        <div
          ref={scope}
          className="hidden md:flex w-full h-full items-center justify-center"
        >
          <BannerSvg className="w-full h-full object-cover" />
        </div>

        {/* 👇 Solo móvil */}
        <div
          ref={mobileContainerRef}
          className="md:hidden flex flex-col items-center justify-center w-full h-full text-center bg-[#fdf2e1ff] px-4 py-8 relative overflow-hidden"
        >
          {/* Fondo decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-5 w-16 h-16 bg-red-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-8 w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/3 right-5 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
          </div>

          {/* Título mejorado */}
          <h1 className="text-4xl sm:text-4xl font-bold text-red-700 mb-2 px-4 leading-tight">
            ¡Bienvenido a 
            <span className="block text-6xl sm:text-5xl text-yellow-600 font-extrabold mt-1">
              TOLIBOY!
            </span>
          </h1>

          {/* Mascota más pequeña */}
          <img
            src="/carita.svg"
            alt="Mascota Toliboy"
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain my-4 animate-bounce"
            loading="lazy"
          />

          {/* Descripción mejorada */}
          <p className="text-base sm:text-lg text-gray-700 px-4 mb-6 max-w-sm leading-relaxed">
            Tu panadería y pastelería de confianza.
            <span className="block font-semibold text-red-600 mt-1">
              ¡Calidad y sabor en cada bocado!
            </span>
          </p>

          {/* Botón mejorado */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <Button
              to="/catalogo"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg active:scale-95"
            >
              Ver Productos
            </Button>
            <Button
              to="/nosotros"
              variant="secondary"
              className="border-2 border-red-600 hover:bg-red-50"
            >
              Conocenos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
