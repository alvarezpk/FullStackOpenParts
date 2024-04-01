import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import createPerson from '../services/createPerson'
import getNumbers from '../services/getNumbers'
import personDelete from '../services/personDelete'
import Notification from './NotificationMessage'
import NotificationError from './NotificationError'
import './index.css'
import axios from 'axios'



const App = () => {

  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
 

  useEffect(() => {
    console.log("Use effect")
    getNumbers()
    .then(response => {
        setPersons(response)
    })
  } , [])


  
  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id);
  
      if (window.confirm(`Delete ${person.name} ?`)) { 
        personDelete.deletePerson(id)
          .then(() => {
            setPersons(persons.filter(p => p.id !== id))
          })
          .catch(() => {
            alert(`the person '${person.name}' was already deleted from server`)
            setPersons(persons.filter(p => p.id !== id))
          })
      }

    
  }
      

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
  
    const existingPerson = persons.find(p => p.name === newName)
  
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        const baseUrl = 'http://localhost:3001/persons'
  
        axios
          .put(`${baseUrl}/${existingPerson.id}`, updatedPerson)
          .then(response => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : response.data))
            setMessage(
              `Added ${updatedPerson.name}`
            )
            setTimeout(() => {
                  setMessage(null)
            }, 5000)
          })
          .catch(() => {
            setErrorMessage(
              `Information of ${updatedPerson.name} has already been removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(p => p.id !== existingPerson.id))
          })

        
  
        setNewName('')
        setNewNumber('')
        
      }
    } else {
      const addPerson = {
        name: newName,
        number: newNumber,
      }
  
      createPerson(addPerson)
        .then(personCreated => {
          setPersons(persons.concat(personCreated))
          setNewName('')
          setNewNumber('')      
          setMessage(
            `Added ${addPerson.name}`
          )
          setTimeout(() => {
              setMessage(null)
          }, 5000)
        })
     

         
      
    }
  }



  const filteredPersons = persons.filter((person) =>
  person.name && person.name.toLowerCase().includes(filterName.toLowerCase())
);


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <NotificationError messageError={errorMessage}/>
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
     
      
      <Persons 
      persons={filteredPersons}
      deletePersoN={deletePerson}
       />
    </div>
    
  )
}

export default App