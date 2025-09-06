import { useEffect } from "react";
import gsap from "gsap";
import Atropos from "atropos/react";
import "atropos/atropos.css";

export default function ProductsBar() {
  const productos = [
    { img: "pasteleria/ps1.webp", alt: "Brazo de reina" },
    { img: "pasteleria/ps2.webp", alt: "Choco Rico" },
    { img: "pasteleria/ps3.webp", alt: "Choco Rico" },
    { img: "pasteleria/ps4.webp", alt: "Ponqué junior" },
    { img: "pasteleria/ps5.webp", alt: "Ponqué junior" },
    { img: "pasteleria/ps6.webp", alt: "Ponqué junior" },
    { img: "pasteleria/ps7.webp", alt: "Mantecada" },
    { img: "pasteleria/ps8.webp", alt: "Choco Rico 2" },
    { img: "pasteleria/ps9.webp", alt: "Repolla" },
    { img: "pasteleria/ps10.webp", alt: "Tajadas de sabores" },
    { img: "pasteleria/ps11.webp", alt: "Tajadas de sabores" },
    { img: "pasteleria/ps12.webp", alt: "Yoyos" },
  ];

  // Scroll infinito lateral
  useEffect(() => {
    gsap.to(".scroll-track", {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  // Función de vibración
  const vibrar = (el: HTMLElement) => {
    gsap.fromTo(
      el,
      { xPercent: 0 },
      {
        xPercent: 2,
        duration: 0.05,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto overflow-hidden mt-10 py-4 relative">
      <div className="flex gap-6 scroll-track">
        {[...productos, ...productos].map((prod, i) => (
          <Atropos
            key={i}
            className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] aspect-[4/3] rounded-xl bg-white shadow-xl overflow-hidden border border-gray-200"
            activeOffset={40}
            shadow={false}
            highlight={false}
            rotateTouch={true}
            rotateXMax={15}
            rotateYMax={15}
            duration={400}
          >
            <div
              className="relative w-full h-full"
              onMouseEnter={(e) => vibrar(e.currentTarget)} // hover en desktop
              onTouchStart={(e) => vibrar(e.currentTarget)} // tap en móvil
            >
              <img
                src={`/${prod.img}`}
                alt={prod.alt}
                loading="lazy"
                className="w-full h-full object-cover pointer-events-none"
                data-atropos-offset="5"
              />
            </div>
          </Atropos>
        ))}
      </div>
    </div>
  );
}
