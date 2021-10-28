// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// inserisco i numeri 
let firstNumber = prompt ("inserisci un numero")
let SecondNumber = prompt ("inserisci un altro numero")

// stampo il numero maggiore
let numeroMaggiore = 0;

console.log(firstNumber);
if (firstNumber > SecondNumber) {
   numeroMaggiore = firstNumber;
    document.getElementById("numero-maggiore").innerHTML = numeroMaggiore
}
else {
    numeroMaggiore = SecondNumber;
    document.getElementById("numero-maggiore").innerHTML = numeroMaggiore
}