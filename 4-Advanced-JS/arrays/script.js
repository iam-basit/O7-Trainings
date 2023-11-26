const names = ['Hamed', 'Basit', 'Malik']
const surname = new Array('Malik', 'Abbassi', 'Abdulmalik')
const age = new Array(19, 20, 50)
// *To display the array:
// console.log(names)
// *To get the last element of an array:
// console.log(surname[surname.length - 1])
// *To get the last index of an array and -1 because arrays starts from 0:

// console.log(surname.length - 1)

// *To Change the element of an array using their indexes:
names[1] = 'Khalid'
// console.log(names)

//** Here in this array we are using const and we are still able to change some of their values but we are not able to change the whole array values and that is because arrays are not primitive value.

// Example:
// names = [1, 2, 3]
// console.log(names)

// *Storing different data types:

const firstName = 'Basit'
const basit = new Array(firstName, 'Malik', 2023 - 1998, surname, 'student')
// console.log(basit)

// *Practicing arrays Example age calculator:

const calcAge = function (birthYear) {
  return 2023 - birthYear
}

const birthYearDate = new Array(1998, 1997, 1965, 1945)
// console.log(calcAge(birthYearDate[1]))

const showAge = []
for (i = 0; i < birthYearDate.length; i++) {
  showAge[i] = calcAge(birthYearDate[i])
  //   console.log(calcAge(birthYearDate[i]))
}
// console.log(showAge)

// ***Part 2: Basic array operations(Methods)
console.log('Part 2: Basic array operations(Methods)')

//* Array.push(): To add element at the end of array, for more info checkout the note.md file.

const newNames = ['Hamed', 'Basit', 'Malik']
newNames.push('Nasrat')
// console.log(newNames.length)

//* Array.unshift(): To add element at the beginning of array.

newNames.unshift('Miwand')
// console.log(newNames)

//* Array.pop(): To remove the last element of array.

const poppedEl = newNames.pop()
// console.log(poppedEl)
// console.log(newNames)

//* Array.shift(): To remove the first element of array.

const shiftedEl = newNames.shift()
// console.log(shiftedEl)
// console.log(newNames)

//* Array.indexOf(): To find the index of an array.

const findIndex = newNames.indexOf('Basit')
// console.log(`Index of Basit in the array is: ${findIndex}`)

//* Array.includes() ES6 and it uses the strict: To show weather an element is available in array or not.

console.log(newNames)
console.log(newNames.includes('Khalid'))
console.log(newNames.includes('Basit'))
