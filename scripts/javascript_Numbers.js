/*
Question 1: Calculate the square root of a given number and store the result in a variable called result.
*/
//let numberInput = prompt('Please enter a number');
//let result = Math.sqrt(numberInput);
//alert(`The square root of ${numberInput} is ${result}`);


/*
Question 2: Write a JavaScript function called isPrime that takes a number as an argument and returns true if it is a prime number and false otherwise.
*/

function isPrime(num) {

    if(num < 2)
    {
        console.log(`${num} is not a Prime number.`);
        return false;
    }

    for (let i = num - 1; i > 1; i--) {
        
            if(num % i == 0)
            {
                console.log(`${num} is not a Prime number.`);
                return false;
            }
     }
     console.log(`${num} is a Prime number!`);
     return true;  
}

isPrime(12);


/*
Write a JavaScript function called generateRandomNumber that takes two numbers, min, and max, as arguments and returns a random number between min and max
*/
function generateRandomNumber(min, max) {

    let randomNumber = Math.floor(Math.random() * (max - min) + min);

    if(randomNumber == min)
    {
        randomNumber++;
    }
    console.log(randomNumber);
    return randomNumber;
}

generateRandomNumber(3, 6);