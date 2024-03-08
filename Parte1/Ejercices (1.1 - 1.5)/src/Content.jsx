import Parts from "./Parts.jsx"

const Content = () => {

  const part1 = 'Fundamentals of React:'
  const exercises1 = 10
  const part2 = 'Using props to pass data:'
  const exercises2 = 7
  const part3 = 'State of a component:'
  const exercises3 = 14
    return(
        <div>
            <Parts parts={part1} exercises={exercises1} />
            <Parts parts={part2} exercises={exercises2} />
            <Parts parts={part3} exercises={exercises3} />
       </div>
    )
}

export default Content 