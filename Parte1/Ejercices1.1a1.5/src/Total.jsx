const SumaTotal = (props) => {
    return (
        <p>
            Total of ejercices {props.total}
        </p>
    )
} 

const Total = () => {
    const exercises1 = 10
    const exercises2 = 7
    const exercises3 = 14
    return (
        <SumaTotal total={exercises1 + exercises2 + exercises3} />
    )
}

export default Total