function count(sentence) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
//example
const sentence = 'My name is Izabayo Nzabandora Alain';
const result = count(sentence);
console.log(result);