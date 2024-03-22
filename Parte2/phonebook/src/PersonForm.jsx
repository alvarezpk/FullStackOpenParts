

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input
        placeholder='Your Name' 
        value={newName} 
        onChange={handleNameChange} 
        required
        />
      </div>
      <div>
        number: <input
          placeholder='Number Phone'
          type='number'
          name="quantity"
          min="1" 
          value={newNumber} 
          onChange={handleNumberChange} 
          required
          />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;