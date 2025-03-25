import Header from "./Header";
import Content from "./Content";
import Sum from "./Sum";

const Course = ({ course: { name, parts } }) => {
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Sum parts={parts} />
    </div>
  );
};

export default Course;
