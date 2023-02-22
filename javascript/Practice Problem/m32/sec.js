// Practice Problem reduce()
/* 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

const anArray = [ 1, 9, 17, 22 ];
const reduceArray = anArray.reduce((total, ammount) => total + ammount);
console.log(reduceArray);

const sum = 0;
const anArray1 = [ 1, 9, 17, 22 ];
const reduceArray1 = anArray1.reduce((total1, ammount1) => total1 + ammount1,sum);
// console.log(reduceArray1);

// ----------------------
// for loop
const anArray1forloop = [ 1, 9, 17, 22 ];
    let same = 0;
for (const forloopOf of anArray1forloop){
    
        same += forloopOf
        // same = forloopOf + same
}
   console.log(same);

// -----------------