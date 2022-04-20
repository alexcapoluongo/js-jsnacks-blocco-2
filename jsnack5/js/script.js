// jsnack1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// con for
// let userNumber;
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//      userNumber = parseInt(prompt('inserisci un numero'));
//      sum += userNumber;
//      console.log(userNumber);
// }

// console.log(sum);

// con while

let counter = 0;
let sum = 0;

while (counter < 5) {
    let userNumber = parseInt(prompt('inserisci un numero'));
    sum += userNumber;
    counter++;
}

console.log(sum);