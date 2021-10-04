var cartas = [
  carta1 = {
    nome: "reno",
    atributos: {
      ataque: 4,
      vida: 6,
      custo: 6
    }
  },
  carta2 = {
    nome: "kazakus",
    atributos: {
      ataque: 3,
      vida: 3,
      custo: 4
    }
  },
  carta3 = {
    nome: "repugnaz",
    atributos: {
      ataque: 5,
      vida: 5,
      custo: 5
    }
  }
]

var npcCard
var playerCard

function sortearCarta(){
 var randomCard = parseInt(Math.random() * cartas.length)
 console.log(randomCard)
}