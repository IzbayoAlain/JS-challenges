function findMaxValue(numbers) {
    if (numbers.length === 0) {    
        return undefined;
    }
    let max = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
    return max;
}
//example
const numbersArray = [3,, 8, 2, 6, 4, 9, 1];
console.log(findMaxValue(numbersArray)); 