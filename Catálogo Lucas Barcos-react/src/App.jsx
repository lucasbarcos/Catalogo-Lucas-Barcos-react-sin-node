import { useState, useMemo } from "react";
import CustomHeader from "./components/CustomHeader";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import { catalogo } from "./data";
import { filterItems } from "./utils/filterItems";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const itemsFiltrados = useMemo(() => {
    return filterItems(catalogo, busqueda);
  }, [busqueda]);

  return (
    <div className="app-container">
      
      {/* VIDEO FONDO */}
      <video
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="overlay"></div>

      {/* APP CONTENIDO */}
      <div className="content">
        <CustomHeader />

        <main>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar..."
              value={busqueda}
              onChange={handleBusqueda}
            />
          </div>

          {busqueda && itemsFiltrados.length === 0 && (
            <p className="no-results">No encontrado</p>
          )}

          <CardGrid items={itemsFiltrados} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;