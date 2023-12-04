### React Components:

In React, components are the building blocks of user interfaces. They are reusable and encapsulate the structure, behavior, and styling of a part of the UI. Components can be either functional or class-based. Here are the main types of components in React:

1. Functional Components:

Also known as stateless components.
Written as JavaScript functions.
Used for simple UI components that don't need to maintain state.
Typically used for presentational components.

    Example: 

        function MyFunctionalComponent(props) {
        return <div>{props.message}</div>;
        }

2. Class Components:

Also known as stateful components.
Written as ES6 classes and extend from React.Component.
Used for components that need to maintain and manage their own state.
Can have lifecycle methods.

**_NOTE:_**:

complete the above part⏫
 ___



## What is props?

In JavaScript, "props" is short for "properties," and it refers to the way data is passed from one component to another in a React application. 

### JSX rules:


JSX (JavaScript XML) is a syntax extension for JavaScript often used with React to describe what the UI should look like. JSX allows you to write HTML elements and components in a syntax that looks similar to XML or HTML. Here are some key rules to keep in mind when working with JSX:

1. Wrap in Parentheses:

JSX expressions must be wrapped in parentheses when used in a block or return statement.

 For example:

    const element = (
    <div>
        <h1>Hello, JSX!</h1>
    </div>
    );


2. Single Root Element:

JSX expressions must have a single root element. This means that you can't return or render multiple adjacent elements without wrapping them in a single parent element. 

For example:


    // This is valid
    const element = (
    <div>
        <h1>Title</h1>
        <p>Paragraph</p>
    </div>
    );

    // This is not valid
    const element = (
    <h1>Title</h1>
    <p>Paragraph</p>
    );


3. JavaScript Expressions in Curly Braces:
You can embed JavaScript expressions within JSX using curly braces {}. This allows you to include dynamic content or variables.

 For example:

    const name = "John";
    const element = <p>Hello, {name}!</p>;

4. Attributes and HTML-Like Syntax:
JSX uses HTML-like syntax for elements and attributes. Attributes can be added using standard HTML syntax.

 For example:

    const element = <img src="image.jpg" alt="A sample image" />;

5. Class vs. ClassName:
In JSX, you use className instead of class to define CSS classes. This is because class is a reserved keyword in JavaScript. 

For example:

    className="myClass">Hello, JSX!</div>;
    
6. Self-Closing Tags:
JSX allows self-closing tags for elements that do not have children.

 For example:

    const element = <img src="logo.png" alt="Logo" />;

### What are Maps():

Map Object
A Map in JavaScript is a collection of key-value pairs where each key and value can be of any data type. It provides methods to manipulate, iterate, and retrieve elements based on their keys.

1. Creating a Map

You can create a Map using the Map constructor:
    
    let myMap = new Map();

2. Adding Key-Value Pairs

You can add key-value pairs to a Map using the set method:

    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');

3. Getting Values
You can retrieve values based on their keys using the get method:


    console.log(myMap.get('key1')); // Output: 'value1'

4. Iterating Over a Map
You can iterate over the keys, values, or entries (both keys and values) using methods like keys, values, and entries:

    for (let key of myMap.keys()) {
      console.log(key);
    }

    for (let value of myMap.values()) {
  console.log(value);
    }

    for (let [key, value] of myMap.entries()) {
      console.log(key, value);
    }

5. Map Size
You can get the size of a Map using the size property:


    console.log(myMap.size); // Output: 2
    Removing Key-Value Pairs

6. You can delete a key-value pair using the delete method:


        myMap.delete('key1');

7. Clearing a Map
You can remove all key-value pairs from a Map using the clear method:


    myMap.clear();
8. Parameters
The Map constructor can take an iterable (like an array) containing key-value pairs as its parameter. Each element of the iterable should be an array where the first element is the key and the second element is the value.

    
    let myMap = new Map([
      ['key1', 'value1'],
      ['key2', 'value2']
    ]);