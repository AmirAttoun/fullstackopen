//TelephoneNumbers.jsx
const TelephoneNumbers = ({ peopleToShow, deletePerson }) => {
    const label = "delete"
    return (
      <div>
        {peopleToShow.map((person, index) => (
          <p key={`${person.number}-${index}`}>{person.number} <button onClick={deletePerson}>{label}</button></p>
        ))}
      </div>

    );
  };

  export default TelephoneNumbers;