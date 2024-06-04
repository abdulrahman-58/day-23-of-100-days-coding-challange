// Assalamualaikum @everyone 👋

// 🚀 Day 23 Challenge: Start Coding! 🚀

// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
function mixedTypes(num: number, numStr: string): number{
    return num + Number(numStr)
}
console.log(mixedTypes(55, "5"));
console.log(`\n`);

// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multiplydecimals(num1: number , num2: number): number{
    return Math.round(num1 * num2 * 100) /100
}
console.log(multiplydecimals(1.456, 2.879));
console.log(`\n`);

// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divide(divident: number, divisor: number): {quotient: number , remainder: number}{
    let quotient = Math.floor(divident / divisor);
    let remainder = divident % divisor;
    return {quotient , remainder}
}
console.log(divide(86, 8));
