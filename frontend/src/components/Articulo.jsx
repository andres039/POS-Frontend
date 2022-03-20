import React, { useState } from "react";
import Boton from "./Boton";

const Articulo = ({ item, listaDeArticulos, setListaDeArticulos }) => {
  const [producto, setProducto] = useState(item);

  const aumentar = () => {
    setProducto((prev) => ({
      ...prev,
      cantidad: prev.cantidad + 1,
      total: +(prev.total + prev.precio).toFixed(2),
    }));
  }
  const disminuir = () => {
    setProducto((prev) => ({
      ...prev,
      cantidad: prev.cantidad > 0 ? prev.cantidad - 1 : 0,
      total: prev.cantidad > 0 ? +(prev.total - prev.precio).toFixed(2) : 0,
    }));
  };

  const eliminar = () => {
    const newArray = listaDeArticulos.filter((element) => element.id !== producto.id);
    setListaDeArticulos(newArray);
  };
  
  return (
    <div className="box">
      <div className="columns ">
        <div className="column is-one-fifth">
          <Boton tipo={"eliminar"} handleClick={eliminar}>
            X
          </Boton>
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
              handleClick={aumentar}
              tipo="agregar"
            >
              +
            </Boton>
            <Boton handleClick={disminuir} tipo="reducir">
              {" "}
              -{" "}
            </Boton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
