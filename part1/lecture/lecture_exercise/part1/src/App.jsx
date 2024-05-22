const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p><Hello name={friends[0].name} age={friends[0].age} /></p>
      <p><Hello name={friends[1].name} age={friends[1].age} /></p>
    </div>
  )
}

export default App

