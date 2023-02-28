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
console.log(output);
