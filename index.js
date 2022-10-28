const anime1 = {
    titulo: "One Piece",
    sinopse: "Conta a história de uma tripulação pirata comandada pelo capitão Monkey D. Luffy, personagem principal.",
    horas: 342,
    lançamento: 1999,
    gênero:["Fantasia", "aventura", "ação"],
    semRestrição: true,
    };

const anime2 = {
    titulo: "Demon Slayer",
    sinopse: "Em Kimetsu no Yaiba, Tanjiro, um bondoso jovem que ganha a vida vendendo carvão descobre que sua família foi massacrada por um demônio.",
    horas: 45,
    lançamento: 2019,
    gênero:["Ficção sombria", "Ficção Aventura", "Artes Marciais"],
    semRestrição: false,
    };

const anime3 = {
    titulo: "Bleach",
    sinopse: "segue as aventuras de Ichigo Kurosaki que após ganhar os poderes de um Ceifeiro de Almas, através de uma Ceifeira de Almas, Rukia Kuchiki.",
    horas: 134,
    lançamento: 2002,
    gênero: ["anime", "ação", "ficção supernatural"],
    semRestrição: true

}

console.log(anime1, anime2, anime3)

//2
const anime = []
//  console.log("anime", anime)

//3
anime.push(anime1, anime2, anime3)

//4
if(anime1 === anime2 === anime3){
    console.log(anime.push(anime1, anime2, anime3))
} else{
    // alert("o item nao foi adicionado")
}

for(i = 0; i < anime.length; i++){
    console.log(anime[i])
}

for(nome in anime1){
    console.log(anime1.nome);
}

function receberObjeto(anime){
    console.log(`${anime}`)
    return anime
}

//DOM
let card = [
	{'name': 'One Piece'},
  {'name': 'Demon Slayer'},
  {'name': 'Bleach'}
]

function userInput() {
	let digitado = document.getElementById('id-busca').value;
  
  let container = document.getElementById('card');
  
  container.innerHTML = '';
  let cardEscolhidas = card.filter(
  	card => card.name.toLowerCase().includes(digitado.toLowerCase())
  );
  
  for (let card of Escolhidas) {
  	container.innerHTML += `<div> ${card.name} </div>`;
  }
}















