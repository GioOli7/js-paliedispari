//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

var word = prompt('Inserisci una parola, ti dirò se è palindroma');
if (isPalindroma(word)) {
    console.log(`La parola ${word} è palidroma`);
} else {
    console.log(`la parola ${word} non è palindroma`);
}

////////FUNZIONE
/**
 * Verifica se la parola è palindroma
 * @param {string} parola parola da verificare
 * @returns true se è palindroma
 */
function isPalindroma (parola) {
    var palindroma = '';
    for (var i = parola.length - 1; i >= 0; i--) {
        palindroma += parola[i]
    }
    // console.log(palindroma);
    if (palindroma === parola) {
        return true;
    }
    return false;
}
// avrei potuto inserire il risultato del log direttamente nella funzione, ma trovo più flessibile gestirlo
// nel codice, ed avere un semplice true o false come risultato della funzione




//Pari e Dispari
//L’utente sceglie pari o dispari
//e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.