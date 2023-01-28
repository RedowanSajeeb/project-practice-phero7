// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.
// ------------
    // A)
var fruits = [ 'Apple', 'Banana', 'Orange'];
console.log(fruits.indexOf('Banana'));

// b)
var Remove = fruits.pop();
console.log(fruits);

fruits.push("Watermelon");
console.log(fruits);

// ------------