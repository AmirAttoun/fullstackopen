import { useState, useEffect } from 'react'
import Heading2 from './Heading2';
import Filter from './Filter';
import AddPersonForm from './AddPersonForm';
import DisplayPersons from './DisplayPersons';
import personService from './services/persons';


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
        setNewNumber('')      
      })

  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    const changedPerson = { ...person, important: !person.important }

    personService
      .update(id, changedPerson)      
      .then(returnedPerson => {        
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))   
      })
      .catch (error => {
        alert(`the note '${note.content}' was already deleted from server`)
        setPersons(persons.filter(p => p.id !== id))
      })
  }

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
        <DisplayPersons peopleToShow={peopleToShow} deletePerson={() => deletePerson()} />
    </div>
)}

export default App;

