// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.
// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.
// Output:
// Print the result in 2 decimal places.

// Practice Problem 2

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50
// Output:
// 71.04
// ---------------------
var subjectNP = 5;

var MathematicsNamber =75.25;
var BiologyNamber = 65;
var ChemistryNamber = 80;
var PhysicsNamber =35.45;
var BanglaNamber = 99.50;

var TotalNamber = MathematicsNamber + BiologyNamber + ChemistryNamber + PhysicsNamber + BanglaNamber;

var OutputNamber = TotalNamber / subjectNP;
var OutputNamber2Decimal = OutputNamber.toFixed(2);
console.log(OutputNamber2Decimal);