const romanObject = require('../datas/romanObject');

const romanToNumber = function(string){
    let result = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] === "I" && string[i + 1] === "V"){
            result += 4;
            i++
        } else if(string[i] === "I" && string[i + 1] === "X"){
            result += 9
            i++
        } else if(string[i] === "X" && string[i + 1] === "L"){
            result += 40;
            i++
        } else if(string[i] === "X" && string[i + 1] === "C"){
            result += 90;
            i++
        } else if(string[i] === "C" && string[i + 1] === "D"){
            result += 400;
            i++
        } else if(string[i] === "C" && string[i + 1] === "M"){
            result += 900;
            i++
        } else {
            result += romanObject[string[i]];
        }
    }
    return result
}

module.exports = romanToNumber