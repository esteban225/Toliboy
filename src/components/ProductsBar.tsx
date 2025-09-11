import { useEffect } from "react";
import gsap from "gsap";
import Atropos from "atropos/react";
import "atropos/atropos.css";

export default function ProductsBar() {
  const productos = [
    { img: "pasteleria/Brazo_de_Reina_resultado.webp", alt: "Brazo de reina" },
    { img: "pasteleria/ChocoRicoN_resultado.webp", alt: "Choco Rico" },
    { img: "panaderia/mogolla_resultado.webp", alt: "Mogolla" },
    { img: "panaderia/Pantajadov3_resultado.webp", alt: "Pan tajado blanco" },
    { img: "industrial/p1.webp", alt: "Ponqué junior" },
    { img: "industrial/p1.webp", alt: "Mantecada" },
  ];

  // Scroll infinito lateral
  useEffect(() => {
    gsap.to(".scroll-track", {
      xPercent: -25, // antes estaba en -50, así se ven más productos
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
        {[...productos, ...productos, ...productos].map((prod, i) => (
          <Atropos
            key={i}
            className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] aspect-[4/3]  bg-[#FEF9F2]  overflow-hidden"
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
