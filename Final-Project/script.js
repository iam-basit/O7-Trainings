function shopClicked() {
  var text = document.getElementById('content')
  if (text.classList.contains('block')) {
    text.classList.remove('block')
    text.classList.add('none')
  } else {
    text.classList.add('block')
    text.classList.remove('none')
  }
  // Add event listener to close the dropdown when clicking outside of it
  document.addEventListener('click', function (event) {
    var dropdownButton = document.getElementById('dropdown-button')
    var dropdownContent = document.getElementById('content')
    var text = document.getElementById('content')
  })
}
