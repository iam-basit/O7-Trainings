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

1. Class Components:

Also known as stateful components.
Written as ES6 classes and extend from React.Component.
Used for components that need to maintain and manage their own state.
Can have lifecycle methods.