

// Solution:

// 1. Create an array of student names and an array of their corresponding marks.
const studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
const marks: number[] = [75, 80, 82];
const updatedMarks: number[] = [];
let totalMarks: number = 0;

// 2. Adding 10 marks to each student's marks using assignment operators and store it into another array.
console.log("Updated Marks:");
for (let i = 0; i < marks.length; i++) {
  updatedMarks[i] = marks[i] + 10;
  totalMarks += updatedMarks[i];
  console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}

// 3. Calculate the average marks of the students and print it to the console.
const averageMarks: number = totalMarks / updatedMarks.length;  

console.log(`Average Marks: ${averageMarks}`);


