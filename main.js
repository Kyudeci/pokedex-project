let button = document.getElementById("button")
let ball = document.getElementById("pbody")

function shake(){
  ball.classList.add("shake")
}

button.addEventListener("click", shake)
