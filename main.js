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
  axios.get("http://fizal.me/pokeapi/api/v2/id/"+ x +".json")
  .then(function (response) {
  console.log(response.data);
  let somePokemon = new Pokemon(x, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[2].ability.name, response.data.abilities[1].ability.name, response.data.abilities[0].ability.name, response.data.abilities);
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
  constructor(id, name, hp, attack, defense, ability1, ability2, ability3, abilities) {
    this.name = name;
    this.id = id;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities
    this.ability1 = ability1;
    this.ability2 = ability2;
    this.ability3 = ability3;
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
    let nombre = document.createTextNode("Name: " + this.name)
    let health = document.createTextNode("HP: " + this.hp)
    let atk = document.createTextNode("Attack: " + this.attack)
    let def = document.createTextNode("Defense: " + this.defense)
    let abi = document.createTextNode("Ability: " + this.ability1 + ", " + this.ability2 + ", " + this.ability3)
    let abi2 = document.createTextNode("Ability: " + this.ability2 + ", " + this.ability3)
    let abi3 = document.createTextNode("Ability: " + this.ability3)
    let br = document.createElement("br")
    let br2 = document.createElement("br")
    let br3 = document.createElement("br")
    let br4 = document.createElement("br")
    let surge = this.abilities;
    ul.innerHTML = ""
    ul.appendChild(li)
    li.appendChild(nombre)
    li.appendChild(br)
    li.appendChild(health)
    li.appendChild(br2)
    li.appendChild(atk)
    li.appendChild(br3)
    li.appendChild(def)
    li.appendChild(br4)
    for (var i = 0; i <= surge.length; i++) {
      if (surge.length == 3) {
          li.appendChild(abi)
        } else if (surge.length == 2) {
            li.appendChild(abi2)
          } else {
              li.appendChild(abi3)
            }
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
