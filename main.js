let button = document.getElementById("button")
let ball = document.getElementById("new")
let triple = document.getElementById("display")

function shake(){
  ball.classList.add("shake")
  document.getElementById("return").style.visibility = "visible"
  triple.classList.add("appear")
}

ball.addEventListener("click", shake);

// // Make the call
function display() {
  let x = Math.floor(Math.random() * 802) + 1
  axios.get("http://fizal.me/pokeapi/api/v2/id/"+ x +".json")
  .then(function (response) {
  console.log(response);
  let somePokemon = new Pokemon(x, response.data.name);
  somePokemon.sprites()
})
}

class Pokemon {
  constructor(id,name) {
    this.name = name;
    this.id = id;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.sprite = this.name;
  }
  sprites() {
    let src = document.getElementById('adjust')
    let box = document.getElementById("box")
    src.id = "adjust"
    box.appendChild(src)
    //Appear the sprite that leads to the future.
    if (this.id > 721) {
      src.src = "https://www.pkparaiso.com/imagenes/sol-luna/sprites/animados/"+ this.sprite +".gif";
    } else {
      src.src= "http://www.pkparaiso.com/imagenes/xy/sprites/animados/"+ this.sprite +".gif"
    }
  }
  stats() {

  }
}
class Trainer {
  constructor() {
    this.pokemon = []
  }
  all() {

  }
  get(name){

  }
}
