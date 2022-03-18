import React from "react";
import Boton from "./Boton";

const ListadoDeArticulos = () => {
  return (
    <section className="hero is-info">
      <div className="hero-body">
        <nav className="navbar">
          <p className="title">Listado de articulos</p>
          <div className="navbar-end">
          <Boton tipo={"agregar"}> + </Boton>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default ListadoDeArticulos;
