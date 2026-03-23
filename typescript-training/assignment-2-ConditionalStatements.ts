// Function to evaluate loan eligibility based on given criteria
function evaluateLoanEligibility(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number): void {
    //Default message at start of program
    console.log("Loan Application for " + customerName + "!");

    // Check credit score first if it is above 750, then approve the loan without checking other criteria
    if (creditScore > 750) {
        console.log(`${customerName} loan is approved.`);
        //condition to check if credit score is between 650 and 750
    } else if (creditScore >= 650) {
        //condition to check if income is above 50000   
        if (income >= 50000) {
            //condition to check if is employed
            if (isEmployed) {
                //condition to check if debt to income ratio is below 40
                if (debtToIncomeRatio < 40) {
                    console.log(`${customerName} loan is approved.`);
                } else
                //loan is denied due to high debt-to-income ratio
                {
                    console.log(`${customerName} loan is denied due to high debt-to-income ratio.`);
                }
            } else
            //loan is denied due to unemployment
            {
                console.log(`${customerName} loan is denied due to unemployment.`);
            }
        } else
        //loan is denied due to insufficient income
        {
            console.log(`${customerName} loan is denied due to insufficient income.`);
        }
    } else
    //loan is denied due to low credit score
    {
        console.log(`${customerName} loan is denied due to low credit score.`);
    }
}

// Test the function with the provided details

evaluateLoanEligibility("John Doe", 650, 55000.0, true, 35.0);
