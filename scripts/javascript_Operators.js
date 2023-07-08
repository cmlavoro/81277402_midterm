/*
Question 1: Given the variables a = 10 and b = 3, what is the value of the following expression: a % b?
*/

//Answer: 1

{
    let a = 10;
    let b = 3;
    
    let mod = a % b;
    
    console.log(`${a} % ${b} = ${mod}`); // 1
}

/*
Question 2: Write a JavaScript function called isInRange that takes a number as an argument and returns true if it falls within a specific range (e.g., between 10 and 20) and false otherwise.
*/

function isInRange(num) {

    const min = 1;
    const max = 20;

    if(num >= min && num <= max)
    {
        console.log(`The input number ${num} is in range of ${min} - ${max}`);
        return true;
    }
    console.log(`The input number ${num} is NOT in range of ${min} - ${max}`);
    return false;
}

isInRange(20);

/*
Question 3: Given the variables a = 5, b = 3, and c = 2, what is the value of the following expression: a > b || c < b && a === c?
*/

//Answer: true

{
    let a = 5;
    let b = 3;
    let c = 2;

    let result1 = a > b || c < b && a === c; //true
    console.log(`When a = 5, b = 3, and c = 2: a > b || c < b && a === c  is ${result1}`);
 
    let result2 = (a > b || c < b) && a === c; //false 
    console.log(`When a = 5, b = 3, and c = 2: (a > b || c < b) && a === c  is ${result2}`);

    let result3 = (a > b || c < b) && (a === c); //false 
    console.log(`When a = 5, b = 3, and c = 2: (a > b || c < b) && (a === c)  is ${result3}`);

    let result4 = a > b || (c < b && a === c); //true 
    console.log(`When a = 5, b = 3, and c = 2: a > b || (c < b && a === c)  is ${result4}`);

    let result5 = (a > b) || (c < b) && (a === c); //true 
    console.log(`When a = 5, b = 3, and c = 2: (a > b) || (c < b) && (a === c)  is ${result5}`);

}

