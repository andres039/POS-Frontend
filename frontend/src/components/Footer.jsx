import React from "react";
import Boton from "./Boton";

const Footer = () => {
  return <nav className="navbar is-primary">
    <a className="navbar-item">
       <Boton> Documentation </Boton>
      </a>
      <a className="navbar-item">
       <Boton> Documentation </Boton>
      </a>
      <a className="navbar-item">
       <Boton> Documentation </Boton>
      </a>
      <a className="navbar-item">
       <Boton tipo="agregar"> Pago </Boton>
      </a>
  </nav>;
};

export default Footer;
