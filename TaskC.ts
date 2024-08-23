// 100 Days Of Coding Challenge!

/** Question 78: Function Expressions vs. Function Declarations:
Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.*/

//------------------------------------------------------------------------------------------------------------------------------

// Function "squareDeclaration()" using Function Declaration
function squareDeclaration(x: number): number {
  return x * x;
}

// Function "squareExpression()" using Function Expression
const squareExpression = function (x: number): number {
  return x * x;
};

// Calling the functions and logging the results
console.log(`Square using declaration: ${squareDeclaration(5)}`); // Output: Square using declaration: 25
console.log(`Square using expression: ${squareExpression(5)}`); // Output: Square using expression: 25
