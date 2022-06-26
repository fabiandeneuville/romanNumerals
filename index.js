const readline = require('readline-sync');

const numberToRoman = require('./functions/numberToRoman');
const romanToNumber = require('./functions/romanToNumber');

let choices = ["Number to Roman", "Roman to Number"];

let userChoice = readline.keyInSelect(choices, "Which conversion ?");
if (userChoice === 0){
    result = numberToRoman(parseInt(readline.question("rensignez un nombre en chiffres arabes : ")));
    console.log(`Le résultat est ${result}`);
} else if (userChoice === 1){
    result = romanToNumber(readline.question("Renseignez un nombre en chiffres romains : "));
    console.log(`Le résultat est ${result}`);
};


