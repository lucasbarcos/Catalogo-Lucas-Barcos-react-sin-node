import { useState } from "react";
import { imageMap } from "../utils/imageMap";

function ItemCard({ item, onClick }) {
  const [favorito, setFavorito] = useState(false);
  const handleCardClick = () => {
    onClick(item);
  };
  const handleFavoritoClick = (e) => {
    e.stopPropagation();
    setFavorito(!favorito);
  };

  return (
    <div
      className={`card ${item.destacado ? "destacado" : ""}`}
      onClick={handleCardClick}
    >
      <div className="image-container">
        <img
          src={imageMap[item.id] || "/default.jpg"}
          alt={item.titulo}
        />

        {item.destacado && <span className="badge">Destacado</span>}
      </div>

      <div className="content">
        <h3>{item.titulo}</h3>
        <p>{item.categoria}</p>
        <p>Año: {item.anio}</p>

        <button
          className={`btn ${favorito ? "favorito" : ""}`}
          onClick={handleFavoritoClick}
        >
          {favorito ? "Favorito" : "Marcar favorito"}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;