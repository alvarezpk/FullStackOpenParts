import axios from 'axios'



export const getAllCountries = () => {
    const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
    return ( 
        
    axios
    .get(baseUrl)
    .then(response => {
        const { data } = response
        return data;
      })
    
    
    )
}