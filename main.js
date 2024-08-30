document.body.style.border = "5px dashed purple";

setTimeout(() => {
  changeStatus()
}, 3000)

function changeStatus() {
  const statuses = document.querySelectorAll(`td.status`)
  for (let status of statuses) {
    let textNode = document.createTextNode("Hello World"); 
    status.appendChild(textNode)
  }
  
}