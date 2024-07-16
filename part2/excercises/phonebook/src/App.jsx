import { useState, useEffect } from "react"
import Heading2 from "./Heading2"
import Filter from "./Filter"
import AddPersonForm from "./AddPersonForm"
import personService from "./services/persons"
import PeopleTable from "./PeopleTable"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const checkDuplicate = (name) => {
    const nameFound = persons.find((person) => person.name === name)
    console.log("nameFound", nameFound)
    if (nameFound) {
      return true
    }
    return false
  }

  const addPerson = (event) => {
    console.log("addPerson called, newName:", newName, "newNumber:", newNumber)
    event.preventDefault()
    console.log("addPerson called, newName:", newName, "newNumber:", newNumber)
    if (checkDuplicate(newName)) {
      if (newNumber.trim() !== "") {
        alert(
          `${newName} is already added to phonebook and number should be updated`
        )
      } else {
        alert(
          `${newName} is already added to phonebook. If you want to update the number, please enter a number.`
        )
      }
      return
    }
    console.log("addPerson called, newName:", newName, "newNumber:", newNumber)

    const personObject = {
      name: newName,
      number: newNumber,
    }

    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      setNewName("")
      setNewNumber("")
    })
  }

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id, person.name)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
        })
        .catch((error) => {
          console.error("Deletion error:", error.message)
          alert(
            `The person '${person.name}' was already deleted from the server.`
          )
          setPersons(persons.filter((p) => p.id !== id))
        })
    }
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

  const peopleToShow =
    newFilter == ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        )

  return (
    <>
      <header>
        <Heading2 text="Phonebook" />
      </header>
      <main>
        <section>
          <Filter value={newFilter} onChange={handleFilter} />
        </section>
        <section>
          <Heading2 text="Add a new person" />
          <AddPersonForm
            onSubmit={addPerson}
            newName={newName}
            handleNewName={handleNewName}
            newNumber={newNumber}
            handleNewNumber={handleNewNumber}
          />
        </section>
        <section>
          <Heading2 text="Numbers" />
          <PeopleTable people={peopleToShow} onDelete={deletePerson} />
        </section>
      </main>
    </>
  )
}

export default App
