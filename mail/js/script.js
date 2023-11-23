let email = prompt('Inserisci la tua mail');
//console.log(email);

let valid_email = ["mario@gmail.com", "marco@gmail.com", "agostino@gmail.com"];

// console.log(valid_email.length);

for(let i = 0; i < valid_email.length; i++){
    // console.log(valid_email[i]);
    if (email == valid_email[i]) {
        console.log('Accesso consentito!')
    } 
    else {
        console.log('Accesso negato!')
    }
}