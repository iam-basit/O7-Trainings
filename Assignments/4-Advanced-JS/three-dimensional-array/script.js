// 1. create a three dimensional array of your own choice (array-in array-in array).       2. create an object of food items having 2 keys: veg & non_veg. the 'veg' key contains again an object with the keys 'w' for wheat and 'c' for cheese, whereas 'non_veg' key contains an object having keys 'ck' for chicken kebab and 'ec' for egg curry.           (a) write syntax for printing cheese.                                                   (b) Using for of traverse the object

//1.create a three dimensional array of your own choice (array-in array-in array).
// Declaration and initialization of a 3D array.
let threeDArray = [
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ],
  [
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
  ],
]

//2. create an object of food items having 2 keys: veg & non_veg. the 'veg' key contains again an object with the keys 'w' for wheat and 'c' for cheese, whereas 'non_veg' key contains an object having keys 'ck' for chicken kebab and 'ec' for egg curry.
let objFoodItems = {
  veg: {
    w: 'Wheat',
    c: 'Cheese',
  },
  non_veg: {
    ck: 'Chicken',
    ec: 'Egg Curry',
  },
}
// (a) write syntax for printing cheese.
console.log(objFoodItems.veg.c)

// (b) Using for of traverse the object

// *** We can't use for of to traverse the object but instead we can use For in loop.
for (let values in objFoodItems) {
  console.log(values)
}
