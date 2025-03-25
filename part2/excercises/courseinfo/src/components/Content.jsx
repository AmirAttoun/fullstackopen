import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={parts[index].id} part={part} />
      ))}
    </div>
  );
};

export default Content;
