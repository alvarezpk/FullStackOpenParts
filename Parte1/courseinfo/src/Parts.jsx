
const Parts = () => {

    const parts = [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    
      return(
        <p>
            {parts[0].name} {parts[0].exercises} <br /><br />
            {parts[1].name} {parts[1].exercises} <br /><br />
            {parts[2].name} {parts[2].exercises} <br /><br />
        </p>
        
    )
}

export default Parts