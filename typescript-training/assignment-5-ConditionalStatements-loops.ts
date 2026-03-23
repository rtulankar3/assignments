
// Employee data
interface Employee {
    name: string;
    baseSalary: number;
    experience: number;
    yearEndRating: number;
}   

const employees: Employee[] = [
    { name: "Alice Johnson", baseSalary: 75000.0, experience: 5.1, yearEndRating: 4.2 },
    { name: "Bob Smith", baseSalary: 68000.0, experience: 3.2, yearEndRating: 3.8 },    
    { name: "Carol Davis", baseSalary: 82000.0, experience: 7.1, yearEndRating: 4.5 },
    { name: "David Brown", baseSalary: 90000.0, experience: 10.2, yearEndRating: 2.5 },
    { name: "Eva Green", baseSalary: 60000.0, experience: 2.4, yearEndRating: 3.5 }
];

// Map to store hike percentages

const hikePercentages: Map<string, number> = new Map();
// Calculate hike percentages for each employee
for (const employee of employees) {
    let variablePayPercentage: number;
    let bonus: number;
    let reward: number = 0;
    // Determine variable pay percentage and bonus based on year-end rating
    if (employee.yearEndRating >= 4.0) {
        variablePayPercentage = 15.0;
        bonus = 1500;
    } else if (employee.yearEndRating >= 3.0) {
        variablePayPercentage = 10.0;
        bonus = 1200;
    } else {
        variablePayPercentage = 3.0;
        bonus = 300;
    }
    // Determine reward based on experience
    if (employee.experience >= 5.0) {
        reward = 5000;
    }
    // Calculate hike
    const hike = (employee.baseSalary * variablePayPercentage / 100) + bonus + reward;
    // Calculate hike percentage
    const hikePercentage = (hike / employee.baseSalary) * 100;
    // Store hike percentage in the map
    hikePercentages.set(employee.name, hikePercentage);
}
// Print hike percentages
for (const [name, hikePercentage] of hikePercentages) {
    console.log(`${name}: ${hikePercentage.toFixed(2)}%`);
}

