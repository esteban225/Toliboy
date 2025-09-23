
export type Category = "pasteleria" | "panaderia" | "industrial";

export interface Product {
  name: string;
  weight: string;
  image: string;
  category: Category;
  color: string;
  shortDescription: string;
  features: string[];
}

export const products: Product[] = [
  {
    name: "Brazo de Reina",
    weight: "75g",
    image: "/pasteleria/Brazo_de_Reina_resultado.webp",
    category: "pasteleria",
    color: "#e55464",
    shortDescription: "Bizcocho suave relleno de dulce de leche, ideal para acompañar el café.",
    features: [
      "Relleno de arequipe",
      "Textura esponjosa",
      "Presentación individual",
      "Sin conservantes artificiales"
    ]
  },
  {
    name: "ChocoRico",
    weight: "70g",
    image: "/pasteleria/ChocoRicoN_resultado.webp",
    category: "pasteleria",
    color: "#fd3e34",
    shortDescription: "Delicioso bizcocho de chocolate, perfecto para los amantes del cacao.",
    features: [
      "Sabor intenso a chocolate",
      "Presentación individual",
      "Ideal para meriendas",
      "Sin conservantes artificiales"
    ]
  },
  {
    name: "Domo Galletas",
    weight: "600g",
    image: "/pasteleria/Domo_Galletas_resultado.webp",
    category: "pasteleria",
    color: "#3577b1",
    shortDescription: "Suave bizcocho cubierto con galletas trituradas para un toque crujiente y único.",
    features: [
      "Decorado con galleta crocante",
      "Textura esponjosa",
      "Ideal para postres rápidos",
      "Presentación atractiva"
    ]
  },
  {
    name: "Hojaldre",
    weight: "60g",
    image: "/pasteleria/hojaldre_resultado.webp",
    category: "pasteleria",
    color: "#bf4f00",
    shortDescription: "Delicado hojaldre con capas ligeras y doradas, perfecto para acompañar con café o té.",
    features: [
      "Capas crujientes",
      "Mantequilla natural",
      "Ideal para la tarde",
      "Sabor artesanal"
    ]
  },
  {
    name: "Ponqué Junior",
    weight: "215g",
    image: "/pasteleria/junior_resultado.webp",
    category: "pasteleria",
    color: "#79ace4",
    shortDescription: "Pequeño ponqué de vainilla con textura suave y sabor casero.",
    features: [
      "Sabor a vainilla",
      "Textura húmeda",
      "Porción individual",
      "Perfecto para loncheras"
    ]
  },
  {
    name: "Lonchero de Queso",
    weight: "70g",
    image: "/pasteleria/Lonchero_de_Queso_resultado.webp",
    category: "pasteleria",
    color: "#ffb243",
    shortDescription: "Bizcocho de queso con un sabor balanceado entre lo dulce y salado.",
    features: [
      "Sabor auténtico a queso",
      "Textura suave",
      "Ideal para la merienda",
      "Porción lista para llevar"
    ]
  },
  {
    name: "Ponqué Lonchero",
    weight: "60g",
    image: "/pasteleria/lonchero_resultado.webp",
    category: "pasteleria",
    color: "#fd4338",
    shortDescription: "Ponqué de tamaño práctico, perfecto para acompañar con bebidas calientes.",
    features: [
      "Sabor tradicional",
      "Empaque individual",
      "Ideal para el colegio o trabajo",
      "Textura húmeda"
    ]
  },
  {
    name: "Mantecada Artesanal",
    weight: "250g",
    image: "/pasteleria/Mantecada_tradicional_resultado.webp",
    category: "pasteleria",
    color: "#742c1c",
    shortDescription: "Clásica mantecada con un sabor dulce y suave.",
    features: [
      "Sabor mantecoso",
      "Textura esponjosa",
      "Receta tradicional",
      "Porción perfecta"
    ]
  },
  {
    name: "Mantecada",
    weight: "560g",
    image: "/pasteleria/mantecadanueva_resultado.webp",
    category: "pasteleria",
    color: "#f4323f",
    shortDescription: "Versión renovada de la mantecada tradicional con mayor suavidad.",
    features: [
      "Receta mejorada",
      "Textura más esponjosa",
      "Empaque moderno",
      "Porción generosa"
    ]
  },
  {
    name: "Mini ChocoRico",
    weight: "40g",
    image: "/pasteleria/Mini_ChocoRico_resultado.webp",
    category: "pasteleria",
    color: "#7fc1d3",
    shortDescription: "Versión pequeña del clásico ChocoRico, ideal para los niños.",
    features: [
      "Sabor intenso a chocolate",
      "Presentación mini",
      "Perfecto para loncheras",
      "Sin colorantes artificiales"
    ]
  },
  {
    name: "Repolla",
    weight: "65g",
    image: "/pasteleria/Repolla_resultado.webp",
    category: "pasteleria",
    color: "#f99d39",
    shortDescription: "Postre de masa suave relleno de crema pastelera.",
    features: [
      "Relleno cremoso",
      "Textura ligera",
      "Ideal para postres",
      "Presentación atractiva"
    ]
  },
  {
    name: "Tajadas de Sabores",
    weight: "60g",
    image: "/pasteleria/Tajadas_de_sabores_resultado.webp",
    category: "pasteleria",
    color: "#fe6b0b",
    shortDescription: "Rebanadas surtidas de ponqué con diferentes sabores.",
    features: [
      "Variedad de sabores",
      "Porciones individuales",
      "Textura suave",
      "Perfecto para compartir"
    ]
  },
  {
    name: "Torta de Queso",
    weight: "1000g",
    image: "/pasteleria/Torta_de_queso_resultado.webp",
    category: "pasteleria",
    color: "#323330",
    shortDescription: "Torta cremosa con sabor a queso, ideal como postre.",
    features: [
      "Sabor auténtico a queso",
      "Textura cremosa",
      "Presentación familiar o individual",
      "Ideal para celebraciones"
    ]
  },
  {
    name: "Torta Decorada",
    weight: "1040g",
    image: "/pasteleria/torta_decorada_resultado.webp",
    category: "pasteleria",
    color: "#d18bca",
    shortDescription: "Torta personalizada con decoraciones coloridas.",
    features: [
      "Decoración personalizada",
      "Sabor esponjoso",
      "Ideal para cumpleaños",
      "Variedad de diseños"
    ]
  },
  {
    name: "Torta Familiar",
    weight: "1000g",
    image: "/pasteleria/tortafamiliar123_resultado.webp",
    category: "pasteleria",
    color: "#2297d3",
    shortDescription: "Torta grande para compartir en familia.",
    features: [
      "Tamaño familiar",
      "Sabor casero",
      "Textura húmeda",
      "Ideal para celebraciones"
    ]
  },
  {
    name: "Yoyos",
    weight: "300g",
    image: "/pasteleria/Yoyos_resultado.webp",
    category: "pasteleria",
    color: "#543c82",
    shortDescription: "Galletas rellenas de crema con cobertura azucarada.",
    features: [
      "Sabor dulce y cremoso",
      "Ideal para niños",
      "Presentación divertida",
      "Empaque práctico"
    ]
  },
  {
    name: "Mogolla Miel",
    weight: "200g",
    image: "/panaderia/mogolla_resultado.webp",
    category: "panaderia",
    color: "#ffb500",
    shortDescription: "Pan redondo y suave con sabor tradicional.",
    features: [
      "Receta artesanal",
      "Textura esponjosa",
      "Ideal para desayunos",
      "Sabor clásico colombiano"
    ]
  },
  {
    name: "Pan aliñado",
    weight: "190g",
    image: "/panaderia/Pan_alinado_100_resultado.webp",
    category: "panaderia",
    color: "#ffb500",
    shortDescription: "Pan pequeño aliñado, ideal para acompañar comidas.",
    features: [
      "Textura suave",
      "Sabor ligeramente salado",
      "Tamaño práctico",
      "Listo para sándwiches"
    ]
  },
  {
    name: "Pan Aliñado",
    weight: "200g",
    image: "/panaderia/Pan_Alinado_resultado.webp",
    category: "panaderia",
    color: "#0055b8",
    shortDescription: "Clásico pan aliñado de mayor tamaño.",
    features: [
      "Receta tradicional",
      "Textura suave y esponjosa",
      "Ideal para acompañar sopas",
      "Formato familiar"
    ]
  },
  {
    name: "Pan de Anís",
    weight: "170g",
    image: "/panaderia/Pan_Anis_resultado.webp",
    category: "panaderia",
    color: "#ec7700",
    shortDescription: "Pan aromatizado con semillas de anís.",
    features: [
      "Sabor y aroma característico",
      "Textura ligera",
      "Ideal para café o chocolate",
      "Receta tradicional"
    ]
  },
  {
    name: "Pan de Hamburguesa",
    weight: "360g",
    image: "/panaderia/Pan_Burger_resultado.webp",
    category: "panaderia",
    color: "#213d2d",
    shortDescription: "Pan suave ideal para hamburguesas caseras.",
    features: [
      "Textura esponjosa",
      "Tamaño perfecto",
      "Con o sin ajonjolí",
      "Ideal para asados"
    ]
  },
  {
    name: "Pan Tajado Blanco",
    weight: "280g",
    image: "/panaderia/panchiquito_resultado.webp",
    category: "panaderia",
    color: "#1b6eb6",
    shortDescription: "Pan pequeño con sabor casero.",
    features: [
      "Porciones individuales",
      "Textura suave",
      "Ideal para niños",
      "Sabor tradicional"
    ]
  },
  {
    name: "Panecitos",
    weight: "170g",
    image: "/panaderia/Panecitos_resultado.webp",
    category: "panaderia",
    color: "#e80029",
    shortDescription: "Panecillos ideales para acompañar cualquier comida.",
    features: [
      "Porciones pequeñas",
      "Fáciles de compartir",
      "Sabor suave",
      "Perfectos para desayunos"
    ]
  },
  {
    name: "Pan Sandwich",
    weight: "280g",
    image: "/panaderia/pansandwi_resultado.webp",
    category: "panaderia",
    color: "#3C8DFF",
    shortDescription: "Pan tajado suave, ideal para sándwiches.",
    features: [
      "Rebanadas uniformes",
      "Textura esponjosa",
      "Versátil para recetas",
      "Sabor neutro"
    ]
  },
  {
    name: "Pan Tajado Integral",
    weight: "450g",
    image: "/panaderia/Pantajadoint_resultado.webp",
    category: "panaderia",
    color: "#a45d28",
    shortDescription: "Pan tajado elaborado con harina integral.",
    features: [
      "Fuente de fibra",
      "Sabor natural",
      "Rebanadas perfectas",
      "Opción más saludable"
    ]
  },
  {
    name: "Pan Tajado Mantequilla",
    weight: "450g",
    image: "/panaderia/Pantajadomant_resultado.webp",
    category: "panaderia",
    color: "#e18c15",
    shortDescription: "Pan tajado con un toque de mantequilla para más sabor.",
    features: [
      "Sabor mantecoso",
      "Rebanadas suaves",
      "Ideal para tostadas",
      "Versátil en recetas"
    ]
  },
  {
    name: "Pan Tajado Blanco",
    weight: "450g",
    image: "/panaderia/Pantajadov3_resultado.webp",
    category: "panaderia",
    color: "#1b6eb6",
    shortDescription: "Clásico pan tajado blanco de textura esponjosa.",
    features: [
      "Rebanadas suaves",
      "Sabor neutro",
      "Versátil para sándwiches",
      "Receta tradicional"
    ]
  },
  {
    name: "Tostadas",
    weight: "110g",
    image: "/panaderia/Tostadas_resultado.webp",
    category: "panaderia",
    color: "#f34b0a",
    shortDescription: "Crujientes tostadas listas para disfrutar con acompañantes.",
    features: [
      "Textura crocante",
      "Ligeras y prácticas",
      "Empaque seguro",
      "Versátiles para cualquier comida"
    ]
  },
  {
    name: "Aceite Desmoldante",
    weight: "1-20Ltr",
    image: "/industrial/p1.webp",
    category: "industrial",
    color: "#e80029",
    shortDescription: "Aceite vegetal multipropósito, ideal para freír y cocinar.",
    features: [
      "Libre de grasas trans",
      "Versátil en la cocina",
      "Presentación de 1 litro",
      "Aporta sabor neutro"
    ]
  },
  {
    name: "Breva en Almíbar",
    weight: "580g",
    image: "/industrial/p1.webp",
    category: "industrial",
    color: "#b3ce7d",
    shortDescription: "Aceite vegetal multipropósito, ideal para freír y cocinar.",
    features: [
      "Libre de grasas trans",
      "Versátil en la cocina",
      "Presentación de 1 litro",
      "Aporta sabor neutro"
    ]
  },
  {
    name: "Breva en Almíbar Doypack",
    weight: "500g",
    image: "/industrial/p1.webp",
    category: "industrial",
    color: "#b3ce7d",
    shortDescription: "Aceite vegetal multipropósito, ideal para freír y cocinar.",
    features: [
      "Libre de grasas trans",
      "Versátil en la cocina",
      "Presentación de 1 litro",
      "Aporta sabor neutro"
    ]
  },
  {
    name: "Piña en Almíbar Doypack",
    weight: "500g",
    image: "/industrial/p1.webp",
    category: "industrial",
    color: "#e7aa33",
    shortDescription: "Aceite vegetal multipropósito, ideal para freír y cocinar.",
    features: [
      "Libre de grasas trans",
      "Versátil en la cocina",
      "Presentación de 1 litro",
      "Aporta sabor neutro"
    ]
  },
  {
    name: "Breva en Almíbar Cojín",
    weight: "1000g",
    image: "/industrial/p1.webp",
    category: "industrial",
    color: "#0f3b34",
    shortDescription: "Aceite vegetal multipropósito, ideal para freír y cocinar.",
    features: [
      "Libre de grasas trans",
      "Versátil en la cocina",
      "Presentación de 1 litro",
      "Aporta sabor neutro"
    ]
  },
  {
    name: "Piña en Almíbar Cojín",
    weight: "500g",
    image: "/industrial/p1.webp",
    category: "industrial",
    color: "#0f3b34",
    shortDescription: "Aceite vegetal multipropósito, ideal para freír y cocinar.",
    features: [
      "Libre de grasas trans",
      "Versátil en la cocina",
      "Presentación de 1 litro",
      "Aporta sabor neutro"
    ]
  }
];
