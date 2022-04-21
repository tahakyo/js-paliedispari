// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chideo all'utente di inserire una parola
const userWord = prompt("inserisci una parola");

const invertedWord = invertWord(userWord);

// // tasforma la parola inserita dall'utente in una array
// let splittedWord = userWord.split('');
// console.log(splittedWord)
// // inverto l'array per poter leggere la parola al contrario
// let reversedWord = splittedWord.reverse();
// console.log(splittedWord);
// // riunisco la parola in una stringa unica
//  reversedWord = reversedWord.join('');
// console.log(reversedWord);



// faccio il confronto tra la parola inserita e la parola invertita per vedere se è palindroma
if (userWord === invertedWord) {
    console.log('la parola è palindroma');
}else {
    console.log('la parola non è palindroma');
}





function invertWord(str){
    const strInverted = str.split('').reverse().join('');
    return strInverted;
}