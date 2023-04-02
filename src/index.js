setInterval(function time() {
  //Los Angeles elements from moment
  let losAngelesElement = document.querySelector('#los-angeles')
  let losAngelesDateElement = document.querySelector('#los-angeles .date')
  let losAngelesTimeElement = document.querySelector('#los-angeles .time')

  let losAngelesCurrentDate = moment()
    .tz('America/Los_Angeles')
    .format('MMMM D, YYYY')

  let losAngelesCurrentTime = moment()
    .tz('America/Los_Angeles')
    .format('hh:mm:ss')
  let losAngelesCurrentMeridiem = moment().tz('America/Los_Angeles').format('A')

  losAngelesTimeElement.innerHTML = `${losAngelesCurrentTime} <span class="small">${losAngelesCurrentMeridiem}</span>`
  losAngelesDateElement.innerHTML = `${losAngelesCurrentDate}`

  //Tokyo elements from moment
  let tokyoElement = document.querySelector('#tokyo')
  let tokyoDateElement = document.querySelector('#tokyo .date')
  let tokyoTimeElement = document.querySelector('#tokyo .time')

  let tokyoCurrentDate = moment().tz('Asia/Tokyo').format('MMMM D, YYYY')

  let tokyoCurrentTime = moment().tz('Asia/Tokyo').format('hh:mm:ss')
  let tokyoCurrentMeridiem = moment().tz('Asia/Tokyo').format('A')

  tokyoTimeElement.innerHTML = `${tokyoCurrentTime} <span class="small">${tokyoCurrentMeridiem}</span>`
  tokyoDateElement.innerHTML = `${tokyoCurrentDate}`

  //Current elements from moment
  let currentElement = document.querySelector('#current')
  let currentDateElement = document.querySelector('#current .date')
  let currentTimeElement = document.querySelector('#current .time')
  let currentLocation = moment.tz.guess()
  let currentCurrentDate = moment()
    .tz(`${currentLocation}`)
    .format('MMMM D, YYYY')

  let currentCurrentTime = moment().tz(`${currentLocation}`).format('hh:mm:ss')
  let currentCurrentMeridiem = moment().tz(`${currentLocation}`).format('A')

  currentTimeElement.innerHTML = `${currentCurrentTime} <span class="small">${currentCurrentMeridiem}</span>`
  currentDateElement.innerHTML = `${currentCurrentDate}`
}, 1000)

//change data for selected city

function updateCity(event) {
  let timeZone = event.target.value
  if (timeZone === 'Current') {
    timeZone = moment.tz.guess()
  }
  console.log(timeZone)
  let cityName = timeZone.replace('_', ' ').split('/')[1]
  let cityCurrentDate = moment().tz(`${timeZone}`).format('MMMM D, YYYY')
  let cityCurrentTime = moment().tz(`${timeZone}`).format('hh:mm:ss')
  let cityCurrentMeridiem = moment().tz(`${timeZone}`).format('A')
  let cityElement = document.querySelector('.allCities')
  cityElement.innerHTML = ` <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityCurrentDate}</div>
                </div>
                <div class="time">${cityCurrentTime} <span class="small">${cityCurrentMeridiem}</span></div>
            </div>
            </br>
            <a href="/">All Cities</a>`
}

let selectedCityElement = document.querySelector('#cities')
selectedCityElement.addEventListener('change', updateCity)
