function shareKeyValuePair(obj1, obj2) {
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            return true; 
        }
    }
    return false;
}

// Example
const object1 = { name: 'Alain', age: 25, city: 'Kigali' };
const object2 = { age: 25, hobby: 'Reading' };
const result = shareKeyValuePair(object1, object2);
console.log(result); // Output: true 