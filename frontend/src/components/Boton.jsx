import React from "react";

const Boton = ({ children, tipo }) => {
  const handleClick = () => alert(`the children: ${children}`);

  let estilo 
  if (tipo === "agregar") { estilo = `is-primary is-light`}
  if (tipo === "eliminar") { estilo = `is-link`} 
  if (tipo === "reducir") { estilo = `is-danger`}
  return (
    <button className={`button has-text-weight-bold is-size-5 ${estilo}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Boton;
