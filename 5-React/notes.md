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
