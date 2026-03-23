
function printTriangle(rows: number): void {
    for (let i = 1; i <= rows; i++) {

        // Initialize an empty string for the current line    
        let line: string = "";

        // Add spaces before stars
        for (let j = i; j < rows; j++) {
            line += " ";
        }
        // Add stars
        for (let j = 1; j <= i; j++) {
            line += "*";
        }
        console.log(line);
    }
}
// Test the function with 5 rows
printTriangle(5);