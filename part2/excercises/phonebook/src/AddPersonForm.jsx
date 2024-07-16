import InputField from "./InputField"
import Button from "./Button"

//AddPersonForm.jsx
const AddPersonForm = ({
  onSubmit,
  newName,
  handleNewName,
  newNumber,
  handleNewNumber,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <InputField value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <InputField value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <Button type="submit" text="add" />
      </div>
    </form>
  )
}

export default AddPersonForm
