function shopClicked() {
  var text = document.getElementById('content')
  text.style.display = text.style.display == 'none' ? 'block' : 'none'

  // Add event listener to close the dropdown when clicking outside of it
  document.addEventListener('click', function (event) {
    var dropdownButton = document.getElementById('dropdown-button')
    var dropdownContent = document.getElementById('content')

    // Check if the clicked element is not the dropdown button or content
    if (
      event.target !== dropdownButton &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.style.display = 'none'
    }
  })
}
