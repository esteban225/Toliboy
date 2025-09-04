interface Card {
  img: string;
  title: string;
  subtitle: string;
  link: string;
}

export default function ProductsLine() {
  const cards: Card[] = [
    {
      img: "/panaderia&pasteleria.avif",
      title: "Panadería y Pastelería",
      subtitle: "Ingredientes de calidad",
      link: "/panaderia",
    },
    {
      img: "/panaderia&pasteleria.avif",
      title: "Línea Pastelería",
      subtitle: "Listos para preparar",
      link: "/panaderia",
    },
    {
      img: "/lineaindustrial.avif",
      title: "Línea Industrial",
      subtitle: "Protección para tu negocio",
      link: "/industrial",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-10 p-4 w-full">
      {cards.map((card, i) => (
        <a
          key={i}
          href={card.link}
          className="anim-card flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm w-full max-w-sm sm:max-w-xl md:flex-row md:max-w-4xl 
          transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl
          opacity-0 animate-fadeInUp"
        >
          <img
            className="object-cover w-full h-64 rounded-t-lg md:h-64 md:w-80 md:rounded-none md:rounded-l-lg"
            src={card.img}
            alt={card.title}
            loading="lazy"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
              {card.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700">{card.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
