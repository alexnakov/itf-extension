document.body.style.border = "5px dashed purple";

setTimeout(() => {
  changeStatus()
}, 3000)

function changeStatus() {
  const statuses = document.querySelectorAll(`td.status`)
  for (let status of statuses) {
    status.children[0].remove()
    status.children[0].remove()
    const btn = document.createElement('button')
    btn.innerText = '£?'
    status.appendChild(btn)
  } 
}