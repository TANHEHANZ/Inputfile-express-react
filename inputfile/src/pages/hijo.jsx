import React, { useState } from "react";
import Input from "../components/input";
import { elementos } from "../data/form/elementos";

const Hijo = () => {
  const [valores, setValores] = useState({
    fecha: "",
    telefono: "",
    nombre: "",
    imagen: "",
  });

  const handleChange = (name, value) => {
    setValores({ ...valores, [name]: value });
  };
  const enviar = (e) => {
    e.preventDefault();
    console.log(valores);
  };
  return (
    <div>
      <form onSubmit={enviar}>
        <Input valores={elementos} onChange={handleChange} />
        <button onClick={enviar}>enviar</button>
      </form>
    </div>
  );
};

export default Hijo;
