function convertInchToFeet(params: string | number): string | number | undefined{
    if(typeof params === 'string'){
        const value = parseFloat(params)*12
        return value
    }
    if(typeof params === 'number'){
        const value = params*12
        return value
    }
}

const result = convertInchToFeet('33') as string;
const resultString = convertInchToFeet(33) as number
console.log(result);
console.log(resultString);