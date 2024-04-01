import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import CountryDetails from './components/CountryDetails'
import { getAllCountries} from './services/notes/getAllCountries'


const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);


  useEffect(() => {
    console.log("Use effect") 
    getAllCountries()
    .then(response => {
        setCountries(response)
    })
    .catch(error => {
      console.error('Error al obtener datos de la API:', error);
    })
  } , [])

  const handleFilterChange = (filterChange) => {
    setFilterCountry(filterChange.target.value); // Actualizar el estado del filtro
    setSelectedCountry(null); // Esconder los detalles del país seleccionado
  };



  // Filtra los países según el filtro (coincidencia parcial)
  const filteredCountries = countries.filter(country =>
    country.name && country.name.common.toLowerCase().includes(filterCountry.toLowerCase())
  );
  

  // Muestra los nombres de los países filtrados
  const countryList = filterCountry ? (
    filteredCountries.map(country => (
      <div key={country.name.common}>{country.name.common}</div>
    ))
  ) : null;



  // Agrega el subtítulo si hay más de 10 coincidencias
  const subtitle =
  filterCountry && filteredCountries.length > 10 ? (
    <div><h4>Más de 10 coincidencias. Por favor, especifique más.</h4></div>
  ) : null;

  // Determina si hay una sola coincidencia
  const singleMatch = filterCountry && filteredCountries.length === 1;

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
  };

  return(
    <>
      <div>
        <Filter 
        handleFilterChange={handleFilterChange}
        />
        {subtitle}
        {singleMatch ? (
        filteredCountries.map(country => (
          <CountryDetails key={country.name.common} country={country} />
        ))
      ) : (
        filteredCountries.length <= 10 &&
        filteredCountries.map(country => (
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleShowDetails(country)}>Show Details</button>
          </div>
        ))
      )}
      {selectedCountry && <CountryDetails country={selectedCountry} />}
      </div>
    </>
  )
}

export default App