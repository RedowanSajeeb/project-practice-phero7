// Practice Problem 1
// 1) If I write []==true,will it show true or false? Check it out.

// console.log([]==true);
// false

// --------

// console.log(true === "true");
// false.

const arrowf = paramiter =>{
    if(isNaN(paramiter)){
        return true;
    }
    else{
        return false;
    }

}
const output = arrowf();
// console.log(output);
// ------------

// Practice Problem 2


// Change the value stored in the storeFalsyValue variable to a falsy value,
// such that the code in the else statement executes.
// -----------------------------------------------------

let storeFalsyValue = true;
if(!storeFalsyValue) {
console.log(`Nothing to show!`);
}
else {
console.log(`You are amazing!`);
}
// --------------

// Practice Problem 3
// -----------------!
/* Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
    parameter will be a string) that will perform arithmetic operation depending on the third parameter and
    will print the result. For example:
    1. Print result of num1+num2 if operation is “add”
    2. Print result of num1-num2 if operation is “subtract”
    3. Print result of num1*num2 if operation is “multiply”
    4. Print result of num1/num2 if operation is “divide”
    5. Print result of num1%num2 if operation is “modulus”
    6. Else print “Invalid operation” */
    const performArithmeticOperation = (num1, num2, operation) => {
        switch(operation) {
          case 'add':
            console.log(num1 + num2);
            break;
          case 'subtract':
            console.log(num1 - num2);
            break;
          case 'multiply':
            console.log(num1 * num2);
            break;
          case 'divide':
            console.log(num1 / num2);
            break;
          case 'modulus':
            console.log(num1 % num2);
            break;
          default:
            console.log('Invalid operation');
        }
      };
      
      performArithmeticOperation(10, 5, 'add'); // Output: 15
performArithmeticOperation(10, 5, 'subtract'); // Output: 5
performArithmeticOperation(10, 5, 'multiply'); // Output: 50
performArithmeticOperation(10, 5, 'divide'); // Output: 2
performArithmeticOperation(10, 5, 'modulus'); // Output: 0
performArithmeticOperation(10, 5, 'invalid'); // Output: Invalid operation

// c------g---p-