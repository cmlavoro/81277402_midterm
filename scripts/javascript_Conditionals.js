/*
Question 1: Write an if-else statement that checks whether a variable num is
positive, negative, or zero. Print the appropriate message accordingly.
*/

let num = 5;

if(num < 0)
{
    console.log(`${num} is negative`);
}
else if(num == 0)
{
    console.log(`${num} is zero`);
}
else
{
    console.log(`${num} is positive`);
}

/*
Question 2: Write a JavaScript function called getDiscount that takes a purchase
amount as an argument. If the purchase amount is greater than $100, apply a 10% discount. If it is less than or equal to $100, apply a 5% discount. Return the discounted amount.
*/

function getDiscount(purchaseAmount)
{
    if(purchaseAmount > 100)
    {
        return purchaseAmount - (purchaseAmount * .1);
    }

    return purchaseAmount - (purchaseAmount * .05);
}

let purchaseAmount = 101;

console.log(`If the purchase amount is $${purchaseAmount}, then the discounted amount is $${getDiscount(purchaseAmount)}`);

purchaseAmount = 100;

console.log(`If the purchase amount is $${purchaseAmount}, then the discounted amount is $${getDiscount(purchaseAmount)}`);

purchaseAmount = 10;

console.log(`If the purchase amount is $${purchaseAmount}, then the discounted amount is $${getDiscount(purchaseAmount)}`);

/*
Question 3: Write an if-else statement that checks whether a year is a leap year. Print "Leap year" if it is divisible by 4 but not divisible by 100, or if it is divisible by 400. Otherwise, print "Not a leap year".
*/

let year = 2004;

if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
{
    console.log('Leap year');
}
else
{
    console.log('Not a leap year');
}