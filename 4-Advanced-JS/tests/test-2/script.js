var namesList = []
function addBtn() {
  var names = document.getElementById('names').value
  namesList.push(names)
}

function showBtn() {
  var enterdNames = document.getElementById('enterdNames')
  var newAddedOptions = document.createElement('option')

  newAddedOptions.innerHTML = enterdNames
  enterdNames.appendChild(newAddedOptions)
  console.log(namesList)
}
