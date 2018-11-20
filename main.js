let button = document.getElementById("random")
let ball = document.getElementById("new")
let tripleball = document.getElementById("display")
let box1 = document.getElementById("box")
let zoro = document.getElementById('adjust')
let input = document.querySelector('input');
let ovr = document.querySelector("html")
let submit = document.getElementById("submit")
let basic1 = document.getElementById("pkmn1")
let basic2 = document.getElementById("pkmn2")
let basic3 = document.getElementById("pkmn3")

function shake(){
  // ball.classList.add("shake")
  document.getElementById("random").style.visibility = "visible"
  tripleball.classList.add("appear")
  ball.src = "masterball-open.png"
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
function xyz(event) {
  if (input.value == "solgaleo") {
    box1.style.background = "url('sol2.png') no-repeat center center"
    ovr.style.background = "#033e50 url(alola.jpg) no-repeat center center fixed"
  } else if (input.value == "lunala") {
    box1.style.background = "url('sol2.png') no-repeat center center"
    ovr.style.background = "#033e50 url(alola.jpg) no-repeat center center fixed"
  } else if (input.value == "pikachu") {
    ovr.style.background = "#ffd624 url(pikaw.png) no-repeat center center fixed"
  } else {
    box1.style.background = "white"
  }
}

// Events
ball.addEventListener("click", shake);
button.addEventListener("click", display);
basic1.addEventListener("click", zoroark);
basic1.addEventListener("mouseover", ani);
basic1.addEventListener("mouseout", nani);
basic2.addEventListener("click", lugia);
basic2.addEventListener("mouseover", anib);
basic2.addEventListener("mouseout", nanib);
basic3.addEventListener("click", kartana);
basic3.addEventListener("mouseover", anic);
basic3.addEventListener("mouseout", nanic);
submit.addEventListener("click", search);
submit.addEventListener("click", xyz)

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
box1.style.background = "white"
}
function zoroark() {
  axios.get("http://fizal.me/pokeapi/api/v2/id/571.json")
  .then(function (response) {
  console.log(response.data);
  let somePokemon1 = new Pokemon(571, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon1.sprites()
  somePokemon1.stats()
})
box1.style.background = "black url('dark.gif') no-repeat center center"
}
function lugia() {
  axios.get("http://fizal.me/pokeapi/api/v2/id/249.json")
  .then(function (response) {
  console.log(response.data);
  let somePokemon1 = new Pokemon(249, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon1.sprites()
  somePokemon1.stats()
})
box1.style.background = "url('water.gif')"
}
function kartana() {
  axios.get("http://fizal.me/pokeapi/api/v2/id/798.json")
  .then(function (response) {
  console.log(response.data);
  let somePokemon1 = new Pokemon(798, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon1.sprites()
  somePokemon1.stats()
})
box1.style.background = "pink url('ultforest.jpg') no-repeat center center"
}
function search(event) {
  axios.get("http://fizal.me/pokeapi/api/v2/name/"+ input.value +".json")
  .then(function (response) {
  console.log(response.data);
  let somePokemon = new Pokemon(response.data.id, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon.sprites()
  somePokemon.stats()
  if (response.data.id > 792 && response.data.id < 801) {
    box1.style.background = "url(ultrawh.jpg) no-repeat left bottom fixed"
  }
})
box1.style.background = "white"
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
    // let surge = this.abilities;
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

// Create search bar-- input
// Secret codes, unsure if will make into final
