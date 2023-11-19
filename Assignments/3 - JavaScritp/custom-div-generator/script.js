function generateDivs() {
  var num = document.getElementById('numInput').value

  var isEven = num % 2 === 0
  var outputDiv = document.getElementById('output')
  outputDiv.innerHTML = ''

  for (var i = 1; i <= num; i++) {
    var newDiv = document.createElement('div')
    if (isEven) {
      newDiv.className = 'red'
    } else {
      newDiv.className = 'yellow'
    }
    outputDiv.appendChild(newDiv)
  }
}
