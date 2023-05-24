"use strict";
function convertInchToFeet(params) {
    if (typeof params === 'string') {
        const value = parseFloat(params) * 12;
        return value;
    }
    if (typeof params === 'number') {
        const value = params * 12;
        return value;
    }
}
const result = convertInchToFeet('33');
const resultString = convertInchToFeet(33);
console.log(result);
console.log(resultString);
