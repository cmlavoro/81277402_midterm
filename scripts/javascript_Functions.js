/*
Question 1: Write a JavaScript function called reverseString that takes a string as an argument and returns the reversed version of the string.
*/

function reverseString(str) {

    let strArray = str.split('');
    let reverseStrArray = strArray.reverse();
    let reverseStr = reverseStrArray.join('');
    return reverseStr;
}

let reverseTest = 'Chris';

console.log(`The string ${reverseTest} reversed is ${reverseString(reverseTest)}`);

reverseTest = 'store';

console.log(`The string ${reverseTest} reversed is ${reverseString(reverseTest)}`);

/*
Question 2: Write a JavaScript function called calculateBMI that takes a person's weight (in kilograms) and height (in meters) as arguments and returns their body mass index (BMI).
*/

let calculateBMI = (weight, height) => weight / Math.pow(height, 2);

let weight = 81.6466;
let height = 1.8288;

console.log(`The BMI of a person that weighs ${weight} kg and is ${height} meters tall is ${calculateBMI(weight, height)}`);


/*
Question 3: Write a JavaScript function called capitalizeWords that takes a sentence as an argument and returns the sentence with each word capitalized.
*/

function capitalizeWords(sentence){

    let words =  sentence.split(" ");

    let updatedSentenceArray = [];

    let updatedSentence = '';
    
    words.forEach(word => {
        
          word = word[0].toUpperCase() + word.substr(1);
          updatedSentenceArray.push(word);

    });

    updatedSentence = updatedSentenceArray.join(" ");
    return updatedSentence;

}

console.log(capitalizeWords("fort hays state university"));