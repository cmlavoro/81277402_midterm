/*
Question 1: Declare a variable called name and assign it a string value of your
choice. Then, display a message that says "Hello, [name]!" using the value of the
name variable.
*/

let name = 'Chris';
let msg = `Hello, ${name}!`;
console.log(msg);
alert(msg);

/*
Question 2: Create two variables, x, and y, and assign them numerical values.
Swap the x and y values using a third variable and display the updated values.
*/

let x = 7;
let y = 5;
let z = x;
console.log(`x=${x} y=${y}`);
x = y;
y = z;
console.log(`x=${x} y=${y}`);



