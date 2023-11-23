let email = prompt('Inserisci la tua mail');

let valid_email = ["mario@gmail.com", "marco@gmail.com", "agostino@gmail.com"];


let verified_email = false;
for(let i = 0; i < valid_email.length; i++){
    if (email == valid_email[i]) {
        verified_email = true;
    }
}
console.log(verified_email);