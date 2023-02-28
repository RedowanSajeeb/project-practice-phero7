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