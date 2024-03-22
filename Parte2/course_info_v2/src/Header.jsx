const Course = ({course}) => {


  return(
    <h1>
    {course}
    </h1>
  )
}

const Header = () => {

  const course = 'Half Stack application development'
    return(
  
      <Course course={course}/>
  
    )
    
  }


  export default Header
