import "../App.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsBar from "../components/ProductsBar";
import Button from "../components/Button";
import BannerScroll from "../components/BannerScroll";
import ProductLines from "../components/ProductLines";

// import Banner from "/banner.svg"; // 👈 importa tu SVG

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de cards y secciones
      gsap.utils.toArray(".anim-card").forEach((card) => {
        gsap.from(card as gsap.TweenTarget, {
          scrollTrigger: {
            trigger: card as gsap.DOMTarget,
            start: "top 85%",
          },
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power2.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const wavePathTop =
    "M0,40 Q180,-20 360,40 T720,40 T1080,40 T1440,40 L1440,0 L0,0 Z";

  const wavePathBottom =
    "M0,80 Q180,120 360,80 T720,80 T1080,80 T1440,80 L1440,120 L0,120 Z";

  return (
    <div className="w-full bg-[#fdf2e1ff]">
      {/* BANNER */}
      <BannerScroll />

      {/* PRODUCTOS */}
      <div className="max-w-full mx-auto  text-center">
        {/*<RichTextSection />*/}
        <div className="mt-8 md:mt-12">
          <h1 className=" text-red-700  text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold max-w-3xl mx-auto leading-tight mb-6 md:mb-8 px-2">
            ¿Que se te antoja hoy?
          </h1>
          <ProductsBar />
        </div>
        <div className="mt-8 md:mt-12 hidden md:flex justify-center">
          <Button to="/catalogo" className="font-bold text-sm lg:text-base">
            Ver más productos
          </Button>
        </div>
      </div>

      {/* CONOCE NUESTRAS LÍNEAS */}

      {/* Onda superior */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[120px] block"
        style={{ marginTop: "-2px" }}
      >
        <path d={wavePathBottom} fill="oklch(50.5% 0.213 27.518)" />
      </svg>
      <div className=" mx-auto bg-red-600 ">
        <div className="">
          <ProductLines />
        </div>
      </div>

      {/* Onda inferior */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[120px] block"
        style={{ marginBottom: "-2px" }}
      >
        <path d={wavePathTop} fill="oklch(50.5% 0.213 27.518)" />
      </svg>
      {/* 25 AÑOS */}
      <div className="anim-card max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center text-white relative z-10">
        <div className="mb-6 md:mb-8">
          <img
            src="/mascota-toliboy.svg"
            alt="Mascota Toliboy"
            className="mx-auto w-20 sm:w-24 md:w-28 transition-transform duration-300 hover:scale-110"
          />
        </div>
        <h2 className=" text-red-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold max-w-3xl mx-auto leading-tight mb-6 md:mb-8 px-2">
          Más de 30 años ofreciendo calidad y tradición en panadería y
          pastelería.
        </h2>
        <div className="mt-8 md:mt-12 hidden md:flex justify-center">
          <Button to="/catalogo" className="font-bold text-sm lg:text-base">
            Ver más productos
          </Button>
        </div>
      </div>

      {/* CONTACTO */}
      {/* Onda superior */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[120px] block"
        style={{ marginTop: "-2px" }}
      >
        <path d={wavePathBottom} fill="oklch(85.2% 0.199 91.936)" />
      </svg>
      <div className="anim-card  mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center relative z-10 bg-yellow-400">
        <div className="mb-6 md:mb-8">
          <img
            src="/contacto-toliboy.svg"
            alt="Contáctanos - Toliboy"
            className="mx-auto w-24 sm:w-28 md:w-32 transition-transform duration-300 hover:scale-110"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl py-4 font-extrabold max-w-3xl mx-auto text-blue-900 mb-4">
          ¿Tienes alguna pregunta?
        </h2>
        <div className="mt-8 md:mt-12 hidden md:flex justify-center">
          <Button to="/contacto" className="font-bold text-sm lg:text-base">
            Contactanos
          </Button>
        </div>
      </div>
      {/* Onda inferior */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[120px] block"
        style={{ marginBottom: "-2px" }}
      >
        <path d={wavePathTop} fill="oklch(85.2% 0.199 91.936)" />
      </svg>
    </div>
  );
}
