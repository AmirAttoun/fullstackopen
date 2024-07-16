import { useState, useEffect } from 'react'
import Heading2 from './Heading2'
import Filter from './Filter'
import AddPersonForm from './AddPersonForm'
import personService from './services/persons'
import Names from './Names'
import TelephoneNumbers from './TelephoneNumbers'
import Button from './Button'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
  personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
}, [])

  const checkDuplicate = (name) => {
    const nameFound = persons.find(person => person.name === name)
    console.log('nameFound', nameFound)
    if (nameFound) {
      return true
    }
    return false

  }
  const addPerson = (event) => {
    event.preventDefault()
    if (checkDuplicate(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)      
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')      
      })

  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)

  if (window.confirm(`Delete ${person.name}?`)) {
    personService
      .remove(id, person.name)      
      .then(() => {        
        setPersons(persons.filter(person => person.id !== id));
      })
      .catch(error => {
        console.error('Deletion error:', error.message);
        alert(`The person '${person.name}' was already deleted from the server.`);
        setPersons(persons.filter(p => p.id !== id));
      });
}}

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => { 
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const peopleToShow = newFilter == ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  
  
  return (
    <div>
      <Heading2 text='Phonebook' />
      <Filter value={newFilter} onChange={handleFilter} />
      <Heading2 text='Add a new person' />
        <AddPersonForm
          onSubmit={addPerson}
          newName={newName}
          handleNewName={handleNewName}
          newNumber={newNumber}
          handleNewNumber={handleNewNumber} />
      <Heading2 text='Numbers' />
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <Names peopleToShow={peopleToShow} />
                </td>  
                <td>
                  <TelephoneNumbers peopleToShow={peopleToShow}/>
                </td>
                <td>
                  <div>
                  {peopleToShow.map((person, index) => (
                    <p key={`${person.number}-${index}`}><Button classDef='button-del' type='button' text='delete' onClick={() => deletePerson(person.id)} /></p>
                  ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
)}

export default App;

