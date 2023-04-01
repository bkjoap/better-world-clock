//los Angeles elements from moment
let losAngelesElement = document.querySelector('#los-angeles')
let losAngelesDateElement = document.querySelector('#los-angeles .date')
let losAngelesTimeElement = document.querySelector('#los-angeles .time')

let losAngelesCurrentDate = moment()
  .tz('America/Los_Angeles')
  .format('MMMM D, YYYY')

let losAngelesCurrentTime = moment().tz('America/Los_Angeles').format('h:m')
let losAngelesCurrentMeridiem = moment().tz('America/Los_Angeles').format('A')

losAngelesTimeElement.innerHTML = `${losAngelesCurrentTime} <span class="small">${losAngelesCurrentMeridiem}</span>`
losAngelesDateElement.innerHTML = `${losAngelesCurrentDate}`
