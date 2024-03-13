import { useState } from "react";

const Counter = ({number1, number2}) => {
  console.log("Counter render")
  return (
    
    <h3>Peñarol {number1} vs {number2} Nacional</h3>
  )
  
}

const App = () => {

  const [contadorValue, updateContador] = useState(0)
  const [contadorNac, updateContadorNac] = useState(0)

  /*
  let contador = useState(0);
  const contadorValue = contador[0];
  const updateContador = contador[1];
  */

  console.log("render")

  const handleClick = () => {
    updateContador(contadorValue + 1)
  }
  const handleClick2 = () => {
    updateContadorNac(contadorNac + 1)
  }
  const handleClickReset = () => {
    updateContador(0)
    updateContadorNac(0)
  }

  const isEven = contadorValue % 2 === 0;
  const mensajePar = isEven ? "Es Par Crick" :  "Es Inpar Crick";
  

 
  return (
    <div>

      <h2>Resultado del partido:</h2>
      
      <Counter number1={contadorValue} number2={contadorNac}/>

      <p>{mensajePar}</p>

      <button onClick={handleClick}>
        Gol Peñarol
      </button>

      <button onClick={handleClick2}>
        Gol Nacional
      </button>

      <button onClick={handleClickReset}>
        Reset
      </button>

    </div>
  )
}

export default App