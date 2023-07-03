/*
Question 1: Identify and correct the syntax errors in the following code: 
var number = 10;
console.log (Number + 5);
*/

var number = 10;
console.log(number + 5);

/*
Question 2: Write a JavaScript function called isEven that takes a number as an argument and returns true if the number is even and false if it is odd.
*/

const isEven = num => num % 2 == 0;

//example usage:
let testNum = 2;
console.log(`The number ${testNum} is even is: ${isEven(testNum)}`);
testNum = 3;
console.log(`The number ${testNum} is even is: ${isEven(testNum)}`);

/*
Question 3: Write a JavaScript function called isPalindrome that takes a string as an argument and returns true if it is a palindrome (reads the same forwards and backwards) and false otherwise.
*/

function isPalindrome(str)
{
    let punctuation = /[\.,?!]/g, spacing = /\s/g;
    str = str.replace(punctuation, '').replace(spacing, '').toLowerCase();
    let strArray = str.split('');
    let reverseStrArray = strArray.reverse();
    let reverseStr = reverseStrArray.join('');
    return str == reverseStr;
}

//example usage:
let testStr = 'Mom';
console.log(`The string ${testStr} is a palindrome is: ${isPalindrome(testStr)}`);
testStr = 'Dad';
console.log(`The string ${testStr} is a palindrome is: ${isPalindrome(testStr)}`);
testStr = 'muffin';
console.log(`The string ${testStr} is a palindrome is: ${isPalindrome(testStr)}`);
testStr = 'Step on no pets.';
console.log(`The string ${testStr} is a palindrome is: ${isPalindrome(testStr)}`);
testStr = 'I won in ping pong!';
console.log(`The string ${testStr} is a palindrome is: ${isPalindrome(testStr)}`);
testStr = 'May a moody baby doom a yam?';
console.log(`The string ${testStr} is a palindrome is: ${isPalindrome(testStr)}`);