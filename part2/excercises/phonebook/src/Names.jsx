/* eslint-disable react/prop-types */
//Names.jsx
const Names = ({ peopleToShow }) => {
  return (
    <div>
      {peopleToShow.map((person, index) => (
        <p key={`${person.name}-${index}`}>{person.name}</p>
      ))}
    </div>
  )
}

export default Names
