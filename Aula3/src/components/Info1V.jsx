import { useState } from "react";

export default function Info1V() {
  const [valor, setValor] = useState(8);
  const [mostrar, setMostrar] = useState(true);

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

      {mostrar && (
        <div>
        <p>Esse é um texto que aparece e desaparece com o botão acima.</p>
        <img 
          src="rat.jpg" 
          alt="Imagem de exemplo" 
        />
      </div>
      )}
    </div>
  );
}