"use strict";
// 100 Days Of Coding Challenge!
/** Question 77: Default Parameters:
Write a function that greets a user. It should take the users name as a parameter and say "hi".
If no name is given, it should greet an anonymous user.*/
//--------------------------------------------------------------------------------------------
// Function "greetUser()" that greets a user with a default parameter
function greetUser(name = "Anonymous") {
    return `Hi, ${name}!`;
}
// Calling the function with and without a name
console.log(greetUser("Max")); // Output: Hi, Max!
console.log(greetUser()); // Output: Hi, Anonymous!
