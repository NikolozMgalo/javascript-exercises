const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
        let repeat = ""
        for(i = 0; i < num; i++){
            repeat += string;
        }
        return repeat;
    };

//console.log(repeatString("hey", 3))
// Do not edit below this line
module.exports = repeatString;
