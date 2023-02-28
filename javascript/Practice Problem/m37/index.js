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