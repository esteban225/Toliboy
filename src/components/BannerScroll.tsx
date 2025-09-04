import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import BannerSvg from "../assets/banner.svg?react";

gsap.registerPlugin(ScrollTrigger);

export default function BannerScroll() {
  const scope = useRef<HTMLDivElement | null>(null);
  const imgContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const cleanup = () => {
      gsap.killTweensOf(scope.current);
      gsap.killTweensOf(imgContainerRef.current);
      gsap.killTweensOf(mobileContainerRef.current);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
    cleanup();

    if (!isSmallScreen) {
      const ctx = gsap.context(() => {
        const svgEl = scope.current?.querySelector("svg");
        if (svgEl) {
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

          entryTl.to(svgEl, {
            y: -5,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: scope.current,
              start: "top top",
              end: "+=1000",
              scrub: true,
              pin: true,
            },
          });

          const otherElements = gsap.utils.toArray<SVGElement>(
            svgEl.querySelectorAll(
              "path,rect, circle, ellipse, polygon, polyline, line, image"
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

        if (imgContainerRef.current) {
          const imgElements = gsap.utils.toArray<HTMLImageElement>(
            imgContainerRef.current.querySelectorAll("img")
          );
          const imgTl = gsap.timeline({
            scrollTrigger: {
              trigger: imgContainerRef.current,
              start: "top bottom",
              end: "top center",
              scrub: true,
            },
          });
          imgTl.fromTo(
            imgElements,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.5, ease: "power1.inOut" }
          );
        }
      }, scope);
      return () => ctx.revert();
    } else {
      const ctx = gsap.context(() => {
        if (mobileContainerRef.current) {
          // Selecciona solo los elementos que quieres animar
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
            },
          });
        }
      }, mobileContainerRef);
      return () => ctx.revert();
    }
  }, [isSmallScreen]);

  return (
    <>
      <section className="h-screen flex items-center justify-center bg-transparent overflow-hidden">
        {isSmallScreen ? (
          <div
            ref={mobileContainerRef}
            className="flex flex-col items-center justify-center h-screen w-full text-center px-6 bg-gradient-to-b from-[#FEF9F2] to-white"
          >
            <img
              src="/banner.avif"
              alt="logo mobile"
              className="max-w-full h-auto max-h-[250px] object-contain"
            />
            <img
              src="/toli-calidad.svg"
              alt="ilustración calidad"
              className="max-w-full h-auto max-h-[180px] object-contain mt-8"
            />
          </div>
        ) : (
          <div
            ref={scope}
            className="w-full h-full flex items-center justify-center"
          >
            <BannerSvg className="w-full h-full object-cover" />
          </div>
        )}
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
