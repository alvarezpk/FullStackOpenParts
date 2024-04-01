import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const update = (id, newObject) => {

    

    return ( 

    axios
    .put(`${baseUrl}/${id}`, newObject)
    .then(response =>{

        const { data } = response
        return data;

    })
    )
}

export default update