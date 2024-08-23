// 100 Days Of Coding Challenge!

/** Question 76: Function Parameters and Return Values:
Create a function that takes two numbers as parameters, adds them together, and returns the result.
Show how you can call this function and log the result.*/

//--------------------------------------------------------------------------------------------------

// Function "addNumbers()" that takes two numbers as parameters, adds them together, and returns the result
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Calling the function and logging the result
const result = addNumbers(50, 100);
console.log(`The sum is: ${result}`); // Output: The sum is: 150
