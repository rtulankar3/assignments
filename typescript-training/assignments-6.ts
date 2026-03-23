function isPrime(n: number): boolean {
    if (n <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    if (n <= 3) {
        return true; // 2 and 3 are prime numbers
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false; // Numbers divisible by 2 or 3 are not prime
    }
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false; // Numbers divisible by i or i+2 are not prime
        }
    }
    return true; // If no divisors found, the number is prime
}

// Test the function with the provided examples
console.log(isPrime(7));  // Output: true
console.log(isPrime(25)); // Output: false
console.log(isPrime(1));  // Output: false

