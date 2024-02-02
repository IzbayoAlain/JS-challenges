function objectToArray(obj) {
    return Object.entries(obj);
}

// Example
const sampleObject = {
    name: 'Alain',
    age: 25,
    city: 'Kigali',
};

const keyValueArray = objectToArray(sampleObject);
console.log(keyValueArray);
