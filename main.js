// Background
let ovr = document.querySelector("html");
// Buttons
let button = document.getElementById("random");
let mega = document.getElementById("form");
let megaX = document.getElementById("shinkaX");
let megaY = document.getElementById("shinkaY");
let revert = document.getElementById("revert");
let orig = document.getElementById("return");
let necroz = document.getElementById("necrozma");
// Search
let input = document.querySelector('input');
let submit = document.getElementById("submit");
// Information display
let box1 = document.getElementById("box");
let zoro = document.getElementById('adjust');
// Poké Balls
let ball = document.getElementById("new");
let tripleball = document.getElementById("display");
let basic1 = document.getElementById("pkmn1");
let basic2 = document.getElementById("pkmn2");
let basic3 = document.getElementById("pkmn3");

function shake(){
  // ball.classList.add("shake")
  button.style.visibility = "visible";
  input.style.visibility = "visible";
  submit.style.visibility = "visible";
  tripleball.classList.add("appear");
  ball.style.visibility = "hidden";
}
function ani() {
  basic1.src = "Pokeball-ani.gif";
}
function anib() {
  basic2.src = "Reshiramball-ani.gif";
}
function anic() {
  basic3.src = "Beastball-ani.gif";
}
function nani() {
  basic1.src = "Pokeball2.png";
}
function nanib() {
  basic2.src = "Reshiramball.png";
}
function nanic() {
  basic3.src = "Beastball.png";
}
// Events
ball.addEventListener("click", shake);
button.addEventListener("click", display);
basic1.addEventListener("click", zoroark);
basic1.addEventListener("mouseover", ani);
basic1.addEventListener("mouseout", nani);
basic2.addEventListener("click", reshiram);
basic2.addEventListener("mouseover", anib);
basic2.addEventListener("mouseout", nanib);
basic3.addEventListener("click", kartana);
basic3.addEventListener("mouseover", anic);
basic3.addEventListener("mouseout", nanic);
submit.addEventListener("click", search);
// Make the call
function display() {
  let x = Math.floor(Math.random() * 802) + 1
  axios.get("https://fizal.me/pokeapi/api/v2/id/"+ x +".json")
  .then(function (response) {
  let somePokemon = new Pokemon(x, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon.sprites()
  somePokemon.stats()
})
box1.style.background = "white"
}
function zoroark() {
  axios.get("https://fizal.me/pokeapi/api/v2/id/571.json")
  .then(function (response) {
  let somePokemon1 = new Pokemon(571, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon1.sprites()
  somePokemon1.stats()
})
box1.style.background = "black url('dark.gif') no-repeat center center"
}
function reshiram() {
  axios.get("https://fizal.me/pokeapi/api/v2/id/643.json")
  .then(function (response) {
  console.log(response.data);
  let somePokemon1 = new Pokemon(643, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon1.sprites()
  somePokemon1.stats()
})
box1.style.background = "url('flame.gif')"
}
function kartana() {
  axios.get("https://fizal.me/pokeapi/api/v2/id/798.json")
  .then(function (response) {
  console.log(response.data);
  let somePokemon1 = new Pokemon(798, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon1.sprites()
  somePokemon1.stats()
})
box1.style.background = "pink url('ultforest.jpg') no-repeat center center"
}
function search() {
  let v = input.value
  let w = v.replace('oo','o-o')
  let wt = v.replace('s','s-incarnate')
  if (input.value == "mimikyu") {
    input.value = "mimikyu-disguised"
  } else if (input.value == "tapu koko" || input.value == "tapukoko") {
    input.value = "tapu-koko"
  } else if (input.value == "tapu fini" || input.value == "tapufini") {
    input.value = "tapu-fini"
  } else if (input.value == "tapu bulu" || input.value == "tapubulu") {
    input.value = "tapu-bulu"
  } else if (input.value == "tapu lele" || input.value == "tapulele") {
    input.value = "tapu-lele"
  } else if (input.value == "deoxys") {
    input.value = "deoxys-normal"
  } else if (input.value == "lycanroc") {
    input.value = "lycanroc-midday"
  } else if (input.value == "wishiwashi") {
    input.value = "wishiwashi-solo"
  } else if (input.value == "shaymin") {
    input.value = "shaymin-land"
  } else if (input.value == "aegislash") {
    input.value = "aegislash-shield"
  } else if (input.value == "basculin") {
    input.value = "basculin-red-striped"
  } else if (input.value == "darmanitan") {
    input.value = "darmanitan-standard"
  } else if (input.value == "gourgeist") {
    input.value = "gourgeist-average"
  } else if (input.value == "pumpkaboo") {
    input.value = "pumpkaboo-average"
  } else if (input.value == "hakomoo" || input.value == "jangmoo" || input.value == "kommoo" ) {
    input.value = w
  } else if (input.value == "keldeo") {
    input.value = "keldeo-ordinary"
  } else if (input.value == "meloetta") {
    input.value = "meloetta-aria"
  } else if (input.value == "meowstic") {
    input.value = "meowstic-male"
  } else if (input.value == "mimejr" || input.value == "mime jr") {
    input.value = "mime-jr"
  } else if (input.value == "minior") {
    input.value = "minior-red-meteor"
  } else if (input.value == "mrmime" || input.value == "mr mime") {
    input.value = "mr-mime"
  } else if (input.value == "oricorio") {
    input.value = "oricorio-baile"
  } else if (input.value == "porygonz") {
    input.value = "porygon-z"
  } else if (input.value == "giratina" ) {
    input.value = "giratina-altered"
  } else if (input.value == "thundurus" ) {
    input.value = wt
  } else if (input.value == "tornadus" ) {
    input.value = wt
  } else if (input.value == "landorus" ) {
    input.value = wt
  } else if (input.value == "typenull" ) {
    input.value = "type-null"
  } else if (input.value == "wormadam" ) {
    input.value = "wormadam-plant"
  }
  axios.get("https://fizal.me/pokeapi/api/v2/name/"+ input.value +".json")
  .then(function (response) {
  console.log(response.data);
  let somePokemon = new Pokemon(response.data.id, response.data.species.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.stats[2].base_stat, response.data.stats[1].base_stat, response.data.stats[0].base_stat, response.data.abilities[0].ability.name);
  somePokemon.sprites()
  somePokemon.stats()
  if (response.data.id > 792 && response.data.id < 801) {
    box1.style.background = "url(ultrawh.jpg) no-repeat center center"
    ovr.style.background = "white url(UBart.png) no-repeat center center fixed"
  }
})
box1.style.background = "white";
input.value = ""
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
    this.sprite = this.name;
  }
  sprites() {
    let src = document.getElementById("adjust");
    let box = document.getElementById("box");
    src.id = "adjust";
    box.appendChild(src);
    let spr = this.sprite;
    let fix = spr.replace('-','');
//Appear the sprite that leads to the future.
    src.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ fix +".gif";
    function xyz() {
      if (spr == "solgaleo" || spr == "lunala") {
        box1.style.background = "url('sol2.png') no-repeat center center";
        ovr.style.background = "#033e50 url(alola.jpg) no-repeat center center fixed";
      } else {
        box1.style.background = "white";
      }
    }
    submit.addEventListener("click", xyz);
//Pokemon cries and then some
    let audino = document.getElementById("cry");
    audino.autoplay = true;
    let body = document.querySelector("body");
    let cry = "https://play.pokemonshowdown.com/audio/cries/"+ fix +".mp3"
    audino.src = cry
    if (this.id == 109) {
      audino.src = "http://play.pokemonshowdown.com/audio/bw2-homika-dogars.mp3"
    } else if (this.id == 272) {
      audino.src = "http://play.pokemonshowdown.com/audio/colosseum-miror-b.mp3"
    } else if (spr == "meowth") {
      audino.src = "TeamR.mp3";
    }
//Mega Evolution--visual changes only
    let megas = ["venusaur", "blastoise", "alakazam", "gengar", "kangaskhan", "pinsir", "gyarados", "aerodactyl", "ampharos", "scizor", "heracross", "houndoom", "tyranitar", "blaziken", "gardevoir", "mawile", "aggron", "medicham", "banette", "absol", "garchomp", "lucario", "abomasnow", "beedrill", "pidgeot", "slowbro", "steelix", "sceptile", "swampert", "sableye", "sharpedo", "camerupt", "altaria", "glalie", "salamence", "metagross", "latias", "latios", "rayquaza", "lopunny", "gallade", "audino", "diancie"]
    let megas2 = ["charizard", "mewtwo"]
    let primal = ["kyogre", "groudon"]
    if (megas.includes(spr)) {
      mega.style.visibility = "visible";
    } else {
      mega.style.visibility = "hidden";
    }
    if (megas2.includes(spr)) {
      megaX.style.visibility = "visible";
      megaY.style.visibility = "visible";
    } else {
      megaX.style.visibility = "hidden";
      megaY.style.visibility = "hidden";
    }
    if (primal.includes(spr)) {
      revert.style.visibility = "visible";
    } else {
      revert.style.visibility = "hidden";
    }
    if (megas.includes(spr) || megas2.includes(spr) || primal.includes(spr)) {
      orig.style.visibility = "visible";
    } else {
      orig.style.visibility = "hidden";
    }
    if (spr == "necrozma") {
      necroz.style.visibility = "visible";
    } else {
      necroz.style.visibility = "hidden";
    }
    function megaEvolve() {
      if (megas.includes(spr)) {
        src.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ spr +"-mega.gif"
        audino.src = "https://play.pokemonshowdown.com/audio/cries/"+ spr +"-mega.mp3"
      }
    }
    function megaEvolveX() {
      if (megas2.includes(spr)) {
        src.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ spr +"-megax.gif"
        audino.src = "https://play.pokemonshowdown.com/audio/cries/"+ spr +"-megax.mp3"
      }
    }
    function megaEvolveY() {
      if (megas2.includes(spr)) {
        src.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ spr +"-megay.gif"
        audino.src = "https://play.pokemonshowdown.com/audio/cries/"+ spr +"-megay.mp3"
      }
    }
    function primalR() {
      if (primal.includes(spr)) {
        src.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ spr +"-primal.gif"
        audino.src = "https://play.pokemonshowdown.com/audio/cries/"+ spr +"-primal.mp3"
      }
    }
    function original() {
      if (megas.includes(spr) || megas2.includes(spr) || primal.includes(spr)) {
        src.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ fix +".gif";
      }
    }
    function necrozma() {
      if (spr == "necrozma") {
        src.src = "https://play.pokemonshowdown.com/sprites/xyani/necrozma-ultra.gif";
        audino.src = "https://themeplaza.eu/download/3226/bgm";
      }
    }
    mega.addEventListener("click", megaEvolve)
    megaX.addEventListener("click", megaEvolveX)
    megaY.addEventListener("click", megaEvolveY)
    revert.addEventListener("click", primalR)
    orig.addEventListener("click", original)
    necroz.addEventListener("click", necrozma)
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
    let abi = document.createTextNode("Ability: " + this.abilities)
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
    li.appendChild(abi)
  }
}
class Trainer {
  constructor() {
    this.pokemon = []
  }
  all() {
    zoroark()
    reshiram()
    kartana()
  }
  get(name) {
    if (name == "zoroark") {
      zoroark()
    } else if (name == "reshiram") {
      reshiram()
    } else if (name == "kartana") {
      kartana()
    }
  }
}
