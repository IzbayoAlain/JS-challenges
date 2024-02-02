function capitalizeFirstLetter(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedSentence = capitalizedWords.join(' ');

    return capitalizedSentence;
}

//example
const sentence = 'my name is izabayo nzabandora alain';
const result = capitalizeFirstLetter(sentence);
console.log(result); 