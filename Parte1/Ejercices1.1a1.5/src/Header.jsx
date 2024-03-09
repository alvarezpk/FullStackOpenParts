const Course = (props) => {


  return(
    <h1>
    {props.course}
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
