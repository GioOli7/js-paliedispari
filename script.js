//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

/*
var word = prompt('Inserisci una parola, ti dirò se è palindroma');
if (isPalindroma(word)) {
    console.log(`La parola ${word} è palidroma`);
} else {
    console.log(`la parola ${word} non è palindroma`);
}
*/

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
//*************************************************************************************************************** */



//Pari e Dispari
//L’utente sceglie pari o dispari
//e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


// chiedo all utente di scegliere tra pari e dispari
do {
    var pariDispariUser = prompt('Pari o dispari?\nDigita la parola corrispondente').toLowerCase().trim();
} while (pariDispariUser != 'pari' && pariDispariUser != 'dispari');
console.log(`L'utente ha scelto ${pariDispariUser}`);

// chiedo all utente di scegliere un numero da 1 a 5
do{
    var numUser = parseInt(prompt('Scegli un numero da 1 a 5'));
} while (isNaN(numUser) || numUser < 1 || numUser > 5)
console.log(`L'utente ha scelto il numero ${numUser}`);

//genero un numero casuale da 1 a 5 per il computer
var numCPU = randomCPU();
console.log(`Il numero casuale per il computer è ${numCPU}`);

// sommo il valore immesso dall utente con quello generato per il computer
var somma = sum(numUser, numCPU);
console.log(`La somma dei due valori è ${somma}`);

//stabilisco se la somma dei due numeri è pari o dispari, e stabilisco se l'utente ha vinto
if (pariDispariUser === isEven(somma)) {
    console.log(`La somma è ${isEven(somma)}, quindi l'utente ha vinto!`);
} else {
    console.log(`La somma è ${isEven(somma)}, quindi l'utente ha perso!`);
}



/**
 * Genera un numro casuale da 1 a 5
 * @returns numero casuale da 1 a 5
 */
function randomCPU() {
    rand = Math.floor(Math.random()*5) + 1;
    return rand;
}

/**
 * Esegue la somma tra due numeri
 * @param {number} num1 primo addendo
 * @param {number} num2 secondo addendo
 * @returns somma dei due numeri
 */
function sum(num1, num2) {
    sum = num1 + num2;
    return sum;
}

/**
 * Verifica se il numero è pari o dispari
 * @param {number} numero numero da verificare
 * @returns pari se il numero è pari, dispari se è dispari
 */
function isEven(numero) {
    if (numero % 2 === 0) {
        return 'pari';
    }
    return 'dispari';
}

