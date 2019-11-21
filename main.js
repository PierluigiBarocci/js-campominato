
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l'utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50


// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// Come visto stamattina, con un ciclo while con lunghezza massima di 16 valori, creo una Array in cui ci siano sicuramente 16 numeri che siano tutti diversi tra di loro;
var mine = [];
var numero_iterazioni = 0;
while(mine.length < 16) {
    var numero = generaRandom(1, 100);
    if(!mine.includes(numero)) {
        mine.push(numero);
    }
    numero_iterazioni++;
}
// Una volta terminato il while, fuori, scriviamo cos'è uscito, cioè l`array finale e il numero di iterazioni che ci sono volute.
console.log('numero iterazioni: ' + numero_iterazioni);
console.log(mine);

// funzione che genera un numero random tra min e max
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}
