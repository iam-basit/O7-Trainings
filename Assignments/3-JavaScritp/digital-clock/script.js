const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampmEl = document.getElementById('ampm')

function updateClock() {
  let hour = new Date().getHours()
  let minute = new Date().getMinutes()
  let second = new Date().getSeconds()
  let ampm = 'AM'

  if (hour > 12) {
    hour = hour - 12
    ampm = 'PM'
  }

  // to show Two digits:
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second
  hours.innerText = hour
  minutes.innerText = minute
  seconds.innerText = second
  ampmEl.innerText = ampm

  setTimeout(() => {
    updateClock()
  }, 1000)
}
updateClock()
