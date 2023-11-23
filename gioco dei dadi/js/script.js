// Generazione numero random per player
const rnd_player = Math.floor(Math.random() * 6) + 1;
console.log(rnd_player);

// Generazione numero random per computer
const rnd_computer = Math.floor(Math.random() * 6) + 1;
console.log(rnd_computer);

// Creazione condizione if/else per stabilire il vincitore
if(rnd_player == rnd_computer){
    console.log("Pareggio!")
}
else if(rnd_player > rnd_computer){
    console.log("Hai vinto!")
}
else{
    console.log("Hai perso!")
}
