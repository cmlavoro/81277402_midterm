/*
Question 1: Write a condition that checks whether a variable isRaining is true and a variable isSunny is false. Store the result in a variable called shouldStayInside.
*/

let isRaining = true;
let isSunny = false;

let shouldStayInside = isRaining && !isSunny ? true : false;

console.log(`When it's raining and not sunny, you should should stay inside is a good recommendation: ${shouldStayInside}`);

isRaining = false;
isSunny = false;

shouldStayInside = isRaining && !isSunny ? true : false;

console.log(`When it's not raining and not sunny, you should should stay inside is a good recommendation: ${shouldStayInside}`);

isRaining = false;
isSunny = true;

shouldStayInside = isRaining && !isSunny ? true : false;

console.log(`When it's not raining and sunny, you should should stay inside is a good recommendation: ${shouldStayInside}`);

/*
Question 2: Write a JavaScript function called hasPermission that takes two boolean parameters, isUserLoggedIn and isAdmin, and returns true if the user has permission and false otherwise.
*/

let hasPermission = (isUserLoggedIn, isAdmin) => isUserLoggedIn && isAdmin;

console.log(`When a user is logged in, and is an admin, the user has permission is: ${hasPermission(true, true)}`);

console.log(`When a user is NOT logged in, and is an admin, the user has permission is: ${hasPermission(false, true)}`);

console.log(`When a user is logged in, but is NOT an admin, the user has permission is: ${hasPermission(true, false)}`);

console.log(`When a user is NOT logged in, and is NOT an admin, the user has permission is: ${hasPermission(false, false)}`);

/*
Question 3: Write a JavaScript function called hasUniqueCharacters that takes a string as an argument and returns true if all characters in the string are unique and false otherwise.
*/

function hasUniqueCharacters(str) {

    let arr = str.split('');

    let examinedString = '';

    let distinct = true;

    arr.forEach(char => {
        
        if(examinedString.includes(char))
        {
            distinct = false;
        }
        else
        {
            examinedString = examinedString + char;
        }
    });

    if(distinct){
        console.log(`${str} contains all unique characters`);
    }
    else
    {
        console.log(`${str} does NOT contain all unique characters`);
    }

    return distinct;
}

hasUniqueCharacters('abcdefg');
hasUniqueCharacters('abcdefga');
hasUniqueCharacters('abcbefg');
hasUniqueCharacters('hijklmnabc');