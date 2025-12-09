import "../App.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import ProductsBar from "../components/ProductsBar";
import RichTextSection from "../components/RichTextSection";
import WaveSection from "../components/WaveSection";
import WaveSectionReverse from "../components/WaveSectionReverse";
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
    <div className="w-full bg-[#FEF9F2]">
      {/* BANNER */}
      <BannerScroll />
      
      {/* PRODUCTOS */}
      <WaveSection topColor="#FEF9F2" bottomColor="#FEF9F2" waveIntensity="medium">
        <div className="max-w-7xl mx-auto">
          {/*<RichTextSection />*/}
          <div className="mt-8 md:mt-12">
            <ProductsBar />
          </div>
          <div className="mt-8 md:mt-12">
            <Link
              to="/catalogo"
              className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full 
                     bg-red-600 text-white font-semibold text-sm sm:text-base
                     transition-all duration-300 ease-out 
                     hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 
                     shadow-[4px_4px_0_0_#1e40af] hover:shadow-[6px_6px_0_0_#1e40af]"
            >
              Ver más productos
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </WaveSection>

      {/* CONOCE NUESTRAS LÍNEAS */}
      <WaveSectionReverse topColor="#FEF9F2" bottomColor="#002E6D" waveIntensity="medium">
        <div className="max-w-6xl mx-auto">
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold py-6 sm:py-8 md:py-15 px-4 sm:px-8">
            <h2>Nuestras Líneas de Productos</h2>
          </div>
          <div className="mt-8 md:mt-12">
            <ProductLines/>
          </div>
        </div>
      </WaveSectionReverse>

      {/* 25 AÑOS */}
      <WaveSection topColor="#002E6D" bottomColor="#FEC601" waveIntensity="medium">
        <div className="anim-card max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center text-white relative z-10">
          <div className="mb-6 md:mb-8">
            <img
              src="/mascota-toliboy.svg"
              alt="Mascota Toliboy"
              className="mx-auto w-20 sm:w-24 md:w-28 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl mx-auto leading-tight mb-6 md:mb-8 px-2">
            Más de 25 años ofreciendo calidad y tradición en panadería y
            pastelería.
          </h2>
          <Link
            to="/nosotros"
            className="inline-block bg-white text-[#002E6D] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold 
                   text-sm sm:text-base transition-all duration-300 
                   hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
          >
            Conoce Nuestra Historia
          </Link>
        </div>
      </WaveSection>

      {/* CONTACTO */}
      <WaveSectionReverse topColor="#FEC601" bottomColor="#FEF9F2" waveIntensity="medium">
        <div className="anim-card max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center relative z-10">
          <div className="mb-6 md:mb-8">
            <img
              src="/contacto-toliboy.svg"
              alt="Contáctanos - Toliboy"
              className="mx-auto w-24 sm:w-28 md:w-32 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002E6D] mb-4">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-lg sm:text-xl text-[#002E6D] mb-6 md:mb-8 max-w-2xl mx-auto">
            Estamos aquí para ayudarte
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-[#002E6D] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold 
                   text-sm sm:text-base transition-all duration-300 
                   hover:bg-blue-900 hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
          >
            Contáctanos Ahora
          </Link>
        </div>
      </WaveSectionReverse>
    </div>
  );
}