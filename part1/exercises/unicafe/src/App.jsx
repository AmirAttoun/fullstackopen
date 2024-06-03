import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({ text, value, total, type }) => 
  if (total === 0) {
    return <p></p>
  }

  let displayValue = value;
  
  if (type === 'average') {
    displayValue = (value / total);
  } else if (type === 'positive') {
    displayValue = ((value / total) * 100) + '%';
  }

  return <p>{text} {displayValue}</p>
}

const Header = ({ text }) => <h1>{text}</h1>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalClicks, setTotalClicks] = useState(0)

  const handleGoodClick = () => {
    setTotalClicks(totalClicks + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setTotalClicks(totalClicks + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setTotalClicks(totalClicks + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Header text='statistics' />
      <StatisticsLine text='good' value={good} total={totalClicks} />
      <StatisticsLine text='neutral' value={neutral} total={totalClicks} />
      <StatisticsLine text='bad' value={bad} total={totalClicks} />
      <StatisticsLine text='total clicks' value={totalClicks} total={totalClicks} /> 
      <StatisticsLine text='average' value={good - bad} total={totalClicks} type='average' /> 
      <StatisticsLine text='positive' value={good} total={totalClicks} type='positive' /> 
    </div>
  )
}

export default App;