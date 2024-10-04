const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
testData = {
  "tournie1": {
    "link": "/en/tournament/m25-qian-daohu/chn/2024/m-itf-chn-2024-012/",
    "cost": 1000
  },
  "tournie2": {
    "link": "/en/tournament/m25-norwich/gbr/2024/m-itf-gbr-2024-013/",
    "cost": 850
  },
  "tournie3": {
    "link": "/en/tournament/m25-monastir/tun/2024/m-itf-tun-2024-061/",
    "cost": 200
  },
}

document.body.style.border = "3px dashed purple";

function getCostByLink(str1, testData) {
  // Loop through each property (tournament) in the testData object
  for (const tournie in testData) {
    const tournamentData = testData[tournie]; // Access the tournament data
    if (tournamentData.link == str1) {
      return tournamentData.cost; // Return cost if link matches
    }
  }
  return null; // Return null if link not found
}


function deletePrizeColumn() {
  const prizeMoney = document.querySelectorAll('td.prize-money')
  const prizeMoneyHeader = document.querySelector('th.prize.money')
  const cat = document.querySelectorAll('td.category')
  const catHeader = document.querySelector('th.category')
  prizeMoney.forEach(e => e.remove())
  prizeMoneyHeader.remove()
  cat.forEach(e => e.remove())
  catHeader.remove()
}

function addCostColumn() {
  const table = document.querySelector('table.table');
  const tableHead = table.querySelector('thead tr');
  const costHeader = document.createElement('th')
  const span = document.createElement('span')
  span.textContent = 'Cost'
  costHeader.appendChild(span)
  costHeader.style.minWidth = '100px'
  tableHead.appendChild(costHeader)

  const trows = table.querySelector('tbody').children
  for (let i = 0; i < trows.length; i++){
    const row = trows[i]
    const link = row.querySelector('td.name a').getAttribute('href')
    const actualCost = getCostByLink(link, testData)
    const cell = document.createElement('td')
    row.appendChild(cell)
    cell.textContent = '£' + actualCost
  }
}

function addDataToCostOfTripColumn() {
  const tbody = document.querySelector('section.page-section table tbody')
  const trows = tbody.children

  for (let i=0; i < trows.length;i++){
    const row = trows[i]
    const nameCell = row.children[0]
    const aTag = nameCell.querySelector('a')
    const link = aTag.getAttribute('href')
    console.log(link)
    const cost = getCostByLink(link, testData)
    console.log(cost)
    if (cost) {
      const costCell = row.children[4]
      while (costCell.firstChild) {costCell.firstChild.remove()}
      costCell.style.height = '70px'
      costCell.style.display = 'flex'

      const divContainer = document.createElement('div')
      divContainer.classList.add('tooltip-container')
      costCell.appendChild(divContainer)
      divContainer.style.position = 'relative'
      divContainer.textContent= '£' + cost
    }
    if (i > 5) {break}
  }
}


setTimeout(() => {
  deletePrizeColumn()
  addCostColumn()
}, 3000)
