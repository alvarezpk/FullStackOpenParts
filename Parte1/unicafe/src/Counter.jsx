
const Counter = ({good, neutral, bad, all, average, positive}) => {
    return(
        <>
          <table>
              
                <tr><td>good</td> {good}</tr>
                <tr><td>neutral</td> {neutral}</tr>
                <tr><td>bad</td> {bad}</tr>
                <tr><td>all</td> {all}</tr>
                <tr><td>average</td> {average}</tr>
                <tr><td>positive</td> {positive}%</tr>
              
          </table>

        </>
    )
}

export default Counter