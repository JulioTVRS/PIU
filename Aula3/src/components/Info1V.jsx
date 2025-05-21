import { useState } from "react";

export default function Info1V() {
  const [valor, setValor] = useState(8);
  const [mostrar, setMostrar] = useState(false);

  function numeric() {
    setValor(valor + 1);
  }

  function toggleMostrar() {
    setMostrar(!mostrar); 
  }

  return (
    <div>
      <button onClick={numeric}>{valor}</button>

      <button onClick={toggleMostrar}>
        {mostrar ? "Esconder" : "Mostrar"}
      </button>

      {mostrar ? (
        <div>
        <img 
          src="rat.jpg" 
          alt="Imagem de exemplo" 
        />
      </div>
      ) : ""}
    </div>
  );
}