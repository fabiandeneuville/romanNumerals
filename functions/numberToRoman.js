const romanMatrix = require('../datas/romanMatrix');

const numberToRoman = function(number){
    if(number === 0){
        return "";
    } else {
        for(let i = 0 ; i < romanMatrix.length ; i++){
            if(number >= romanMatrix[i][0]){
                return romanMatrix[i][1] + numberToRoman(number - romanMatrix[i][0]);
            }
        }
    }
}

module.exports = numberToRoman