let button = document.getElementById("button")
let ball = document.getElementById("new")
let triple = document.getElementById("display")

function shake(){
  ball.classList.add("shake")
  document.getElementById("return").style.visibility = "visible"
  triple.classList.add("appear")
}

ball.addEventListener("click", shake);


class Pokemon {
  constructor(name) {
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.abilities = abilities
  }
}
