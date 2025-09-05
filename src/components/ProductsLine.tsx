import { Link } from "react-router-dom";

interface Card {
  img: string;
  title: string;
  subtitle: string;
  link: string;
}

export default function ProductsLine() {
  const cards: Card[] = [
    {
      img: "/panaderia&pasteleria.webp",
      title: "Panadería y Pastelería",
      subtitle: "Ingredientes de calidad para resultados excepcionales",
      link: "/panaderia",
    },
    {
      img: "/panaderia&pasteleria.webp",
      title: "Línea Pastelería",
      subtitle: "Preparados listos para usar y ahorrar tiempo",
      link: "/pasteleria",
    },
    {
      img: "/panaderia&pasteleria.webp",
      title: "Línea Industrial",
      subtitle: "Soluciones profesionales para grandes producciones",
      link: "/industrial",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-12 p-6 w-full max-w-6xl mx-auto">
      <p className="text-gray-600 text-lg mb-12 text-center max-w-2xl">
        Descubre nuestra variedad de soluciones para cada necesidad
      </p>
      
      <div className="flex flex-col gap-16 w-full">
        {cards.map((card, i) => (
          <Link
            key={i}
            to={card.link}
            className={`group flex flex-col md:flex-row items-center bg-white rounded-2xl w-full 
            transform transition-all duration-500 ease-out hover:shadow-2xl opacity-0 animate-fadeInUp
            ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="relative overflow-hidden h-72 w-full md:w-1/2">
              <img
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                src={card.img}
                alt={card.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="flex flex-col justify-center p-8 md:p-12 w-full md:w-1/2">
              <div className="mb-2 text-sm font-semibold text-blue-600 uppercase tracking-wider">Línea de Productos</div>
              <h3 className="mb-4 text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              <p className="mb-6 text-gray-600 leading-relaxed">{card.subtitle}</p>
              <span className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                Descubrir productos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}