import StatisticLine from "./StatisticLine";

const StatisticsForm = ({ good, neutral, bad }) => {
  const calcAverage = (good - bad) / (good + neutral + bad);
  const calcPositive = () => {
    return `${(good / (good + neutral + bad)) * 100}%`;
  };

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good} />
      <StatisticLine text="average" value={calcAverage} />
      <StatisticLine text="positive" value={calcPositive()} />
    </div>
  );
};

export default StatisticsForm;
