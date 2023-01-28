// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal
// ------------------------------------------------------
var number1 = 13; 
var number2 = 79; 
var number3 = 45; 

if (number1 > number2){
    console.log(number1);
}
else if (number2 > number3){
    console.log(number2);
}
else if (number2 && number2 < number3){
    console.log(number3);
}
// --------------------------------------------------------------------------
var sides1 = 9;
var sides2 = 8;
var sides3 = 9;

if (sides1 == sides2){
    console.log(sides1, "Isosceles-1&2 are same");
}
else if (sides2 == sides3){
    console.log(sides2,"Isosceles-2&3 are same")
}
else if (sides3 == sides1 ){
    console.log(sides3, "Isosceles-3&1 are same")
}
else if (sides3 == sides2 ){
    console.log(sides3, "Isosceles-3&2 are same")
}