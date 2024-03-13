import { useState } from "react";
import Counter from './Counter.jsx';


const Statistics = () => {

    
  const [Good, updateGood] = useState(0)
  const [Neutral, updateNeutral] = useState(0)
  const [Bad, updateBad] = useState(0)
  const [Average, updateAverage] = useState(0)
  const [Positivo, updatePositivo] = useState(0)

     const handleClickGood = () => {
      updateGood(Good + 1)
      actualizarPromedio();
      console.log("Good Botton")
    }
    const handleClickNeutral = () => {
      updateNeutral(Neutral + 1)
      actualizarPromedio();
      console.log("Neutral Botton")
    }
    const handleClickBad = () => {
      updateBad(Bad + 1)
      actualizarPromedio();
      console.log("Bad Botton")
    }

    const actualizarPromedio = () => {
      const totalClics = Bad + Good + Neutral;
      const nuevoPromedio = totalClics === 0 ? 0 : Good / totalClics;
      updateAverage(nuevoPromedio)
      console.log(nuevoPromedio)

      const porcentajePositivo = (Good / totalClics) * 100;
      const porcentajeValido = isNaN(porcentajePositivo) ? 0 : porcentajePositivo

      updatePositivo(porcentajeValido)
      console.log(porcentajeValido)
    }

    const totalClics = Bad + Good + Neutral;
      
    
    
    return(
        <div>
           
            <button onClick={handleClickGood}>good</button>
            <button onClick={handleClickNeutral}>neutral</button>
            <button onClick={handleClickBad}>bad</button>
    
            <h2>statistics</h2>
             

              {totalClics === 0 ? ( <p>No feedback given</p> ) : (
                <>
                  <Counter 
                       good={Good}
                       neutral={Neutral}
                       bad={Bad} 
                       all={Bad + Good + Neutral}
                       average={Average.toFixed(4)}
                       positive={Positivo.toFixed(2)}
                  />
                </>


               )}

             
            
            
            

        </div>
        
    )
}


export default Statistics