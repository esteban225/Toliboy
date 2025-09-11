import React, { useState } from "react";
import "../css/ProductCard.css";

// Definimos el tipo para las props del componente
interface ProductoCardProps {
  nombreProducto: string;
  descripcion: string;
  precio?: string;
  imagen: string;
}

// Componente reutilizable ProductoCard
const ProductoCard: React.FC<ProductoCardProps> = ({
  nombreProducto,
  descripcion,
  precio,
  imagen,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card">
      <div className={`card-inner${isFlipped ? " is-flipped" : ""}`}>
        {/* Frente de la tarjeta */}
        <div className="card-front">
          <img src={imagen} alt={`Imagen de ${nombreProducto}`} />
          <h3 className="titulo text-white text-3xl">{nombreProducto}</h3>
          <button
            className="relative hidden md:block md:order-3 bg-white text-[#4e2c1d] font-semibold py-1 px-3 rounded-4xl transition-transform hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0_0_#4e2c1d] active:shadow-none active:translate-x-0 active:translate-y-0"
            onClick={() => setIsFlipped(true)}
            style={{ marginTop: "10px" }}
          >
            Más info
          </button>
        </div>

        {/* Parte trasera de la tarjeta */}
        <div className="card-back">
          <p className="descripcion">{descripcion}</p>
          {precio && (
            <div className="precio">
              <strong>Precio:</strong> {precio}
            </div>
          )}
          <button
            className="relative hidden md:block md:order-3 bg-white text-[#4e2c1d] font-semibold py-1 px-3 rounded-4xl transition-transform hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0_0_#4e2c1d] active:shadow-none active:translate-x-0 active:translate-y-0"
            onClick={() => setIsFlipped(false)}
            style={{ marginTop: "10px" }}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
