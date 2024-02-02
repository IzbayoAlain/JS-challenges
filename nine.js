function shiftArrayLeft(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const firstElement = arr.shift();
    arr.push(firstElement);

    return arr;
}
// Example
const originalArray = [1, 2, 3, 4, 5];
const result = shiftArrayLeft(originalArray);
console.log(result); // Output: [2, 3, 4, 5, 1]