import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getNumbers = () => {
    return (
        axios
        .get(baseUrl)
        .then((response) =>{

            const { data } = response
            return data;

        })
    )
}

export default getNumbers