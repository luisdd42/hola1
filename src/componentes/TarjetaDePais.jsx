import React from "react";

const TarjetaDePais = ({ pais }) => {
  return (
    <div className="country-card">
      <h2>{pais.name.common}</h2>
      <p>Capital: {pais.capital[0]}</p>
      <p>Población: {pais.population}</p>
      <img src={pais.flags.png} alt={pais.name.common} />
    </div>
  );
};

export default TarjetaDePais;
