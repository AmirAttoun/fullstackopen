import Button from "./Button";
const DeletePeople = ({ peopleToShow, deletePerson, label, type }) => {
    return (
      <div>
        {peopleToShow.map((person, index) => (
          <p key={`${person.number}-${index}`}><Button type={type} text={label} onClick={deletePerson} /></p>
        ))}
      </div>
    );
  };

  export default DeletePeople;