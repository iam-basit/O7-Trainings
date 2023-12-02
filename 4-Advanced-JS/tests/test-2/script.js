var namesList = []

function addBtn() {
  var names = document.getElementById('names').value
  namesList.push(names)
  console.log(namesList)
}

function showBtn() {
  var enterdNames = document.getElementById('enterdNames')

  for (var i = 0; i < namesList.length; i++) {
    var newAddedOptions = document.createElement('option')
    newAddedOptions.innerText = namesList[i]
    enterdNames.appendChild(newAddedOptions)
  }

  console.log(namesList)
}
