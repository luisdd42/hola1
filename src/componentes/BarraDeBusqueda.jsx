import React, { useState } from "react";

const BarraDeBusqueda = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar país..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default BarraDeBusqueda;
