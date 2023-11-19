function pressPrice1() {
  var td = document.getElementById('td-1')
  var newInput = document.createElement('input')
  td.innerHTML = ''
  newInput.setAttribute('id', 'price1')
  td.appendChild(newInput)
}
function pressPrice2() {
  var td = document.getElementById('td-2')
  var newInput = document.createElement('input')
  td.innerHTML = ''
  newInput.setAttribute('id', 'price2')
  td.appendChild(newInput)
}
function pressPrice3() {
  var td = document.getElementById('td-3')
  var newInput = document.createElement('input')
  td.innerHTML = ''
  newInput.setAttribute('id', 'price3')
  td.appendChild(newInput)
}

function pressGenerate() {
  var itm1 = document.getElementById('item-value-1').value
  var itm2 = document.getElementById('item-value-2').value
  var itm3 = document.getElementById('item-value-3').value
  var prs1 = document.getElementById('price1').value
  var prs2 = document.getElementById('price2').value
  var prs3 = document.getElementById('price3').value
  var total = Number(prs1) + Number(prs2) + Number(prs3)
  document.getElementById(
    'printArea',
  ).innerHTML = `Item 1: ${itm1} Price ${prs1} <br>
  Item 2: ${itm2} Price: ${prs3}<br> 
  Item 3: ${itm3} Price: ${prs3}<br>
  Total = ${total}`
}
function pressPrint() {
  var x = window.open()
  x.document.write(document.getElementById('printArea').innerHTML)
  x.print()
}
