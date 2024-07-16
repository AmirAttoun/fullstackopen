//TelephoneNumbers.jsx
const TelephoneNumbers = ({ peopleToShow }) => {
    return (
      <div>
        {peopleToShow.map((person, index) => (
          <p key={`${person.number}-${index}`}>{person.number}</p>
        ))}
      </div>
    );
  };

  export default TelephoneNumbers;