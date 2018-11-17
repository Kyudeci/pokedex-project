let button = document.getElementById("button")
let ball = document.getElementById("new")
let triple = document.getElementById("display")

let basic1 = document.getElementById("pkmn1")
let basic2 = document.getElementById("pkmn2")
let basic3 = document.getElementById("pkmn3")


function shake(){
  ball.classList.add("shake")
  document.getElementById("return").style.visibility = "visible"
  triple.classList.add("appear")
}

ball.addEventListener("click", shake);
basic1.addEventListener("click", display);
// basic2.addEventListener("click", choice2);
// basic3.addEventListener("click", choice3);

// // Make the call
function display() {
  let x = Math.floor(Math.random() * 802) + 1
  let y = Math.floor(Math.random() * 1)
  axios.get("http://fizal.me/pokeapi/api/v2/id/"+ x +".json")
  .then(function (response) {
  console.log(response);
  let somePokemon = new Pokemon(x, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[y].ability.name);
  somePokemon.sprites()
  somePokemon.stats()
})
}
// function choice1() {
//   let x = Math.floor(Math.random() * 802) + 1
//   axios.get("http://fizal.me/pokeapi/api/v2/id/"+ x +".json")
//   .then(function (response) {
//   console.log(response);
//   let somePokemon = new Pokemon(x, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[1,2]);
//   somePokemon.sprites()
// })
// }

class Pokemon {
  constructor(id, name, hp, attack, defense, abilities) {
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
    if (this.id < 721) {
      src.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ this.sprite +".gif";
    } else {
      src.src= "https://www.pkparaiso.com/imagenes/sol-luna/sprites/animados/"+ this.sprite +".gif"
    }
  }
  stats() {
    let li = document.createElement("li");
    let ul = document.getElementById("data");
    let stat = [("HP: " + this.hp),  (" Attack: " + this.attack), (" Defense: " + this.defense), (" Abilities: " + this.abilities)];
    ul.innerHTML = ""
    for (var i = 0; i < stat.length; i++) {
      let textContent = document.createTextNode(stat[i])
      li.appendChild(textContent)
      ul.appendChild(li)
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
