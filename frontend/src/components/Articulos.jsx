import React, { useState } from "react";
import Articulo from "./Articulo";

const productos = [
  {
    id: 1,
    item: "soda",
    precio: 1.55,
    cantidad: 1,
    total: 1.55,
  },
  {
    id: 2,
    item: "pan",
    precio: 0.55,
    cantidad: 1,
    total: 0.55,
  },
  {
    id: 3,
    item: "caldo",
    precio: 3.85,
    cantidad: 1,
    total: 3.85,
  },
];
const Articulos = () => {
  const [listaDeArticulos, setListaDeArticulos] = useState(productos);
  
  return (
    <section
      className="section box"
      style={{ maxHeight: "70vh", overflowY: "scroll" }}
    >
      {listaDeArticulos.map((producto) => (
        <Articulo
          key={producto.id}
          item={producto}
          listaDeArticulos={listaDeArticulos}
          setListaDeArticulos={setListaDeArticulos}
        />
      ))}

    </section>
  );
};

export default Articulos;
