
const Filter = ({ filterName, handleFilterChange }) => {
    
  
    return(
        <div>
        <h4>find country</h4>
        <input
          type='text'
          placeholder='Search Country'
          value={filterName}
          onChange={handleFilterChange}
        />
        </div>
    )
}

export default Filter