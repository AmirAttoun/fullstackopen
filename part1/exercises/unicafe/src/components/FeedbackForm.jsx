import { useCallback } from "react";
import Button from "./Button";

const FeedbackForm = ({ setGood, setNeutral, setBad }) => {
  const handleClick = useCallback(
    (type) => () => {
      const setters = {
        good: setGood,
        neutral: setNeutral,
        bad: setBad,
      };
      setters[type]((prev) => prev + 1);
    },
    [setGood, setNeutral, setBad],
  );

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClick("good")} text="good" />
      <Button onClick={handleClick("neutral")} text="neutral" />
      <Button onClick={handleClick("bad")} text="bad" />
    </div>
  );
};

export default FeedbackForm;
