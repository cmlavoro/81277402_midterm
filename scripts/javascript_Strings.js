/*
Question 1: Given the string "Hello, World!", write code to convert it to uppercase and store the result in a variable called uppercaseString.
*/

let uppercaseString = ("Hello, World!").toUpperCase();
console.log(uppercaseString);

/*
Question 2: Write a JavaScript function called countVowels that takes a string as an argument and returns the number of vowels present in the string.
*/

function countVowels(str) {

    str = str.toLowerCase();

    let arr = str.split('');

    let vowelCounter = 0;

    arr.forEach(char => {
        
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' )
        {
            vowelCounter++;
        }
    });

    return vowelCounter;
}

let testVowels = "Suzanne";
console.log(`The string ${testVowels} contains ${countVowels(testVowels)} vowels`);

/*
Question 3: Write a JavaScript function called truncateString that takes a string and a number maxLength as arguments and returns a truncated version of the string if it exceeds maxLength, appending an ellipsis ("...") at the end.
*/

function truncateString(str, maxLength){

    let length = str.length;

    if(length > maxLength)
    {
        str = str.substring(0,maxLength) + '...'
    }

    console.log(str);

}

truncateString('Chris', 5);
truncateString('Christopher', 5);
truncateString('Christopher', 12);
truncateString('Christopher', 9);