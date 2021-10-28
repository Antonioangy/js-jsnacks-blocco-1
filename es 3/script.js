// 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// chiedo all'utente di inserire 9 numeri tramite prompt

const num1 = prompt("inserisci il primo numero");
const num2 = prompt("inserisci il secondo numero");
const num3 = prompt("inserisci il terzo numero");
const num4 = prompt("inserisci il quarto numero");
const num5 = prompt("inserisci il quinto numero");
const num6 = prompt("inserisci il sesto numero");
const num7 = prompt("inserisci il settimo numero");
const num8 = prompt("inserisci il ottavo numero");
const num9 = prompt("inserisci il nono numero");
const num10 = prompt("inserisci il decimo e ultimo numero");

// sommo numeri e mostro il risultato 
let totale = (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10);

document.getElementById("somma").innerHTML = totale;




