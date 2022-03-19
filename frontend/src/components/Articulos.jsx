import React from "react";
import Articulo from "./Articulo";

const Articulos = () => {
  return (
    <section className="section box" style={{'maxHeight': '70vh', 'overflowY': 'scroll'}}>
      <Articulo />
      <Articulo />
      <Articulo />
      <Articulo />
      <Articulo />

    </section>
  );
};

export default Articulos;
