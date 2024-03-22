

const App = () => {
  
  const names = [

    {
      id: 13, 
      nombre: "Gerardo",
      edad: "22"
    },

    {
      id: 43, 
      nombre: "Fernando",
      edad: "52"
    },

    {
      id: 12, 
      nombre: "Paula",
      edad: "15"
    }


  ]

  
  const resultado = names.map(name => {
      return (
          <div key={name.id}>
          <p>Edad de {name.nombre}: {name.edad}</p>
          </div>
      )
  })
  

  return (
    <div>
      {resultado}
    </div>
  )
}

export default App
