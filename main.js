let button = document.getElementById("return")
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
function ani() {
  basic1.src = "pokeball-ani.gif"
}
function anib() {
  basic2.src = "ultraball-ani.gif"
}
function anic() {
  basic3.src = "beastball-ani.gif"
}
function nani() {
  basic1.src = "pokeball2.png"
}
function nanib() {
  basic2.src = "ultraball.png"
}
function nanic() {
  basic3.src = "beastball.png"
}
// Events
ball.addEventListener("click", shake);
button.addEventListener("click", display);
// basic1.addEventListener("click", choice1);
basic1.addEventListener("mouseover", ani);
basic1.addEventListener("mouseout", nani);
basic2.addEventListener("click", choice2);
basic2.addEventListener("mouseover", anib);
basic2.addEventListener("mouseout", nanib);
// basic3.addEventListener("click", choice3);
basic3.addEventListener("mouseover", anic);
basic3.addEventListener("mouseout", nanic);

// // Make the call
function display() {
  let x = Math.floor(Math.random() * 802) + 1
  axios.get("http://fizal.me/pokeapi/api/v2/id/"+ x +".json")
  .then(function (response) {
  console.log(response.data);
  let somePokemon = new Pokemon(x, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon.sprites()
  somePokemon.stats()
})
}
function choice2() {
  axios.get("http://fizal.me/pokeapi/api/v2/id/249.json")
  .then(function (response) {
  console.log(response.data);
  let somePokemon1 = new Pokemon(249, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon1.sprites()
  somePokemon1.stats()
})
}

class Pokemon {
  constructor(id, name, hp, attack, defense, spatk, spdef, speed, abilities) {
    this.name = name;
    this.id = id;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.spatk = spatk;
    this.spdef = spdef;
    this.speed = speed;
    this.abilities = abilities;
    // this.ability1 = ability1;
    // this.ability2 = ability2;
    // this.ability3 = ability3;
    this.sprite = this.name;
  }
  sprites() {
    let src = document.getElementById('adjust')
    let box = document.getElementById("box")
    src.id = "adjust"
    box.appendChild(src)
    let spr = this.sprite
    let fix = spr.replace('-','')
    //Appear the sprite that leads to the future.
    if (this.id < 721) {
      src.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ fix +".gif";
    } else {
      src.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ fix +".gif"
    }
  }
  stats() {
    let li = document.createElement("li");
    let ul = document.getElementById("data");
    let nombre = document.createTextNode("Name: " + this.name)
    let health = document.createTextNode("HP: " + this.hp)
    let atk = document.createTextNode("Attack: " + this.attack)
    let def = document.createTextNode("Defense: " + this.defense)
    let spatk = document.createTextNode("Special Attack: " + this.spatk)
    let spdef = document.createTextNode("Special Defense: " + this.spdef)
    let speed = document.createTextNode("Speed: " + this.speed)
    // let abi = document.createTextNode("Ability: " + this.ability1 + ", " + this.ability2 + ", " + this.ability3)
    // let abi2 = document.createTextNode("Ability: " + this.abilities + ", " + this.abilities)
    let abi3 = document.createTextNode("Ability: " + this.abilities)
    let br = document.createElement("br")
    let br2 = document.createElement("br")
    let br3 = document.createElement("br")
    let br4 = document.createElement("br")
    let br5 = document.createElement("br")
    let br6 = document.createElement("br")
    let br7 = document.createElement("br")
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
    li.appendChild(spatk)
    li.appendChild(br5)
    li.appendChild(spdef)
    li.appendChild(br6)
    li.appendChild(speed)
    li.appendChild(br7)
    // li.appendChild(abi)
    // li.appendChild(abi2)
    li.appendChild(abi3)
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
