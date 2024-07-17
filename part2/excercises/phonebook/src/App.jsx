import { useState, useEffect } from "react"
import Heading2 from "./Heading2"
import Filter from "./Filter"
import AddPersonForm from "./AddPersonForm"
import personService from "./services/persons"
import PeopleTable from "./PeopleTable"
import Notification from "./Notification"
import "./css/index.css"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [className, setClassName] = useState("")

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
    event.preventDefault()
    if (checkDuplicate(newName)) {
      if (newNumber.trim() !== "") {
        updateNumber(persons.find((person) => person.name === newName).id)
      } else {
        alert(
          `${newName} is already added to phonebook. If you want to update the number, please enter a number.`
        )
      }
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }

    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      setNewName("")
      setNewNumber("")
      setClassName("success")
      setNotificationMessage(`Added ${returnedPerson.name}`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
    })
  }

  const updateNumber = (id) => {
    const person = persons.find((n) => n.id === id)
    const changedPerson = { ...person, number: newNumber }

    personService.update(id, changedPerson)
      .then((returnedPerson) => {
        setPersons(persons.map((person) => (person.id !== id ? person : returnedPerson)));
        setClassName("success")
        setNotificationMessage(`Update number for ${person.name}`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
      })
      .catch(error => {
        console.error("Update error:", error.message);
        setClassName("error");
        setNotificationMessage(`The person '${changedPerson.name}' was already deleted from the server.`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
        setPersons(persons.filter((p) => p.id !== id))
      });
  }

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id, person.name)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
          setClassName("success")
          setNotificationMessage(`Deleted ${person.name}`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        })
        .catch((error) => {
          console.error("Deletion error:", error.message)
          setClassName("error");
          setNotificationMessage(`The person '${person.name}' was already deleted from the server.`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
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
          <Notification message={notificationMessage} className={className}/>
        </section>
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
