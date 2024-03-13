const Title = ({feedback}) =>{
    return(
        <h1>{feedback}</h1>
    )
}

const Header = () => {
    return(
        <Title feedback="give feedback"/>
    )
}

export default Header