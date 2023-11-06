function create() {
  var color = document.getElementById('color').value
  var height = document.getElementById('height').value
  var width = document.getElementById('width').value
  var bg_color = document.getElementById('bg-color').value
  var text = document.getElementById('text').value

  //   console.log(width)

  let div = document.createElement('div')
  div.id = 'content'
  div.style.color = color
  div.style.height = height
  div.style.width = width
  div.style.backgroundColor = bg_color
  div.innerText = text

  document.body.appendChild(div)
}
