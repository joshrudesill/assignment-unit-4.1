console.log("***** Function Practice *****");
const { log } = console;
// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  if (typeof name !== "string") {
    return "You need to pass a string!";
  }
  return `Hello, ${name}!`;
}
// Remember to call the function to test
log(helloName({ name: "Josh" }));
log(helloName("Josh"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
log("7 + 44 is: ", addNumbers(7, 44));

// 4. Function to multiply three numbers & return the result
function multiplyThree(n1, n2, n3) {
  return n1 * n2 * n3;
}
log("4 * 8 * 17: ", multiplyThree(4, 8, 17));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
log("6 is positive? ", isPositive(6));
log("-5 is positive? ", isPositive(-5));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  return array.at(-1);
}

// Cleaner way
const getLastCleaner = (array) => array.at(-1);

let a1 = [];
let a2 = [1, 6, 4, 7, 3, 2];
log("Getting last item in the array: ", a1, getLast(a1));
log("Getting last item in the array: ", a2, getLast(a2));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}

// to test lets create a random array of length 10 with values from 1 to 100
let arrayToTest = Array.from({ length: 10 }).map(() =>
  Math.floor(Math.random() * 100)
);

log("is 5 in ", arrayToTest, find(5, arrayToTest));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string[0] === letter;
}

log(isFirstLetter("a", "apple"));
log(isFirstLetter("a", "pineapple"));
// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (number of array) {
    sum += number;
  }

  // TODO: return the sum
  return sum;
}
log(sumAll(a2));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(inputArray) {
  return inputArray.filter((n) => n > 0);
}
function allPositiveWithLoop(inputArray) {
  let filteredArray = [];
  for (number of inputArray) {
    if (number > 0) {
      filteredArray.push(number);
    }
  }
  return filteredArray;
}
log(allPositive([1, 5, 23, 6, -8]));
log(allPositive([-8, -5, -3]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
function toArray(obj) {
  let out = [];
  for (const [k, v] of Object.entries(obj)) {
    out.push([k, v]);
  }
  return out;
}

log(toArray({ a: 1, b: 2 }));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
