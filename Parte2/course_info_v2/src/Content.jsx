

const Courses = () => {

    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]



      const partsCourse1 = courses[0].parts.map(partsInfo => {
        return (
        <div key={partsInfo.id}>
            <p>{partsInfo.name} {partsInfo.exercises}</p>
        </div>
        )
      })

      const partsCourse2 = courses[1].parts.map(partsInfo => {
        return (
        <div key={partsInfo.id}>
            <p>{partsInfo.name} {partsInfo.exercises}</p>
        </div>
        )
      })

      const totalCourse1 = courses[0].parts.reduce((accumulator, currentPart) => {
        console.log('accumulator is: ', accumulator, 'and current is: ', currentPart)
        return accumulator + currentPart.exercises
      }, 0)

      const totalCourse2 = courses[1].parts.reduce((accumulator, currentPart) => {
        console.log('accumulator is: ', accumulator, 'and current is: ', currentPart)
        return accumulator + currentPart.exercises
      }, 0)


    return(
        <>
        <div>
          <h2>Web development curriculum</h2>  
          <div key={courses[0].id}>
            <h3>{courses[0].name}</h3>
            {partsCourse1}
            <h5>Total of {totalCourse1} exercices</h5>
          </div>

          <div key={courses[1].id}>
            <h3>{courses[1].name}</h3>
            {partsCourse2}
            <h5>Total of {totalCourse2} exercices</h5>
          </div>
        </div>
       </>
    )
}

export default Courses