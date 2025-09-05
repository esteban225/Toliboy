import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerSvg from "../assets/banner.svg?react";

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
              delay: 0.3,
              defaults: { duration: 1.1, ease: "power2.out" },
            });

            // 🎨 Animación de entrada shapes
            shapesOnly.forEach((element) => {
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
                opacity: 0, // 👈 inicia invisible
                scale: 0.9,
                transformOrigin: "center center",
              });

              entryTl.to(
                element,
                { strokeDashoffset: 0, opacity: 1, scale: 1 }, // 👈 fade in
                "<+=0.04"
              );
            });

            // ✨ Flotante infinito
            entryTl.to(svgEl, {
              y: -5,
              duration: 2.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });

            // 📌 Scroll shapes → movimiento + fade out
            const scrollTl = gsap.timeline({
              scrollTrigger: {
                trigger: scope.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                pinSpacing: false,
                invalidateOnRefresh: true,
              },
            });

            // 🚀 Movimiento + scale
            scrollTl.to(shapesOnly, {
              x: (i) => (i % 2 === 0 ? 1 : -1) * (150 + i * 50),
              y: (i) => -250 - i * 50,
              scale: 0.5,
              ease: "power1.inOut",
              stagger: { each: 0, from: "random" },
            });

            // 🚀 Fade out progresivo
            scrollTl.to(
              shapesOnly,
              {
                opacity: 0,
                ease: "power1.out",
              },
              "<" // 👈 ocurre en paralelo con el movimiento
            );
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
      <section className="h-screen flex items-center justify-center bg-transparent overflow-hidden">
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
          className="md:hidden flex flex-col items-center justify-center h-screen w-full text-center px-6 bg-gradient-to-b from-[#FEF9F2] to-white"
        >
          <img
            alt="logo mobile"
            className="max-w-full h-auto max-h-[250px] object-contain"
            src="/banner.avif"
            loading="lazy"
          />
          <img
            src="/toli-calidad.svg"
            alt="ilustración calidad"
            className="max-w-full h-auto max-h-[180px] object-contain mt-8"
            loading="lazy"
          />
        </div>
      </section>

      <div
        ref={imgContainerRef}
        className="hidden md:flex h-full bg-[#FEF9F2] text-white items-center justify-center"
      >
        <div className="flex items-center gap-4">
          <img
            src="/Mascota.svg"
            alt="toliboy logo"
            className="h-96 w-auto custom:h-41"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
