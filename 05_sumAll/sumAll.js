const sumAll = function(numStart, numEnd) {
    let sum = 0;
    if (!Number.isInteger(numStart) || !Number.isInteger(numEnd)) return "ERROR"; 
    if (numStart > numEnd) {
        const temp = numStart;
        numStart = numEnd;
        numEnd = temp;
      };
    if(numStart < 0 || numEnd < 0 ) {
        return "ERROR";
    }
        for(let i = numStart; i <= numEnd; i++){
            sum += i
        }
        return (sum)
    
}

// Do not edit below this line
module.exports = sumAll;
