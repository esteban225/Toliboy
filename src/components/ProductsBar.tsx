import { useEffect } from "react";
import gsap from "gsap";
import Atropos from "atropos/react";
import "atropos/atropos.css";

export default function ProductsBar() {
  const productos = [
    { img: "pasteleria/Brazo_de_Reina_resultado.webp", alt: "Brazo de reina" },
    { img: "pasteleria/02-ChocoRico.webp", alt: "Choco Rico" },
    { img: "panaderia/23-Mogolla.webp", alt: "Mogolla" },
    { img: "panaderia/17-PanTajadoBlanco.webp", alt: "Pan tajado blanco" },
    { img: "industrial/34-BrevaFrasco.webp", alt: "Breva Frasco" },
    { img: "industrial/30-PinaDoypack.webp", alt: "Piña Doypack" },
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
            className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] aspect-[4/3]  bg-[#fdf2e1ff]  overflow-hidden"
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
                className="w-[90%] h-[90%] object-contain pointer-events-none"
                data-atropos-offset="5"
              />
            </div>
          </Atropos>
        ))}
      </div>
    </div>
  );
}
