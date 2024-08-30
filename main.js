document.body.style.border = "5px dashed purple";

setTimeout(() => {
  const locations = getLocations()
  changeStatus(locations)
}, 5000)

function changeStatus(locations) {
  const statuses = document.querySelectorAll(`td.status`)
  for (let i = 0; i < statuses.length; i++) {
    const status = statuses[i]
    const location = locations[i]
    while (status.firstChild) {
      status.children[0].remove()
    }
    const btn = document.createElement('button')
    btn.setAttribute('data-location', String(location))
    btn.innerText = '£?'
    status.appendChild(btn)
  }
  // for (let status of statuses) {
  //   while (status.firstChild) {
  //     status.children[0].remove()
  //   }
  //   const btn = document.createElement('button')
  //   btn.setAttribute('data-location', )
  //   btn.innerText = '£?'
  //   status.appendChild(btn)
  // } 
}

function getLocations() {
  const locationsSpans = document.querySelectorAll(`span.location`)
  const locations = []
  for (let location of locationsSpans) {
    locations.push(location.textContent)
  }
  return locations
}