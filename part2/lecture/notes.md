# Always console.log to debug
# Visual Studio Code sippets

# JavaScrip arrays
From here on out, we will be using functional programming operators of the JS array such as find, filter
and map constantly. All of the time. Always.

Look up
    - Higher-order functions https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84 
        - Less bugs
        - Easier to reason about
        - Less time

## In functional programming languages, functions are values
- You can, for example, pass a function to another function, i.e. a higher order function
This helps composition. Multiple small functions in one big function.
- An example for an higher order function is filter
    - Filter is a function on a array which accepts another function as it's parameter
    - Map
    - Reduce basics

Let's take the following array.
```javascript
    var aninmals = [
       {name: "Fluffykins", species: 'rabbit'} 
       {name: "Caro", species: 'dog'} 
       {name: "Hamilton", species: 'dog'} 
       {name: "Harold", species: 'fish'} 
       {name: "Urusla", species: 'cat'} 
       {name: "Jimmy", species: 'fish'} 

    ]
```

Theoretically, you can do achieve this with a normal for loop

```javascript
var dogs = []
for (var i = 0; i < animals.length; i+1) {
    if (animals[i].species === 'dog')
        dogs.push(animals[i])
}
```

Let's now implement this with a filter function (higher order)

```javascript
var dogs = animals.filter(function(animal)) {
    return animal.species === 'dogs'
}

---

Looking at this snippet, we can see that:
    - We create a var dogs which is assigned animals filter.
    - The argument for filter is another function
    - The function(animal) is a callback function
    - filter iterates over every entry in animals, calls the callback function on every element
    - The callback function checks for dogs, return true or false.

Important: In ES6 the function would look like this

----
var dogs = animals.filter(animal => animal.species === 'dogs');

    - animal ist the argument
    - the rest is the expression    

```

## Map
Another higher order function.
This transforms every object.

```javascript
    var aninmals = [
       {name: "Fluffykins", species: 'rabbit'}, 
       {name: "Caro", species: 'dog'}, 
       {name: "Hamilton", species: 'dog'}, 
       {name: "Harold", species: 'fish'}, 
       {name: "Urusla", species: 'cat'}, 
       {name: "Jimmy", species: 'fish'}, 

    ]

```

How can we get all the names of the animals using map?

```javascript
var names = animals.map(animal => animal.name)
```

## Reduce
Another higher order function ist reduce().
This is a multitude. This can be used to make any list transformation (?)

### Example
```javascript
var orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
```
Our missions is to summarize (?) the amounts
```javascript
var totalAmount = orders.reduce((sum, order) => return sum + order.amount, 0);
```

## Advanced reduce function
Let's do some advanced stuff with this...

```javascript
{
'Mark johansson': [
{ name: 'waffle iron', price: '80', quantity: '2' },
{ name: 'blender', price: '200', quantity: '1' },
{ name: 'knife', price: '10', quantity: '4' }
],
'Nikita Smith': [
{ name: 'waffle iron', price: '80', quantity: '1' },
{ name: 'knife', price: '10', quantity: '2' },
{ name: 'pot', price: '20', quantity: '3' }
]
}
```

# Event handlers revisited
Based on last years course, this has proven to be difficult. 
    - Make sure to read up on event handlers revisited https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#event-handling-revisited