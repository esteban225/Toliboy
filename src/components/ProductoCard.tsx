import React from "react";
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
  return (
    <div className="card">
      <div className="card-inner">
        {/* Frente de la tarjeta */}
        <div className="card-front">
          <img src={imagen} alt={`Imagen de ${nombreProducto}`} />
          <h3 className="titulo">{nombreProducto}</h3>
        </div>

        {/* Parte trasera de la tarjeta */}
        <div className="card-back">
          <p className="descripcion">{descripcion}</p>
          {precio && (
            <div className="precio">
              <strong>Precio:</strong> {precio}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
