import "../App.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Banner from "../components/BannerScroll";
import ProductsBar from "../components/ProductsBar";
import ProductsLine from "../components/ProductsLine";

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
      <Banner />
      {/* PRODUCTOS */}
      <div className="w-full py-16 text-center">
        <div className="bg-[#002E6D] text-white text-3xl font-bold py-15">
          Conoce nuestros productos
        </div>
        <ProductsBar />
      </div>

      {/* CONOCE NUESTRAS LÍNEAS */}
      <section className="w-full py-16 text-center">
        <div className="bg-[#002E6D] text-white text-3xl font-bold py-15">
          Conoce nuestras líneas
        </div>
        <ProductsLine/>
      </section>

      {/* 25 AÑOS */}
      <section className="anim-card w-full bg-[#E30613] py-16 text-center text-white relative">
        <img
          src="/mascota-toliboy.svg"
          alt="Mascota"
          className="mx-auto w-28 mb-4"
        />
        <h2 className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto">
          Más de 25 años ofreciendo calidad y tradición en panadería y
          pastelería.
        </h2>
        <Link
          to="/nosotros"
          className="mt-6 inline-block bg-[#002E6D] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 transition"
        >
          Más Información
        </Link>
      </section>

      {/* CONTACTO */}
      <section className="anim-card w-full bg-[#FEC601] py-16 text-center">
        <img
          src="/contacto-toliboy.svg"
          alt="Contáctanos"
          className="mx-auto w-32 mb-4"
        />
        <h2 className="text-2xl font-bold text-[#002E6D]">Contáctanos</h2>
      </section>
    </div>
  );
}
