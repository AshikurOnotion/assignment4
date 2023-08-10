

function cubeNumber(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return "Please Input is not a valid number";
    }
    
    if (number <= 0) {
        return "Please input a Positive number";
    }
    
    const result = Math.pow(number, 3);
    return result;
}
// console.log (cubeNumber (4));