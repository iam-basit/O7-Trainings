const names = ['Hamed', 'Basit', 'Malik']
const surname = new Array('Malik', 'Abbassi', 'Abdulmalik')
const age = new Array(19, 20, 50)
// To display the array:
console.log(names)
// To get the last element of an array:
console.log(surname[surname.length - 1])
// To get the last index of an array and -1 because arrays starts from 0:

console.log(surname.length - 1)

// To Change the element of an array using their indexes:
names[1] = 'Khalid'
console.log(names)

//** Here in this array we are using const and we are still able to change some of their values but we are not able to change the whole array values and that is because arrays are not primitive value.

// Example:
// names = [1, 2, 3]
// console.log(names)

// Storing different data types:

const firstName = 'Basit'
const basit = new Array(firstName, 'Malik', 2023 - 1998, surname, 'student')
console.log(basit)

// Practicing arrays Example age calculator:

const calcAge = function (birthYear) {
  return 2023 - birthYear
}

const birthYearDate = new Array(1998, 1997, 1965, 1945)
console.log(calcAge(birthYearDate[1]))

const showAge = []
for (i = 0; i < birthYearDate.length; i++) {
  showAge[i] = calcAge(birthYearDate[i])
  //   console.log(calcAge(birthYearDate[i]))
}
console.log(showAge)
