import React from "react";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/573133215268?text=Me%20interesa%20el%20servicio%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n" // 👉 Reemplaza con tu número
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="https://img.icons8.com/?size=100&id=d5ntEsf0JRhM&format=png&color=000000"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;

// 3133215268
