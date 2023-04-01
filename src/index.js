//los Angeles elements from moment
let losAngelesElement = document.querySelector('#los-angeles')
let losAngelesDateElement = document.querySelector('#los-angeles .date')
let losAngelesTimeElement = document.querySelector('#los-angeles .time')

let losAngelesCurrentDate = moment()
  .tz('America/Los_Angeles')
  .format('MMMM D, YYYY')

let losAngelesCurrentTime = moment().tz('America/Los_Angeles').format('hh:mm')
let losAngelesCurrentMeridiem = moment().tz('America/Los_Angeles').format('A')

losAngelesTimeElement.innerHTML = `${losAngelesCurrentTime} <span class="small">${losAngelesCurrentMeridiem}</span>`
losAngelesDateElement.innerHTML = `${losAngelesCurrentDate}`

//Sydney elements from moment
let sydneyElement = document.querySelector('#sydney')
let sydneyDateElement = document.querySelector('#sydney .date')
let sydneyTimeElement = document.querySelector('#sydney .time')

let sydneyCurrentDate = moment().tz('Australia/Sydney').format('MMMM D, YYYY')

let sydneyCurrentTime = moment().tz('Australia/Sydney').format('hh:mm')
let sydneyCurrentMeridiem = moment().tz('Australia/Sydney').format('A')

sydneyTimeElement.innerHTML = `${sydneyCurrentTime} <span class="small">${sydneyCurrentMeridiem}</span>`
sydneyDateElement.innerHTML = `${sydneyCurrentDate}`
