import React from "react";
import NavRecursivo from "../recursividad/navRecursivo";
import { data } from "../data/routes";
import { Outlet } from "react-router-dom";

const Inicio = () => {
  return (
    <div>
      <NavRecursivo links={data} />
      <section className="contenido">
        <Outlet />
      </section>{" "}
    </div>
  );
};

export default Inicio;
