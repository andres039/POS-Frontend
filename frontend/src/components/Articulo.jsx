import React, { useState, useEffect } from "react";
import { definirProductos } from "./ayudantes/functionesBoton";
import Boton from "./Boton";

const soda = {
  item: "soda",
  precio: 1.55,
  cantidad: 1,
  total: 1.55,
};

const Articulo = () => {
  const [producto, setProducto] = useState(soda);
  useEffect(() => {}, [producto]);
  return (
    <div className="box">
      <div className="columns ">
        <div className="column is-one-fifth">
          <Boton tipo={"eliminar"}>X</Boton>
        </div>
        <div className="column is-one-fifth">
          <figure className="image is-96x96">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
        <div className="column is-one-fifth">
          <h3 className="subtitle">Precio/U</h3>
          <p>$ {producto.precio}</p>
          <p>{producto.item}</p>
        </div>
        <div className="column is-one-fifth">
          <h3 className="subtitle">Total</h3>
          <p>$ {producto.total}</p>
          <h3 className="subtitle">Cantidad</h3>
          <p>{producto.cantidad}</p>
        </div>

        <div className="column is-one-fifth">
          <div
            className="tile is-vertical"
            style={{ maxWidth: "4rem", gap: "0.5rem" }}
          >
            <Boton
              handleClick={() => {
                setProducto((prev) => ({
                  ...prev,
                  ...definirProductos(producto, "+"),
                }));
              }}
              tipo="agregar"
            >
              +
            </Boton>
            <Boton handleClick={() => {
                setProducto((prev) => ({
                  ...prev,
                  ...definirProductos(producto, "-"),
                }));
              }}tipo="reducir" > - </Boton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
