/*
Question 1: Write a while loop that prints the numbers from 1 to 20.
*/
{
    let number = 1;
    
    while (number <= 20) {
        console.log(number);
        number++;
      }
}

/*
Question 2: Write a JavaScript function called calculateSum that takes a positive
integer n as an argument and returns the sum of all numbers from 1 to n.
*/

function calculateSum(n) {

    n = Math.abs(n);

    let sum = 0;

    let printString = '';

    for (let i = n; i >= 1; i--) {
        
        printString += `${i}`;

        if(i > 1)
        {
            printString += ' + ';
        }
        else
        {
            printString += ' = ';
        }

        sum += i;
    }

    printString += sum;
    console.log(printString);
    return sum;

}

calculateSum(5);


/*
Question 3: Write a JavaScript function called calculateFactorialIterative that
takes a positive integer n as an argument and calculates its factorial using a loop
instead of recursion.
*/

function calculateFactorialIterative(n){

    n = Math.abs(n);

    if (n == 0 || n == 1) {
        return 1;
    }

    if (n > 1) {
        let response = 1;
        for (var i = n; i >= 1; i--) {
            response = response * i;
        }
        return response;
    }
}

let factorialIterativeTest = 10;
console.log(`${factorialIterativeTest}! = ${calculateFactorialIterative(factorialIterativeTest)}`);

factorialIterativeTest = 5;
console.log(`${factorialIterativeTest}! = ${calculateFactorialIterative(factorialIterativeTest)}`);

factorialIterativeTest = 4;
console.log(`${factorialIterativeTest}! = ${calculateFactorialIterative(factorialIterativeTest)}`);

factorialIterativeTest = 3;
console.log(`${factorialIterativeTest}! = ${calculateFactorialIterative(factorialIterativeTest)}`);

factorialIterativeTest = 2;
console.log(`${factorialIterativeTest}! = ${calculateFactorialIterative(factorialIterativeTest)}`);

factorialIterativeTest = 1;
console.log(`${factorialIterativeTest}! = ${calculateFactorialIterative(factorialIterativeTest)}`);

factorialIterativeTest = 0;
console.log(`${factorialIterativeTest}! = ${calculateFactorialIterative(factorialIterativeTest)}`);

factorialIterativeTest = -1;
console.log(`${factorialIterativeTest}! = ${calculateFactorialIterative(factorialIterativeTest)}`);