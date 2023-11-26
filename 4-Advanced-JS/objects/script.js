// order in objects doesn't matter
const myFriends = ['Me', 'I', 'Myself']
const profile = {
  firstName: 'Basit',
  lastName: 'Malik',
  occupation: 'Student',
  age: 2023 - 1998,
  friends: ['Me', 'I', 'Myself'],
}
//* Ways that we can retrieve data form an object:

// console.log(profile)
// console.log(profile['lastName']) // bracket notation
// console.log(profile.lastName) // dot notation

//* simple trick:
const nameKey = 'Name'
// console.log(profile['first' + nameKey])
// console.log(profile['last' + nameKey])

//* Exercise 1: for dot notation and bracket notation:

// const instruction = prompt(
//   'What do you want to know about Basit? Choose between firstName,lastName,age,occupation,friends.',
// )

// Here in dot notation, it show undefined because instruction is not any kay name in the object.
// console.log(profile.instruction)

// Here in bracket notation it works because it is able to change the instruction var to actual key name available in given prompt.
// console.log(profile[instruction])

//* How add keys and new values using dot and bracket notation:

profile.location = 'India'
profile['facebook'] = 'Basit Malik'
// console.log(profile)

//* Exercise 2: git this done "Basit has 3 friends,and his best friend is I", Basit, 3 ,I should be dynamic.

console.log(
  `${profile['first' + nameKey]} has ${
    profile.friends.length
  } friends, and his best friend is ${profile.friends[1]}`,
)

//*? How this works i need to know: profile.friends.length
