const buttons = document.querySelectorAll(".ripple")

function clearCircles() {
  const circles = document.querySelectorAll(".circle")
  circles.forEach((circle) => {
    circle.parentElement.removeChild(circle)
  })
}

function listener(e) {
  const x = e.clientX
  const y = e.clientY

  const buttonTop = e.target.offsetTop
  const buttonLeft = e.target.offsetLeft

  const eventPos = {
    x: x - buttonLeft,
    y: y - buttonTop,
  }

  const circle = document.createElement("span")
  circle.classList.add("circle")
  circle.style.top = eventPos.y + "px"
  circle.style.left = eventPos.x + "px"

  e.target.appendChild(circle)
}

function main() {
  buttons.forEach((button) => {
    button.addEventListener("pointerup", (e) => {
      clearCircles()
      listener(e)
    })
  })
}

main()
