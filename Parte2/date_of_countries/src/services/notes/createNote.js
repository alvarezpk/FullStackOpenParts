import axios from 'axios'

export const createNote = (baseUrl, important) => {

    return (    

    axios
    .post(baseUrl, important)
    .then(response => {
        const { data } = response
        return data;
      })

    )
}