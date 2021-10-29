// 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// chiedo all'utente di inserire 9 numeri tramite prompt
let sum = 0

for (i = 0; i < 10; i++){
    const chiediNumero = parseInt (prompt("scrivi un numero"));
    
    sum += chiediNumero[i];

}
// sommo numeri e mostro il risultato 