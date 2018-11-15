let button = document.getElementById("button")
let ball = document.getElementById("new")
let triple = document.getElementById("display")

function shake(){
  ball.classList.add("shake")
  document.getElementById("return").style.visibility = "visible"
  triple.classList.add("appear")
}

ball.addEventListener("click", shake);
// Make the call
function display() {
  let x = 5
  axios.get("http://fizal.me/pokeapi/api/v2/id/"+ x +".json")
  .then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
});
}

// response.data.
//
// class Pokemon {
//   constructor(name) {
//
//     this.name = name
//     this.hp = hp
//     this.attack = attack
//     this.defense = defense
//     this.abilities = abilities
//     this.sprite = sprite
//   }
// }
