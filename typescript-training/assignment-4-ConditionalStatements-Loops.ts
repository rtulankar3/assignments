// Solution:

// Array to store transactions
const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let creditCount: number = 0;
let debitCount: number = 0;
let totalCredit: number = 0;
let totalDebit: number = 0;
let suspiciousCount: number = 0;
// Loop through transactions to calculate required values
for (let i = 0; i < transactions.length; i++) {
    const amount: number = transactions[i];
    if (amount > 0) {
        creditCount++;
        totalCredit += amount;
    } else {
        debitCount++;
        totalDebit += amount;
    }       
    if (Math.abs(amount) > 10000) {
        console.log(`Suspicious ${amount > 0 ? "credit" : "debit"} transaction with Amount: ${amount}`);
        suspiciousCount++;
    }
}
// Print results
console.log(`Total number of credit transactions: ${creditCount}`);
console.log(`Total number of debit transactions: ${debitCount}`);
console.log(`Total amount credited: ${totalCredit}`);
console.log(`Total amount debited: ${totalDebit}`);
const remainingBalance: number = totalCredit + totalDebit;  
console.log(`Total amount remaining in Bank Account: ${remainingBalance}`);
console.log(`Total number of suspicious transactions: ${suspiciousCount}`);

