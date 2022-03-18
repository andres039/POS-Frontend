import React from "react";
import Boton from "./Boton";

const Articulo = () => {
  return (
    <div className="box">
      <div className="columns">
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
          <p>12.50</p>
          <p>Caldo de Pollo</p>
        </div>
        <div className="column is-one-fifth">
          <h3 className="subtitle">Total</h3>
          <p>25</p>
          <h3 className="subtitle">Cantidad</h3>
          <p>2</p>
        </div>

        <div className="column is-one-fifth">
          <Boton tipo="agregar">+</Boton>
          <Boton tipo="reducir">-</Boton>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
