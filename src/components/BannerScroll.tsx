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
      // --- Animaciones según pantalla ---
      ScrollTrigger.matchMedia({
        // 📌 Escritorio
        "(min-width: 769px)": () => {
          const svgEl = scope.current?.querySelector("svg");
          if (svgEl) {
            // 🔹 Animación de entrada
            const shapesAndImages = svgEl.querySelectorAll<SVGElement>(
              "path, rect, circle, ellipse, polygon, polyline, line, image"
            );

            const entryTl = gsap.timeline({
              delay: 0.5,
              defaults: { duration: 1.2, ease: "power2.out" },
            });

            shapesAndImages.forEach((element) => {
              if (element.tagName === "image") {
                gsap.set(element, { opacity: 0 });
                entryTl.to(element, { opacity: 1 }, "<+=0.05");
              } else {
                let length = 100;
                try {
                  if (
                    "getTotalLength" in element &&
                    typeof (element as SVGGeometryElement).getTotalLength ===
                      "function"
                  ) {
                    length = (element as SVGGeometryElement).getTotalLength();
                  }
                } catch (e) {
                  console.warn(
                    "Elemento no soporta getTotalLength:",
                    element.tagName
                  );
                }

                gsap.set(element, {
                  strokeDasharray: length,
                  strokeDashoffset: length,
                  opacity: 0,
                  scale: 0.9,
                  transformOrigin: "center center",
                });
                entryTl.to(
                  element,
                  { strokeDashoffset: 0, opacity: 1, scale: 1 },
                  "<+=0.05"
                );
              }
            });

            // 🔹 Animación flotante
            entryTl.to(svgEl, {
              y: -5,
              duration: 2.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });

            // 🔹 Animación de scroll
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

            const otherElements = gsap.utils.toArray<SVGElement>(
              svgEl.querySelectorAll(
                "path, rect, circle, ellipse, polygon, polyline, line, image"
              )
            );

            otherElements.forEach((element, index) => {
              const xOffset = (index % 2 === 0 ? 1 : -1) * (150 + index * 50);
              const yOffset = -250 - index * 50;
              scrollTl.to(
                element,
                {
                  x: xOffset,
                  y: yOffset,
                  scale: 0.5,
                  opacity: 0,
                  ease: "power1.inOut",
                },
                0
              );
            });
          }

          // 🔹 Animación imágenes en escritorio
          if (imgContainerRef.current) {
            const imgElements = gsap.utils.toArray<HTMLImageElement>(
              imgContainerRef.current.querySelectorAll("img")
            );
            gsap.fromTo(
              imgElements,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.5,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: imgContainerRef.current,
                  start: "top bottom",
                  end: "top center",
                  scrub: true,
                  invalidateOnRefresh: true,
                },
              }
            );
          }
        },

        // 📌 Móvil
        "(max-width: 768px)": () => {
          if (mobileContainerRef.current) {
            const elementsToAnimate = gsap.utils.toArray(
              mobileContainerRef.current.querySelectorAll("img, h2, p, a")
            );

            gsap.from(elementsToAnimate, {
              opacity: 0,
              y: 50,
              stagger: 0.2,
              duration: 0.5,
              ease: "power2.out",
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
        <div
          ref={scope}
          className="w-full h-full flex items-center justify-center"
        >
          <BannerSvg className="w-full h-full object-cover" />
        </div>

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
          />
        </div>
      </section>

      <div
        ref={imgContainerRef}
        className="hidden md:flex h-screen bg-[#FEF9F2] text-white items-center justify-center"
      >
        <div className="flex items-center gap-4">
          <img
            src="/Mascota.svg"
            alt="toliboy logo"
            className="h-96 w-auto custom:h-41"
          />
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/toli-calidad.svg"
            alt="toliboy calidad"
            className="h-36 w-auto custom:h-41"
          />
        </div>
      </div>
    </>
  );
}
