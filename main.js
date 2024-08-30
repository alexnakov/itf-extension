const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const kiwiQuery = 'https://www.kiwi.com/en/search/results/manchester-united-kingdom,london-united-kingdom/sofia-bulgaria/2024-10-16/no-return?bags=0.1-'
document.body.style.border = "5px dashed purple";

setTimeout(() => {
  const locations = getLocations()
  const [arrivalDates, returnDates] = getArrivalAndReturnDates()
  changeStatus(locations, arrivalDates, returnDates)
}, 5000)

function changeStatus(locations, arrivalDates, returnDates) {
  const statuses = document.querySelectorAll(`td.status`)
  for (let i = 0; i < statuses.length; i++) {
    const status = statuses[i]
    const location = locations[i]
    const arrivalDate = arrivalDates[i]
    const returnDate = returnDates[i]
    while (status.firstChild) {
      status.children[0].remove()
    }
    const btn = document.createElement('button')
    btn.setAttribute('data-location', String(location))
    btn.setAttribute('data-arrival-date', String(arrivalDate))
    btn.setAttribute('data-return-date', String(returnDate))
    btn.innerText = '£?'
    status.appendChild(btn)
  }
}

function getLocations() {
  const locationsSpans = document.querySelectorAll(`span.location`)
  const locations = []
  for (let location of locationsSpans) {
    locations.push(location.textContent)
  }
  return locations
}

function getArrivalAndReturnDates() {
  const startDates = document.querySelectorAll('span.date');
  const arrivalDates = []
  const returnDates = []
  for (let date of startDates) {
    const text = date.textContent
    const year = text.slice(text.length - 4)
    const numberDate = text.slice(0, 2)
    const month = text.slice(3, 6)
    const dateObj = new Date(year, months.indexOf(month), numberDate)
    returnDates.push(dateObj.toISOString().slice(0, 10))
    dateObj.setDate(dateObj.getDate() - 3) // 3 days before start of main draw
    arrivalDates.push(dateObj.toISOString().slice(0, 10))
  }
  return [arrivalDates, returnDates]
}