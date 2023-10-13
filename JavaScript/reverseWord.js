function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word in the array
    const reversedWords = words.map(word => {
        // Reverse the characters of the word
        const reversedWord = word.split('').reverse().join('');
        return reversedWord;
    });

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage
const inputSentence = prompt("Enter a sentence ")
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
