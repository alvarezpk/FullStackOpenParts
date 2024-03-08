import Header from "./Header.jsx"
import Content from "./Content.jsx"
import Total from "./Total.jsx"

const App = () => {

  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  

  return (
    <div>

      <Header course={course}/>
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
      
    </div>
  )
}

export default App