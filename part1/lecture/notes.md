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
# Javascript

## Variables

```
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error
```

Notable in this example is the fact that the contents of the array can be modified even though it is defined as a const. Because the array is an object, the variable always points to the same object. However, the content of the array changes as new items are added to it.

One way of iterating through the items of the array is using forEach as seen in the example. forEach receives a function defined using the arrow syntax as a parameter.

In the previous example, a new item was added to the array using the method push. When using React, techniques from functional programming are often used. One characteristic of the functional programming paradigm is the use of immutable data structures. In React code, it is preferable to use the method concat, which creates a new array with the added item. This ensures the original array remains unchanged.

# Note: Readup on immutable data structures in functional programming. Concat is preferable.

```
const t = [1, -1, 3]

const t2 = t.concat(5)  // creates new array

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
```
## Useful array methods: map
```
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed
```

Based on the old array, map creates a new array, for which the function given as a parameter is used to create the items. In the case of this example, the original value is multiplied by two.

Map can also transform the array into something completely different:

```
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
```

Here an array filled with integer values is transformed into an array containing strings of HTML using the map method. In part 2 of this course, we will see that map is used quite frequently in React.

Individual items of an array are easy to assign to variables with the help of the destructuring assignment.

```
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed
```

# Note: Readup on destructuring assignments! 

Thanks to the assignment, the variables first and second will receive the first two integers of the array as their values. The remaining integers are "collected" into an array of their own which is then assigned to the variable rest.

# Objects
There are a few different ways of defining objects in JavaScript. One very common method is using object literals, which happens by listing its properties within braces:

```
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}
```

The values of the properties can be of any type, like integers, strings, arrays, objects...

The properties of an object are referenced by using the "dot" notation, or by using brackets:

```
console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])    // 35 is printed
```
You can also add properties to an object on the fly by either using dot notation or brackets:

```
object1.address = 'Helsinki'
object1['secret number'] = 12341
```

The latter of the additions has to be done by using brackets because when using dot notation, secret number is not a valid property name because of the space character.

Naturally, objects in JavaScript can also have methods. However, during this course, we do not need to define any objects with methods of their own. This is why they are only discussed briefly during the course.

Objects can also be defined using so-called constructor functions, which results in a mechanism reminiscent of many other programming languages, e.g. Java's classes. Despite this similarity, JavaScript does not have classes in the same sense as object-oriented programming languages. There has been, however, the addition of the class syntax starting from version ES6, which in some cases helps structure object-oriented classes.

# Functions

We have already becom familiar with defining arrow functions.
```
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
```

and the function is called as can be expected:

```
const result = sum(1, 5)
console.log(result)
```

If there is just a single parameter, we can exludes the parentheses.
```
const square = p => {
  console.log(p)
  return p * p
}
```

If the function only contains a single expression then the braces are not needed. In this case, the function only returns the result of its only expression. Now, if we remove console printing, we can further shorten the function definition:

```
const square = p => p * p
```
This form is particularly handy when manipulating arrays - e.g. when using the map method:
```
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared is now [1, 4, 9]
```
The arrow function feature was added to JavaScript only a couple of years ago, with version ES6. Before this, the only way to define functions was by using the keyword function.

There are two ways to reference the function; one is giving a name in a function declaration.
```
function product(a, b) {
  return a * b
}

const result = product(2, 6)
// result is now 12
```
The other way to define the function is by using a function expression. In this case, there is no need to give the function a name and the definition may reside among the rest of the code:

```
const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)
// result is now 3.5
```


