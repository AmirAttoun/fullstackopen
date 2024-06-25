import { useState, useEffect } from 'react'
import Heading2 from './Heading2';
import Filter from './Filter';
import AddPersonForm from './AddPersonForm';
import DisplayPersons from './DisplayPersons';
import axios from "axios";


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')


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

    setPersons(persons.concat(personObject))
    console.log('button clicked', event.target)
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
        <DisplayPersons peopleToShow={peopleToShow} />
    </div>
)}

export default App;

