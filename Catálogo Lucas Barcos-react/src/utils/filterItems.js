export const filterItems = (items, busqueda) => {
  return items.filter((item) =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );
};