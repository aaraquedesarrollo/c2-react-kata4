import { useState } from "react";

function App() {
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
  const [numeroMostrado, setNumeroMostrado] = useState("");

  const sumarNumeros = () => {
    if (numeros[4] > 19) {
      return;
    }
    setNumeros(numeros.map((numero) => numero + 1));
  };

  const restarNumeros = () => {
    if (numeros[0] < 1) {
      return;
    }
    setNumeros(numeros.map((numero) => numero - 1));
  };

  const mostrarNumero = (e) => {
    setNumeroMostrado(e.target.textContent);
  };

  return (
    <div className="contenedor">
      <p className="numero-mostrado">{numeroMostrado}</p>
      <ul className="lista">
        <li onClick={restarNumeros}>&#8810;</li>
        {numeros.map((numero) => (
          <li key={numero} onClick={mostrarNumero}>
            {numero}
          </li>
        ))}
        <li onClick={sumarNumeros}> &#8811;</li>
      </ul>
    </div>
  );
}

export default App;
