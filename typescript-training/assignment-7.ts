
let sentence: string = "Java programming is fun and challenging";
const words: string[] = sentence.split(" ");

// 1. Count the total number of words in the sentence
let wordCount: number = words.length;
console.log("Total number of words:", wordCount);   

// 2. Print the sentence words in reverse order using for loop
let reversedSentence: string = "";
for (let i: number = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i] + " ";
}

console.log("Reversed sentence:", reversedSentence.trim());

// 3. Convert the first character of each word to uppercase and print original sentence using for loop
let capitalizedSentence: string = "";
for (let i: number = 0; i < words.length; i++) {
    capitalizedSentence += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
}

console.log("Capitalized sentence:", capitalizedSentence.trim());


