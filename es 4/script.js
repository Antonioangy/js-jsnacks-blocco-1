// 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let userName = prompt("qual e il tuo nome?")
const ValidNames = ["antonio", "marco", "simone", "matteo"]
let namevalidator = false;

for ( let i = 0; i < ValidNames.length; i++) {
    if (userName == ValidNames[i]) {
        namevalidator = true;
    }

}

if (namevalidator === true) {
    console.log("il tuo nome e nella lista")

} else{
    console.log("il tuo nome non e' presente nella lista")
}
    
