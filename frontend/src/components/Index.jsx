import React from "react";
import Articulos from "./Articulos";
import Footer from "./Footer";
import ListadoDeArticulos from "./ListadoDeArticulos";

const Listado = () => {
  return (
    <section className="section">
      <ListadoDeArticulos/>
      <Articulos/>
      <Footer/>
    </section>
  );
};

export default Listado;
