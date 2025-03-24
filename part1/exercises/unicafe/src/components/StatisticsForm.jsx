const StatisticsForm = ({ good, neutral, bad }) => {
  const calcAll = good + neutral + bad;
  const calcAverage = (good - bad) / calcAll;
  const calcPositive = (good / calcAll) * 100;

  return (
    <>
      <div>
        <h1>statistics</h1>
        <p>
          good {good}
          <br />
          neutral {neutral}
          <br />
          bad {bad}
          <br />
          all {calcAll}
          <br />
          average {calcAverage}
          <br />
          positive {calcPositive}%
        </p>
      </div>
    </>
  );
};

export default StatisticsForm;
