function count(obj) {
    return Object.keys(obj).length;
}

// Example 
const sampleObject = {
    name: 'Alain',
    age: 25,
    city: 'Kigali',
    
    };

const numberOf = count(sampleObject);
console.log(numberOf); 