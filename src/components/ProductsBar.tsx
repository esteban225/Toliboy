import { useEffect } from "react";
import gsap from "gsap";

export default function ProductsBar() {
  const productos = [
    { img: "ps1.avif", alt: "Brazo de  reina" },
    { img: "ps2.avif", alt: "Choco Rico" },
    { img: "ps4.avif", alt: "Ponqué junior" },
    { img: "ps7.avif", alt: "Mantecada" },
    { img: "ps8.avif", alt: "Choco Rico" },
    { img: "ps9.avif", alt: "Repolla" },
    { img: "ps10.avif", alt: "Tajadas de sabores" },
    { img: "ps12.avif", alt: "Yoyos" },
  ];

  useEffect(() => {
    // Animación infinita de desplazamiento horizontal
    gsap.to(".scroll-track", {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    
    <div className="max-w-7xl mx-auto overflow-hidden mt-10 py-4 relative">
      <div className="flex gap-4 scroll-track">
        {/* duplicamos la lista para efecto infinito */}
        {[...productos, ...productos].map((prod, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[400px] h-[350px] overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={`/${prod.img}`}
              alt={prod.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
    
  );
}
