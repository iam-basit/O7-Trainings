function addition() {
  document.getElementById('addition').innerHTML = ''
  var count = document.getElementById('plus').value

  for (var i = 0; i < count; i++) {
    var img = document.createElement('img')
    img.src = 'addition.png'
    document.getElementById('addition').appendChild(img)
    // img.setAttribute('class', 'appended')
    // img.setAttribute('value', `${i + 1}`)
    // img.setAttribute('onclick', 'click()')
    img.setAttribute('onclick', 'imageClickFunctionAddition(' + (i + 1) + ')')
    // img.addEventListener('click', function () {
    //   imageClickFunction(i, count)
    // })
  }
}
function imageClickFunctionAddition(index) {
  var inputValue = document.getElementById('plus').value
  document.getElementById('plus').value = Number(inputValue) + Number(index)
  document.getElementById('addition').style.display = 'none'
}

function subtraction() {
  document.getElementById('addition').innerHTML = ''
  var count = document.getElementById('plus').value

  for (var i = 0; i < count; i++) {
    var img = document.createElement('img')
    img.src = 'sub.jpeg'
    document.getElementById('addition').appendChild(img)
    img.setAttribute(
      'onclick',
      'imageClickFunctionSubtraction(' + (i + 1) + ')',
    )
  }
}

function imageClickFunctionSubtraction(index) {
  var inputValue = document.getElementById('plus').value
  document.getElementById('plus').value = Number(inputValue) - Number(index)
  document.getElementById('addition').style.display = 'none'
}

function multiplication() {
  document.getElementById('addition').innerHTML = ''
  var count = document.getElementById('plus').value

  for (var i = 0; i < count; i++) {
    var img = document.createElement('img')
    img.src = 'multi.png'
    document.getElementById('addition').appendChild(img)
    img.setAttribute(
      'onclick',
      'imageClickFunctionMultiplication(' + (i + 1) + ')',
    )
  }
}

function imageClickFunctionMultiplication(index) {
  var inputValue = document.getElementById('plus').value
  document.getElementById('plus').value = Number(inputValue) * Number(index)
  document.getElementById('addition').style.display = 'none'
}

function division() {
  document.getElementById('addition').innerHTML = ''
  var count = document.getElementById('plus').value

  for (var i = 0; i < count; i++) {
    var img = document.createElement('img')
    img.src = 'divi.png'
    document.getElementById('addition').appendChild(img)
    img.setAttribute('onclick', 'imageClickFunctionDivision (' + (i + 1) + ')')
  }
}

function imageClickFunctionDivision(index) {
  var inputValue = document.getElementById('plus').value
  document.getElementById('plus').value = Number(inputValue) / Number(index)
  document.getElementById('addition').style.display = 'none'
}
