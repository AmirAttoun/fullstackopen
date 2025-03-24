import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import StatisticsForm from "./components/StatisticsForm";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <FeedbackForm setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      <StatisticsForm good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
