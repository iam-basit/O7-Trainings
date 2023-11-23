/* create an array having name of 5 friends
print the type of array and length 
add a new friend at the beginning and 
add another friend name at last 
replace the friend at position [3] with Billgeats 
traverse each friend name 
delete the friend name present at last and added to first position,print the array   */
var friends = ['Basit', 'Walid', 'Mohammad', 'Suliman', 'Hamed']
console.log(typeof friends)
console.log(friends.length)
friends.unshift('Boss')
console.log(friends)
friends.push('Haroon')
friends[3] = 'Billgeats'
console.log(friends)

for (var i = 0; i < friends.length; i++) {
  console.log(friends[i])
}

var deleted = friends.pop()
friends.unshift(deleted)

console.log(friends)
