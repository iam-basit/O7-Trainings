// 1.2. Create a function which takes an array as an argument and prints the last element of the array
function printFirstElement(arr) {
  console.log('The first element is: ' + arr[0])
}
let array = [10, 20, 30, 40, 50]
printFirstElement(array)

// 2. Create a function which takes an array as an argument and prints the last element of the array.

function printLastElement(arr2) {
  console.log('The last element is: ' + arr2[4])
}
let array2 = [10, 20, 30, 40, 50]
printLastElement(array2)

// 3. Create a function which takes an object and prints the second element passed in the object

function printObjectSecondElement(obj) {
  let keys = Object.keys(obj)
  console.log('The second object element is:' + obj[keys[1]])
}
let firstObject = {
  name: 'Basit',
  country: 'Afghanistan',
  nationality: 'Afghan',
}
printObjectSecondElement(firstObject)

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// For e.g. If the readingStatus is true show Already read!! , If the reading status is false show not read yet!!

var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
]

function displayReadingStatus(books) {
  for (let book of books) {
    console.log(`Book: ${book.title}`)
    console.log(`Author: ${book.author}`)
    console.log(
      `Reading Status: ${book.readingStatus ? 'Already Read' : 'Not Read Yet'}`,
    )
    console.log('------------------------')
  }
}
displayReadingStatus(library)

// 6.Create an arrow function which takes two parameters and generates a random number between the two numbers given.

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomNumber = generateRandomNumber(1, 10)
console.log('Random Number:', randomNumber)
