import { useState } from "react";
import ItemCard from "./ItemCard";
import { imageMap } from "../utils/imageMap";

function CardGrid({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };
  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/default.jpg";
  };

  return (
    <>
      {/* GRID */}
      <div className="grid">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onClick={handleSelectItem}
          />
        ))}
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className={`modal-card ${
              selectedItem.destacado ? "destacado" : ""
            }`}
            onClick={handleModalClick}
          >
            {selectedItem.destacado && (
              <span className="badge">Destacado</span>
            )}

            <img
              src={imageMap[selectedItem.id] || "/default.jpg"}
              alt={selectedItem.titulo}
              className="modal-img"
              onError={handleImageError}
            />

            <h2>{selectedItem.titulo}</h2>

            <p><strong>Categoría:</strong> {selectedItem.categoria}</p>
            <p><strong>Año:</strong> {selectedItem.anio}</p>

            {selectedItem.etiquetas && (
              <div className="modal-tags">
                {selectedItem.etiquetas.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <button className="btn" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CardGrid;