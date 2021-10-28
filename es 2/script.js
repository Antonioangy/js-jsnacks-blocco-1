// 2- L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedere all utente di inserire 2 parole
const primaParola = prompt("inserisci una parola");
const secondaParola = prompt("inserisci la seconda parola");
// capire qual e la parola piu corta e uso lenght per fare un confronto e stamparla

if (primaParola.length < secondaParola.length) {
    
    document.getElementById("parolalunga").innerHTML = primaParola + " " + secondaParola;
}
else if (primaParola.length > secondaParola.length) {
    
    document.getElementById("parolalunga").innerHTML = secondaParola + " " + primaParola;
}

