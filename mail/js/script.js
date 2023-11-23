// Prompt per inserimento mail
let email = prompt('Inserisci la tua mail');

// Array con email valide
let valid_email = ["mario@gmail.com", "marco@gmail.com", "agostino@gmail.com"];

// Condizione di email verificata in partenza
let verified_email = "Accesso negato!";

// Creazione ciclo for per cambiare condizione se email verificata è contenuta nell'array
for(let i = 0; i < valid_email.length; i++){
    if (email == valid_email[i]) {
        verified_email = "Accesso consentito!";
    }
}
console.log(verified_email);