/* Practice Problem map(), filter(), find()*/
/* 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */
const oddArray = [ 1, 3, 5, 7, 9 ];
const evenAodd =[];
for(const evenAray of oddArray){
    const evenNumber = evenAray +1;
    evenAodd.push(evenNumber);
}
// console.log(evenAodd);
// ----------------------Math.map-------
const oddArrayMap =  [ 1, 3, 5, 7, 9 ];
const result = oddArrayMap.map(x => x+1);
// console.log(result);


// --------------------

/* 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
 */
const givenSayAray = [33, 50, 79, 78, 90, 101, 30 ];
const sayresult = givenSayAray.filter(x => x % 10 === 0 );
// console.log(sayresult);