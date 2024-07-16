const PeopleTable = ({ people, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {people.map((person) => (
        <tr key={person.id}>
          <td>{person.name}</td>
          <td>{person.number}</td>
          <td>
            <Button
              className="button-delete"
              type="button"
              onClick={() => onDelete(person.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
