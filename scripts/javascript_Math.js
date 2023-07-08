/*
Question 1: Generate a random number between 1 and 100 (inclusive) using the Math.random() function and round it to the nearest integer. Store the result in a variable called randomNumber.
*/

let randomNumber = Math.floor(Math.random() * (101 - 1) + 1);

console.log(randomNumber);


/*
Question 2: Write a JavaScript function called calculateFactorial that takes a number as an argument and returns its factorial.
*/

function calculateFactorial(num){

    if(num >= 0)
    {
        if(num == 0 || num == 1)
        {
           return 1;
        }
   
        if(num > 1)
        {
            let response = 1;
            for(var i = num; i >= 1; i--){
                response = response * i;
              }
              return response;
        }
    }

    return "must be (+)";
}

let factorialTest = 10;
console.log(`${factorialTest}! = ${calculateFactorial(factorialTest)}`);

factorialTest = 5;
console.log(`${factorialTest}! = ${calculateFactorial(factorialTest)}`);

factorialTest = 4;
console.log(`${factorialTest}! = ${calculateFactorial(factorialTest)}`);

factorialTest = 3;
console.log(`${factorialTest}! = ${calculateFactorial(factorialTest)}`);

factorialTest = 2;
console.log(`${factorialTest}! = ${calculateFactorial(factorialTest)}`);

factorialTest = 1;
console.log(`${factorialTest}! = ${calculateFactorial(factorialTest)}`);

factorialTest = 0;
console.log(`${factorialTest}! = ${calculateFactorial(factorialTest)}`);

factorialTest = -1;
console.log(`${factorialTest}! = ${calculateFactorial(factorialTest)}`);

/*
Question 3: Write a JavaScript function called calculatePower that takes two numbers, base and exponent, as arguments and returns the result of base raised to the power of exponent.
*/

let calculatePower = (base, exponent) => Math.pow(base, exponent);

let base = 3;
let power = 2;

console.log(`${base} to the power of ${power} = ${calculatePower(base,power)}`);

base = 2;
power = 4;

console.log(`${base} to the power of ${power} = ${calculatePower(base,power)}`);