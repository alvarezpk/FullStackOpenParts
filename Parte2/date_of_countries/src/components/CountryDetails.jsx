
const CountryDetails = ({ country }) => (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <h4>Lenguages:</h4>
      <ul>
        <li>{Object.values(country.languages).join(', ')}</li>
      </ul> 
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  )

  export default CountryDetails