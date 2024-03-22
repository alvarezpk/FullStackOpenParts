

const Filter = ({ filterName, handleFilterChange }) => {
    
  
    return(
        <input
          type='text'
          placeholder='Search by name'
          value={filterName}
          onChange={handleFilterChange}
    />
    )
}

export default Filter