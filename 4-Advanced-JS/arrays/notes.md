## Part 1: Arrays introduction
### Arrays:
An array in JavaScript is a type of global object that is used to store data and allows you to store multiple values in a single variable. It can hold any type of data, such as numbers, strings, objects, or even other arrays. Arrays consist of an ordered collection or list containing zero or more data types, and use numbered indices starting from 0 to access specific items.

- Array literal
    -  is a way of declaring an array in JavaScript by using the square brackets [] and putting the elements inside them, separated by commas.

    Example: const arr=[1,2,3,4,5]
- Array declaration using Array()
    Example:
    const arr = new Array(1,2,3,4,5)

    - The new keyword in JavaScript is used to create an instance of an object that is defined by a constructor function. It allocates memory for the object and sets the prototype of the object to the prototype property of the constructor function.

    ## Part 2: Basic arrays operations(Methods)
- Array.push() Method:

 Adding Element at the end of an Array.

    Array.push(item1, item2 …)

- Array.unshift() Method:

 This method is used to add elements to the front of an Array.

    Array.unshift(item1, item2 …)

 - Array.pop() Method:

This method is used to remove elements from the end of an array. 

    Array.pop()

- Array.shift() Method:

This method is used to remove elements from the beginning of an array.

    Array.shift()

- Array.splice() Method:

This method is used for the Insertion and Removal of elements in between an Array.
    
    Array.splice (start, deleteCount, item 1, item 2….) 

- Array.slice() Method:

This method returns a new array containing a portion of the original array, based on the start and end index provided as arguments.

    Array.slice (startIndex , endIndex);

- Array some() Method:

This method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.

    Array.some();

- Array reduce() Method:

The array reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator.

 Example:

    Original array:
    let numbers = [88, 50, 25, 10];
    
    Performing reduce method:
    let sub = numbers.reduce(geeks);
    
    function geeks(total, num) {
        return total - num;
    }
    
    console.log(sub);

- Array map() Method:

The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally, the map() method is used to iterate over an array and call the function on every element of an array.
    
Example:
        
    // Original array
    let numbers = [4, 9, 16, 25];
    
    // Performing map method
    let sub = numbers.map(geeks);
    
    function geeks() {
        return numbers.map(Math.sqrt);
    }
    
    console.log(sub);