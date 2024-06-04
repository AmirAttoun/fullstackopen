import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const DisplayAnecdote = ({ anecdote }) => {
  return (
    <p>{anecdote}</p>
  )
}

const DisplayVotes = ({ votes }) => {
  return (
    <p>has {votes} votes</p>
  )
}

const DisplayHeader = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const AnectodeWithMostVotes = ({ votes, anecdotes }) => {
  let maxVotes = 0;
  let maxIndex = 0;
  for (const key in votes) {
    if (votes[key] > maxVotes) {
      maxVotes = votes[key];
      maxIndex = key;
    }
  }

  if (maxVotes === 0) {
    return (
      <p>No votes have been cast yet</p>
    )
  }

  return (
    <div>
      <DisplayAnecdote anecdote={anecdotes[maxIndex]} />
      <DisplayVotes votes={maxVotes} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0});
  
  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteAnecdote = () => {
    setVotes(prevVotes => ({ ...prevVotes, [selected]: prevVotes[selected] + 1 }))
  }
   
  return (
    <div>
      <DisplayHeader text='Anecdote of the day' />
      <DisplayAnecdote anecdote={anecdotes[selected]} />
      <Button handleClick={voteAnecdote} text='vote' />
      <Button handleClick={nextAnecdote} text='next anecdote' />
      <DisplayVotes votes={votes[selected]} />
      <DisplayHeader text='Anecdote with most votes' />
      <AnectodeWithMostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App