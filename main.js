// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50


// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).


// Come visto stamattina, con un ciclo while con lunghezza massima di 16 valori, creo una Array in cui ci siano sicuramente 16 numeri che siano tutti diversi tra di loro;
var mine = [];
while(mine.length < 16) {
    var numero = generaRandom(1, 100);
    if(!mine.includes(numero)) {
        mine.push(numero);
    }
};
// Una volta terminato il while, fuori, scriviamo cos'è uscito, cioè l`array finale, per fare le prove in console quando il programma sarà finito.
console.log(mine);

// funzione che genera un numero random tra min e max
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
};

// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l'utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.


// First things First: creiamo un punteggio 0, una flag per uscire dagli while e un array vuota per lo storico input dell'utente
var point = 0;
var inside = false;
var storico_utente = [];
// Apriamo un while con le sue piccole if interne (se non è un numero, se non è compreso tra 1 e 100, e se una mina viene pistata);
// ad ogni caso appare un alert e la variabile inside diventa true ---> Game Over!
// A rigor di logica, si sarebbe potuto anche usare un ciclo do...while credo...
while ((point < 84) && (inside == false)) {
    var num_utente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100 per favore.'));
    // Abuso clamoroso di if...else if: si sarebbe potuto usare uno Switch...Case
    if (!num_utente) {
        alert('Non hai inserito un numero, hai perso.');
        var inside = true;
    } else if ((num_utente < 1) || (num_utente > 100)) {
        var inside = true;
        alert('Il numero che hai scelto non è compreso tra 1 e 100, hai perso.');
    } else if (mine.includes(num_utente)) {
        storico_utente.push(num_utente);
        var inside = true;
        alert('Ops hai pistato una mina, hai perso.');
    }// qui gira il tutto: se tutto le condizioni sono passate (è un numero, compreso tra 1 e 100, e non fa parte dall'Array mine), allora lo pusha dentro lo storico utente, segna un punticino, e rinizia il ciclo While!!!
    else {
        storico_utente.push(num_utente);
    }
    point ++;
};
// Condizione per non congratularsi in caso abbia sbagliato al primissimo tentativo, sarebbe una presa per il culo!
if (point > 1) {
    alert ('Rallegrati però, hai totalizzato un bel ' + (point - 1) + ' di punteggio. Non male!')
}// Remoto caso in cui il giocatore riesca ad attraversare tutto il campo minato senza mai pistare una mina
else if (inside == false) {
    alert('Non ci posso credere, sei riuscito ad oltrepassare il campo minato, hai vinto!!!');
};
// log finale del tutto
console.log('I numeri che hai scelto sono ' + storico_utente);
console.log('Hai totalizzato un bel '  + (point - 1) + ' di punteggio.');
console.log('Queste erano le mine ' + mine);
