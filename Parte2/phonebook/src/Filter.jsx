

const Filter = ({ filterName, handleFilterChange }) => {
    
  
    return(
        <div>
        <h4>filter shown with</h4>
        <input
          type='text'
          placeholder='Search by name'
          value={filterName}
          onChange={handleFilterChange}
        />
        </div>
    )
}

export default Filter