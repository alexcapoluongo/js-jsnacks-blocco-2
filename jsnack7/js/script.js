// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// // chiedi all utente un numero
// let userNumber = parseInt(prompt('Inserisci un numero'));
// // console.log(userNumber);

// //visualizza i numeri che precedono l'userNumber e fai il cubo
// for (let i = userNumber; i > 0; i--) {  
//     let power = i**3;
//     console.log(i,`elevato al cubo=`, power);
// }


// -----

let userNumber;

do {
    userNumber = parseInt(prompt('inserisci un numero'));
} while (userNumber < 1 || isNaN(userNumber))


let counter = 1;
while (counter <= userNumber) {
    //calcola cubo
    const thisCube = counter ** 3
    console.log(thisCube);
    counter++;
}