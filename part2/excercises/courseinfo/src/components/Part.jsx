const Part = ({ part }) => {
  return (
    <div>
      <p>
        <span>
          {part.name} {part.exercises}
        </span>
      </p>
    </div>
  );
};

export default Part;
