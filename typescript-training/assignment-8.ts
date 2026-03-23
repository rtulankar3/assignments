
// Write a TypeScript program to count the occurrences of the word "Java" in a given paragraph. The program should be case-insensitive and should display the total count of occurrences.
let paragraph: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let searchWord: string = "java";
let wordArray: string[] = paragraph.split(" ");
let occurrences: number = 0;

//  Iterate through the array of words and count occurrences of the search word
for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i]?.toLowerCase() === searchWord) {
        // Print the index of the occurrence
        console.log("Java word is present in Array with Index : " + i);
        occurrences++;
      
    }
}
//  Print the total count of occurrences  
console.log("Total occurrences:", occurrences);
