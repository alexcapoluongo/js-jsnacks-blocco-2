// jsnack2. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// // lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
for (let i = 0; i < 3; i++) {
    let names = ['Alex', 'Eviatar', 'Lewis', 'Sana'];
    let surnames = ['Rossi', 'White', 'Joel', 'Parrow'];

    const randomIndexName = Math.floor(Math.random() * names.length);

    const randomIndexSurname = Math.floor(Math.random() * surnames.length);

    console.log(names[randomIndexName], surnames[randomIndexSurname]);
}