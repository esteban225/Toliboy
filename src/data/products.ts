
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
    shortDescription: "Soy un bizcocho suave con relleno de crema y un toque de azúcar que alegra cualquier momento del día.",
    features: [
      "Sabor dulce y equilibrado",
      "Textura suave y esponjosa",
      "Puro sabor artesanal"
    ]
  },
  {
    name: "ChocoRico",
    weight: "70g",
    image: "/pasteleria/02-ChocoRico.webp",
    category: "pasteleria",
    color: "#fd3e34",
    shortDescription: "Soy un ponqué suave cubierto con una capa de chocolate que conquista a grandes y chicos. Estoy hecho para esos momentos en los que un dulce detalle lo cambia todo.",
    features: [
      "Sabor intenso y auténtico a chocolate",
      "Textura suave y esponjosa",
      "Ideal para tus meriendas o antojos"
    ]
  },
  {
    name: "Galletas",
    weight: "600g",
    image: "/pasteleria/13-DomoGalletas.webp",
    category: "pasteleria",
    color: "#3577b1",
    shortDescription: "Soy una galleta crujiente y doradita, con ese sabor casero que te hace querer otra (y otra más). Acompaño tus antojos y ese cafecito de la tarde con el toque perfecto de dulzura.",
    features: [
      "Textura crocante y sabor irresistible",
      "Horneadas con dedicación artesanal",
      "Tan ricas que siempre se acaban rápido"
    ]
  },
  {
    name: "Hojaldre",
    weight: "60g",
    image: "/pasteleria/09-Hojaldre.webp",
    category: "pasteleria",
    color: "#bf4f00",
    shortDescription: "Soy un hojaldre de capas doradas, con un toque de arequipe cremoso que conquista sin empalagar. Perfecto para acompañar un café, una charla o simplemente darte un gusto en cualquier momento del día.",
    features: [
      "Con sabor y tradición",
      "Un equilibrio perfecto entre crujiente y lo cremoso",
    ]
  },
  {
    name: "Ponqué Junior",
    weight: "215g",
    image: "/pasteleria/06-Junior.webp",
    category: "pasteleria",
    color: "#79ace4",
    shortDescription: "Soy un ponqué suave y esponjoso, con ese sabor casero que nunca pasa de moda. Estoy aquí para alegrar tus momentos favoritos y acompañarte donde vayas.",
    features: [
      "Textura húmeda y ligera que se disfruta hasta el final.",
      "Dulzura equilibrada, sin empalagar.",
      "Hecho con amor para disfrutar a cualquier hora."
    ]
  },
  {
    name: "Lonchero de Queso",
    weight: "70g",
    image: "/pasteleria/08-LoncheroQueso.webp",
    category: "pasteleria",
    color: "#ffb243",
    shortDescription: "Soy un ponqué suave , con el verdadero sabor a queso que conquista cualquier paladar. Listopara acompañarte a cualquier hora del día.",
    features: [
      "Sabor auténtico a queso.",
      "Textura suave y ligera que se disfruta hasta el final.",
      "Porción lista para llevar y disfrutar donde quieras."
    ]
  },
  {
    name: "Ponqué Lonchero",
    weight: "60g",
    image: "/pasteleria/05-Lonchero.webp",
    category: "pasteleria",
    color: "#fd4338",
    shortDescription: "Soy un ponqué de vainilla, suave y delicioso, listo para acompañarte en cualquier aventura del día. Mi tamaño práctico me hace perfecto para disfrutar con tu bebida favorita o llevarme a donde quieras.",
    features: [
      "Sabor tradicional que nunca falla",
      "Textura húmeda y suave que se disfruta con cada mordida.",
      "Cada bocado que te deja con ganas de más."
    ]
  },
  {
    name: "Mantecada Artesanal",
    weight: "250g",
    image: "/pasteleria/15-MantecadaTradicional.webp",
    category: "pasteleria",
    color: "#742c1c",
    shortDescription: "Soy una mantecada con sabor casero y suave, hecha para alegrar tus momentos y compartir con quienes más quieres.",
    features: [
      "Textura esponjosa que se siente ligera y delicada.",
      "Sabor dulce que invita a compartir.",
      "Receta tradicional que mantiene el encanto de siempre."
    ]
  },
  {
    name: "Mantecada",
    weight: "560g",
    image: "/pasteleria/14-Mantecada.webp",
    category: "pasteleria",
    color: "#f4323f",
    shortDescription: "Soy una mantecada dulce y suave, hecha con cariño para endulzar tus momentos y compartir sonrisas. Ideal para disfrutar con amigos, familia o simplemente para darte un gustito en cualquier momento del día.",
    features: [
      "Textura esponjosa que se disfruta en cada mordida.",
      "Porción generosa que alcanza para compartir .",
      "Lista para disfrutar con quien quieras."
    ]
  },
  {
    name: "Mini ChocoRico",
    weight: "40g",
    image: "/pasteleria/07-MiniChocoRico.webp",
    category: "pasteleria",
    color: "#7fc1d3",
    shortDescription: "Soy un mini ponqué suave y cubierto de chocolate, listo para darle un toque dulce a la merienda. Pequeño en tamaño, grande en sabor.",
    features: [
      "Chocolate intenso que alegra en cada mordida.",
      "Ideal para loncheras o un antojo rápido.",
      "Fácil de disfrutar."
    ]
  },
  {
    name: "Repolla",
    weight: "65g",
    image: "/pasteleria/03-Repolla.webp",
    category: "pasteleria",
    color: "#f99d39",
    shortDescription: "Soy una mezcla entre sal y dulce, por fuera blandita y por dentro tengo arequipe. Hecha para alegrar tus meriendas y esos momentos que merecen un gustito especial.",
    features: [
      "El gustico que alegra tu día sin pedir permiso.",
      "Perfecta para postres, meriendas o un antojo en cualquier momento.",
      "Una presentación que grita: ¡pruébame ya!."
    ]
  },
  {
    name: "Tajadas de Sabores",
    weight: "60g",
    image: "/pasteleria/04-Tajada.webp",
    category: "pasteleria",
    color: "#fe6b0b",
    shortDescription: "Soy una tajada de ponqué suave y esponjosa que se roba un pedacito de tu día. Con mis diferentes sabores, siempre tengo algo para antojarte… sin importar la hora.",
    features: [
      "Un aroma suave que despierta antojo.",
      "Sabores que encantan tu día a día.",
      "Hechas con amor, para disfrutar sin culpa."
    ]
  },
  {
    name: "Torta de Queso",
    weight: "1000g",
    image: "/pasteleria/12-TortaDeQueso.webp",
    category: "pasteleria",
    color: "#323330",
    shortDescription: "Soy la torta que no puede faltar en casa. Suavecita, con ese sabor a queso que todos aman y el toque justo para acompañar cualquier momento solo/a o con tu familia.",
    features: [
      "El sabor clásico que nunca pasa de moda.",
      "Un solo pedacito nunca es suficiente.",
      "Porciones que conservan el equilibrio perfecto."
    ]
  },
  {
    name: "Torta Decorada",
    weight: "1040g",
    image: "/pasteleria/16-TortaDecorada.webp",
    category: "pasteleria",
    color: "#d18bca",
    shortDescription: "Soy la torta que llega para celebrar contigo. Esponjosa, colorida y con ese toque dulce que convierte cualquier día en un momento especial.",
    features: [
      "Me adapto a cada celebración con mi variedad de diseños.",
      "Decoraciones personalizadas hechas con amor y llenas de vida.",
      "Sabor suave y esponjoso que conquista en cada bocado."
    ]
  },
  {
    name: "Torta Familiar",
    weight: "1000g",
    image: "/pasteleria/11-TortaFamiliar.webp",
    category: "pasteleria",
    color: "#2297d3",
    shortDescription: "Soy esa torta que reúne a todos en la mesa. Suave, húmeda y con sabor casero, nací para acompañar risas, historias y momentos que se disfrutan en familia.",
    features: [
      "Sabor auténtico que se siente como hecho en casa.",
      "Textura suave y húmeda que encanta a todos.",
      "Perfecta para compartir en reuniones y celebraciones."
    ]
  },
  {
    name: "Yoyos",
    weight: "300g",
    image: "/pasteleria/10-Yoyo.webp",
    category: "pasteleria",
    color: "#543c82",
    shortDescription: "Somos dos esponjosos discos cubiertos de azúcar que guardan un relleno cremoso irresistible. Cada mordisco te devuelve al sabor de tu infancia.",
    features: [
      "El favorito de siempre.",
      "Ideal para niños (y para los que nunca dejaron de serlo).",
      "Presentación divertida y práctica para llevar a todas partes."
    ]
  },
  {
    name: "Mogolla Miel",
    weight: "200g",
    image: "/panaderia/23-Mogolla.webp",
    category: "panaderia",
    color: "#ffb500",
    shortDescription: "Soy esa mogolla que te da energía sin perder sabor. Mi toque de miel y mi textura ligera me hacen perfecta para arrancar el día con buena cara.",
    features: [
      "Dulce natural, sin exagerar.",
      "Suave y liviana, como recién salida del horno.",
      "Tu compañera fiel de cada mañana."
    ]
  },
  {
    name: "Pan aliñado",
    weight: "190g",
    image: "/panaderia/20-PanAlinado.webp",
    category: "panaderia",
    color: "#ffb500",
    shortDescription: "No soy un pan cualquiera. Soy el pan aliñado de siempre, ese que se parte y reparte con gusto.",
    features: [
      "Sabor que une sin necesidad de ocasión.",
      "Textura ligera que se disfruta sin prisa.",
      "Pensado para compartir sin complicaciones."
    ]
  },
  {
    name: "Pan aliñado 2",
    weight: "200g",
    image: "/panaderia/22-PanAlinadox6.webp",
    category: "panaderia",
    color: "#0055b8",
    shortDescription: "Soy ese pan que nunca falla, el de toda la vida, el que huele a casa apenas lo partes. Sigo teniendo el mismo sabor de siempre… ese que no se olvida.",
    features: [
      "Hecho con receta que pasa de generación en generación.",
      "Suave y esponjoso, justo como debe ser.",
      "Ideal para compartir, acompañar o simplemente disfrutar."
    ]
  },
  {
    name: "Pan de Anís",
    weight: "170g",
    image: "/panaderia/25-PanAnis.webp",
    category: "panaderia",
    color: "#ec7700",
    shortDescription: "Soy ese panecito que perfuma la cocina con su toque de anís. Suave, dorado y con ese sabor que te transporta a los más bonitos momentos.",
    features: [
      "Aroma que despierta recuerdos.",
      "Textura ligera y sabor auténtico.",
      "Ideal para acompañar un café o calmar un antojo."
    ]
  },
  {
    name: "Pan de Hamburguesa",
    weight: "360g",
    image: "/panaderia/27-PanHamburgesa.webp",
    category: "panaderia",
    color: "#213d2d",
    shortDescription: "Soy ese pan que la jugosidad sin perder la forma. resiste Me gusta ser parte de tus mejores burguers, porque nací para eso.",
    features: [
      "Con o sin ajonjolí, sigo siendo irresistible.",
      "Hecho para hamburguesas caseras o gourmet.",
      "Ideal para tardes de parrilla y risas."
    ]
  },
  {
    name: "Pan Tajado Blanco",
    weight: "280g",
    image: "/panaderia/17-PanTajadoBlanco.webp",
    category: "panaderia",
    color: "#1b6eb6",
    shortDescription: "Soy el pan que nunca falta en casa. Tierno, fresco y listo para lo que se te ocurra: desayunos, onces o el mejor sándwich del día.",
    features: [
      "Un clásico que nunca pasa de moda.",
      "Suave y ligero en cada tajada.",
      "Adaptable a cualquier antojo."
    ]
  },
  {
    name: "Panecitos",
    weight: "170g",
    image: "/panaderia/24-Panecitos.webp",
    category: "panaderia",
    color: "#e80029",
    shortDescription: "Soy el pancito que alegra cualquier momento. Pequeño, suave y tan rico que siempre provoca repetir.",
    features: [
      "Tamaño ideal para saciar ese antojo.",
      "Textura suave que se disfruta fácil.",
      "Perfectos para cualquier momento del día."
    ]
  },
  {
    name: "Pan Sandwich",
    weight: "280g",
    image: "/panaderia/29-PanSandwich.webp",
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
    image: "/panaderia/19-PanTajadoIntegral.webp",
    category: "panaderia",
    color: "#a45d28",
    shortDescription: "Soy ese pan integral que te hace sentir bien sin dejar de ser delicioso.",
    features: [
      "Textura suave, nada seca.",
      "Sabor natural que conquista sin esfuerzo.",
      "Una opción más saludable."
    ]
  },
  {
    name: "Pan Tajado Mantequilla",
    weight: "450g",
    image: "/panaderia/18-PanTajadoMantequilla.webp",
    category: "panaderia",
    color: "#e18c15",
    shortDescription: "Soy ese pan tajado con un toque de mantequilla que hace que cada rebanada sepa a hogar.",
    features: [
      "Aroma y sabor que despiertan el apetito.",
      "Textura tierna que se disfruta solo/a o con tu acompañante favorito.",
      "Versatil para realizar recetas."
    ]
  },
  {
    name: "Pan Tajado Blanco",
    weight: "450g",
    image: "/panaderia/17-PanTajadoBlanco.webp",
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
    image: "/panaderia/21-Tostadas.webp",
    category: "panaderia",
    color: "#f34b0a",
    shortDescription: "Soy ese toque dorado y crujiente que le da vida a tus comidas. Conmigo, el desayuno suena mejor, la merienda se disfruta más y hasta lo simple sabe increíble.",
    features: [
      "Tengo una textura crocante.",
      "Lista para acompañarte donde sea.",
      "Combino con todo lo que te gusta."
    ]
  },

    {
    name: "Pan de Variedad",
    weight: "110g",
    image: "/panaderia/26-PanVariedad.webp",
    category: "panaderia",
    color: "#f34b0a",
    shortDescription: "Soy ese toque dorado y crujiente que le da vida a tus comidas. Conmigo, el desayuno suena mejor, la merienda se disfruta más y hasta lo simple sabe increíble.",
    features: [
      "Tengo una textura crocante.",
      "Lista para acompañarte donde sea.",
      "Combino con todo lo que te gusta."
    ]
  },
  {
    name: "Aceite Desmoldante",
    weight: "1-20Ltr",
    image: "/industrial/35-Desmoldande.webp",
    category: "industrial",
    color: "#e80029",
    shortDescription: "Soy el mejor asistente en cada receta, ese aceite desmoldante diseñado para obtener horneados perfectos sin que las preparaciones seadhieran a moldes o bandejas.",
    features: [
      "Facilita el desmolde sin romper tus preparaciones.",
      "No altera el sabor ni textura del producto.",
      "Soy el aliado que nunca falla."
    ]
  },
  {
    name: "Breva en Almíbar",
    weight: "580g",
    image: "/industrial/34-BrevaFrasco.webp",
    category: "industrial",
    color: "#b3ce7d",
    shortDescription: "Soy ese antojito clásico que endulza tus momentos sin prisa. Dulce, suave y con ese sabor casero que te hace decir “¡qué delicia!”.",
    features: [
      "Dulzura artesanal en cada bocado.",
      "Presentaciones prácticas que conservan sabor y textura.",
      "Sabor difícil de olvidar."
    ]
  },
  {
    name: "Breva en Almíbar Doypack",
    weight: "500g",
    image: "/industrial/31-BrevaDoypack.webp",
    category: "industrial",
    color: "#b3ce7d",
    shortDescription: "Soy esa breva que le pone el toque dulce a tus antojos. Lista para disfrutar sola o darle vida a tus postres y recetas favoritas.",
    features: [
      "Presentación práctica y fácil de conservar.",
      "Ideal para endulzar momentos.",
      "Tradición y sabor boyacense en cada cucharada."  
    ]
  },
  {
    name: "Piña en Almíbar Doypack",
    weight: "500g",
    image: "/industrial/30-PinaDoypack.webp",
    category: "industrial",
    color: "#e7aa33",
    shortDescription: "Soy esos trocitos que endulzan tu día. Suavecita, jugosa y con el toque justo de almíbar, lista para acompañarte donde quieras.",
    features: [
      "Sabor tropical en cada bocado.",
      "Lista para disfrutar.",
      "Empaque práctico, fácil de abrir y conservar."
    ]
  },
  {
    name: "Breva en Almíbar - Cojín",
    weight: "1000g",
    image: "/industrial/32-BrevaCojin.webp",
    category: "industrial",
    color: "#0f3b34",
    shortDescription: "Soy esa breva dulce y jugosa que alegra cualquier momento. Perfecta para disfrutar sola o darle un toque especial a tus recetas favoritas.",
    features: [
      "Dulzura tradicional con sabor auténtico.",
      "Textura suave y jugosa, lista para servir.",
      "Elaborada para procesos productivos y uso industrial."
    ]
  },
  {
    name: "Piña en Almíbar - Cojín",
    weight: "500g",
    image: "/industrial/33-PinaCojin.webp",
    category: "industrial",
    color: "#0f3b34",
    shortDescription: "Soy esa piña en dulce que le pone chispa a tus recetas y un toque tropical a cada momento.",
    features: [
      "Trocitos jugosos con sabor auténtico.",
      "Perfecta para acompañar tus recetas favoritas.",
      "Elaborada para procesos productivos y uso industrial."
    ]
  }
];
