// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// chiedi all utente un numero
let userNumber = parseInt(prompt('Inserisci un numero'));
// console.log(userNumber);

//visualizza i numeri che precedono l'userNumber e fai il cubo
for (let i = userNumber; i > 0; i--) {  
    let power = i**userNumber;
    console.log(i,`elevato alla ${userNumber}=`, power);
}



