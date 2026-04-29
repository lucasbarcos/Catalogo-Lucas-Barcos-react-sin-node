function Card({ item }) {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/default.jpg";
  };

  return (
    <div className="card">

      <div className="image-container">

        {/* IMAGEN */}
        <img
          src={item.imagen || "/default.jpg"}
          alt={item.titulo}
          onError={handleImageError}
        />

        {/* ETIQUETAS */}
        {item.etiquetas && (
          <div className="tags">
            {item.etiquetas.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default Card;