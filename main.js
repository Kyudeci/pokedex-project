let button = getElementById("button")
let ball = getElementById("pokeball")

function shake(){
  ball.addClass('animated shake')
}

button.addEventListener("click", shake)
