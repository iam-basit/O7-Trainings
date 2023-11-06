function btn1() {
  var input1 = document.getElementById('input-1').value
  var input2 = (document.getElementById('input-2').value = input1)
  console.log(input2)
}

function btn2() {
  alert('Hello')
  alert(document.getElementById('input-1').value)
  alert('Bye')
}
function btn3() {
  var input1 = document.getElementById('input-1').value
  var div2 = document.getElementById('div-2')
  div2.innerText = input1
}

function btn4() {
  var input1 = document.getElementById('input-1').value
  var input2 = document.getElementById('input-2').value

  var div1 = document.getElementById('div-1')
  div1.innerText = 'Hello' + input1 + input2
}

function btn5() {
  var div2 = document.getElementById('div-2')
  div2.style.backgroundImage = "url('persian-cat.jpg')"
}
