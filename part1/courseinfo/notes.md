# An Introduction to React

- Most important topic of the course
- Let's start by making a simple React applikcation
- The easiest way to get started by far is a tool called Vite.

````
# npm 6.x (outdated, but still used by some):
npm create vite@latest part1 --template react

# npm 7+, extra double-dash is needed:
npm create vite@latest part1 -- --template react
````

````
cd part1
npm install
````
````
npm run dev
````

## create-react-app
Instead of Vite you can also use the older generation tool create-react-app in the course to set up the applications. The most visible difference to Vite is the name of the application startup file, which is index.js.

The way to start the application is also different in CRA, it is started with a command

```
npm start
```

in contrast to Vite's

```
npm run dev 
```

# Note: Read up on React components https://react.dev/learn/your-first-component
# Note: Read up on Arrows functions 

# Important!
It seems like React components are returning HTML markup. It's actually JSX. It looks like HTML, but under the hood, JSX ist returned by React components as compiled JS. The compilation is handled by Babel. 
Projects created with create-react-app or vite are configured to compule automatically.

Is is also possible to wriete React as "pure JavaScript" without using JSX. Nobody would do this though.

JSX is XML-like, which means every tag needs to be closed.

Example:
````
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
````

Will be compiled into
````
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}
````

## Example of using multiple components in one file

````
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello />
      <Hello />
    </div>
  )
}

export default App    

````
### Note 


Writing components with React is easy, and by combining components, even a more complex application can be kept fairly maintainable. Indeed, a core philosophy of React is composing applications from many specialized reusable components.

Another strong convention is the idea of a root component called App at the top of the component tree of the application. Nevertheless, as we will learn in part 6, there are situations where the component App is not exactly the root, but is wrapped within an appropriate utility component.

## Props - Passing data to components

It is possible to pass data to components using so-called props 
# Note: Read up on props: https://react.dev/learn/passing-props-to-a-component

````
const Hello = (props) => {
  return (
    <div>

      <p>Hello {props.name}</p>
    </div>
  )
}
````

````
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='George' />
      <Hello name='Daisy' />
    </div>
  )
}
````

### Let's modify this so multiple props are used

````
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const age = 31
  const name = 'Sandro'


  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Amir' age={24+10} />
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App    

````

### An error might pop up at this point (ESLint?), according to https://fullstackopen.com/en/part1/introduction_to_react


## Keep in mind
- Also, keep in mind that First letter of React component names must be capitalized. 
- Note that the content of a React component (usually) needs to contain one root element. If we, for example, try to define the component App without the outermost div-element:
    ````
    const App = () => {
  return (
    <h1>Greetings</h1>
    <Hello name='Maya' age={26 + 10} />
    <Footer />
        )
    } 
    `````
- The issues could also be solved in a dumb way using arrays:
    `````
    const App = () => {
    return [
        <h1>Greetings</h1>,
        <Hello name='Maya' age={26 + 10} />,
        <Footer />
        ]
    }
    `````

- Because the root element is stipulated, we have "extra" div elements in the DOM tree. This can be avoided by using fragments, i.e. by wrapping the elements to be returned by the component with an empty element:
    `````
    const App = () => {
    const name = 'Peter'
    const age = 10

    return (
        <>
        <h1>Greetings</h1>
        <Hello name='Maya' age={26 + 10} />
        <Hello name={name} age={age} />
        <Footer />
        </>
    )
    }
    `````

## Do not render objects
Consider an application that print the names and ages of our friends on the screen:

````
const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0]}</p>
      <p>{friends[1]}</p>
    </div>
  )
}

export default App
````

The console will complain: Objects are not valid as a React child, i.e. the application tries to render objects and it fails again

The code tries to render the information of one friend as follows
```
<p>{friends[0]}</p>
```

and this causes a problem because the item to be rendered in the braces is an object.

````
{ name: 'Peter', age: 4 }
````

In React, the individual things rendered in braces must be primitive values, such as numbers or strings.

The fix is ​​as follows:

````
const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App
````
