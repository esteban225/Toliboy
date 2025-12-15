import "../App.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsBar from "../components/ProductsBar";
import RichTextSection from "../components/RichTextSection";
import WaveSection from "../components/WaveSection";
import WaveSectionReverse from "../components/WaveSectionReverse";
import Button from "../components/Button";
import { ArrowRight } from "lucide-react";
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

  return (
    <div className="w-full bg-[#fdf2e1ff]">
      {/* BANNER */}
      <BannerScroll />

      {/* PRODUCTOS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/*<RichTextSection />*/}
        <div className="mt-8 md:mt-12">
          <h1 className=" text-red-700  text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold max-w-3xl mx-auto leading-tight mb-6 md:mb-8 px-2">
            ¿Que se te antoja hoy?
          </h1>
          <ProductsBar />
        </div>
        <div className="mt-8 md:mt-12">
          <Button
            to="/catalogo"
            className="inline-flex items-center gap-2 text-xl sm:text-base shadow-[4px_4px_0_0_#1e40af] hover:shadow-[6px_6px_0_0_#1e40af] group"
          >
            Ver más productos
          </Button>
        </div>
      </div>

      {/* CONOCE NUESTRAS LÍNEAS */}

      <div className=" mx-auto bg-red-700 ">
        <div className="mt-8 md:mt-12">
          <ProductLines />
        </div>
      </div>
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
        <Button
          to="/catalogo"
          className="bg-red-600 text-white border-2 border-[#134289] hover:shadow-lg font-semibold"
        >
          Ver más productos
        </Button>
      </div>

      {/* CONTACTO */}
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
        <Button
          to="/contacto"
          className="bg-red-600 text-white hover:shadow-lg"
        >
          Contáctanos
        </Button>
      </div>
    </div>
  );
}
