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
// function display() {
//   let x = 5
//   axios.get("http://fizal.me/pokeapi/api/v2/id/"+ x +".json")
//   .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// })
// .then(function () {
// });
// }

// response.data.

class Pokemon {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    // this.hp = hp;
    // this.attack = attack;
    // this.defense = defense;
    // this.abilities = abilities;
    // this.sprite = sprite;
  }
  sprites(id) {
    let src = document.getElementById('adjust')
    let box = document.getElementById("box")
    src.id = "adjust"
    box.appendChild(src)
    if (id > 721) {
      src.src = "https://www.pkparaiso.com/imagenes/sol-luna/sprites/animados/wishiwashi.gif";
    } else {
      src.src= "http://www.pkparaiso.com/imagenes/xy/sprites/animados/swirlix.gif"
    }
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
function pokemonName() {
  sprites(id)
}
