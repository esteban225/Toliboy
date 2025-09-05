import { useEffect } from "react";
import gsap from "gsap";
import Atropos from "atropos/react";
import "atropos/atropos.css";

export default function ProductsBar() {
  const productos = [
    {
      img: "pasteleria/ps1.avif",
      alt: "Brazo de reina",
      desc: "Bizcocho suave con crema.",
    },
    {
      img: "pasteleria/ps2.avif",
      alt: "Choco Rico",
      desc: "Delicioso pastel de chocolate.",
    },
    {
      img: "pasteleria/ps4.avif",
      alt: "Ponqué junior",
      desc: "Esponjoso ponqué tradicional.",
    },
    {
      img: "pasteleria/ps7.avif",
      alt: "Mantecada",
      desc: "Clásica mantecada casera.",
    },
    {
      img: "pasteleria/ps8.avif",
      alt: "Choco Rico",
      desc: "Otra versión irresistible.",
    },
    {
      img: "pasteleria/ps9.avif",
      alt: "Repolla",
      desc: "Relleno de crema pastelera.",
    },
    {
      img: "pasteleria/ps10.avif",
      alt: "Tajadas de sabores",
      desc: "Variedad de sabores únicos.",
    },
    {
      img: "pasteleria/ps12.avif",
      alt: "Yoyos",
      desc: "Galletas rellenas de dulce.",
    },
  ];

  useEffect(() => {
    gsap.to(".scroll-track", {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

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
            easing="ease-out"
          >
            <div className="relative w-full h-full flex flex-col">
              <img
                src={`/${prod.img}`}
                alt={prod.alt}
                loading="lazy"
                className="w-full h-2/3 object-cover"
                data-atropos-offset="5"
              />
              <div
                className="p-3 flex flex-col justify-between flex-grow text-center"
                data-atropos-offset="8"
              >
                <h3 className="text-lg font-semibold">{prod.alt}</h3>
                <p className="text-sm text-gray-600">{prod.desc}</p>
              </div>
            </div>
          </Atropos>
        ))}
      </div>
    </div>
  );
}