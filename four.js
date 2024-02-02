function reverseString(inputString) {
    let reversedString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }

    return reversedString;
}

//example
const originalString = 'my name is Izabayo Nzabandora Alain';
const reversedResult = reverseString(originalString);
console.log(reversedResult);