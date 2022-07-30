const memoinput = document.getElementById("memo-input")
const addButton = document.getElementById("add-Button")
const memocontainer = document.getElementById("memo-container")

console.log(memoinput.textContent)

// eslint-disable-next-line no-const-assign
addButton = function (e) {
  console.log(e)
}

addButton.onclick = memoinput
