import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '098765432'
   }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState(''); // Nuevo estado para el filtro

  const handleChange = (nameChange) => {
     setNewName(nameChange.target.value)
  }

  const handleNumberChange = (numberChange) => {
    setNewNumber(numberChange.target.value)
  }

  const handleFilterChange = (filterChange) => {
    setFilterName(filterChange.target.value); // Actualizar el estado del filtro
  };

  const handleClick = (nameChange) => {
    nameChange.preventDefault()
    console.log(newName)

    // Verificar si el nombre ya existe
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const addPerson = [{

      name: newName,
      number: newNumber

    }]

    setPersons(persons.concat(addPerson))
    setNewName('')
    setNewNumber('')
    console.log(persons)

  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filterName={filterName} 
        handleFilterChange={handleFilterChange}
      />
      <h2>add a new</h2>
      <PersonForm
        addPerson={handleClick}
        newName={newName}
        handleNameChange={handleChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      
      <Persons persons={filteredPersons} />
    
    </div>
  )
}

export default App