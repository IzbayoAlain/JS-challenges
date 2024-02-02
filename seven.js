function removeDuplicates(array) {
    const uniqueValues = new Set(array);
    const uniqueArray = [...uniqueValues];

    return uniqueArray;
}
//example
const originalArray = [1, 2, 3, 4, 3, 2, 5];
const result = removeDuplicates(originalArray);
console.log(result); 