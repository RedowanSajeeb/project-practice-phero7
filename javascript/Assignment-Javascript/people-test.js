// First Problem 
// Let's input a number in a function named mindGame.Then multiply it with 3 then add 10 to the result then divide result by 2 and lastly subtract 2 from the result . Then Return the final Result. 



function mindGame(number) {
    let multiplication3 = number * 3;
    let addition10 = multiplication3 + 10;
    let division2 = addition10 / 2;
    let subtraction5 = division2 - 5;
    const result = subtraction5;
    return result;

}
// let inputNumber = number;
if (typeof inputNumber=="number" && inputNumber >= 0) {
    const result = mindGame(inputNumber);
}
else{
    console.log("Please Insert a Positive Number");
}

const OutpuResultCallHand = mindGame (5)
console.log (OutpuResultCallHand);


// Second Problem  evenOdd 



// Let's input a string in a function named evenOdd .Then write a function that calculates the length of the string .and return the length as even if returned has even value otherwise it will return the length as Odd.


function evenOdd(name) {
const remain = name.length % 2;
let result = "";
if (remain === 0) {
    result = "even"
   }
   else {
    result = "odd"
   }
return result;
}
let inputName = "true"
if (typeof inputName == "string") {
const result = evenOdd(inputName);
}
else{
    console.log("Please insert a string ");
}


// Third Problem  isLGSeven

// Let's input a number in a function named isLGSeven . Subtract 7 from this number. if the result is less then 7 then return the result a output.otherwise multiply the result with 2 and return the value.

const ouput2 = evenOdd (5);
console.log(ouput2);


function isLGSeven(number) {
    let subtraction7 = number - 7;
let result = 0;
    if (subtraction7 < 7) {
       result = result + subtraction7;
    }
    else {
        const numberDouble = number * 2;
       result = result + numberDouble;
    }
return result;
}
let numberInput = 15;
if (typeof numberInput == "number") {
    const result = isLGSeven(numberInput);
    }
    else{
        console.log("Please insert a number ");
    }


// Fourth Problem findingBadData 


// There is a array of ages of some boys .Write a function named findingBadData which calculates if the array elements are positive or negative.if there are any negative values calculate how many bad numbers are there in string are return the value. 




function findingBadData(ages) {
    let badNumbers = []
    for (let i = 0; i < ages.length; i++) {
        const element = ages[i];
        if (element < 0) {
            badNumbers.push(element);
        }
        else {

        }
    }
    let result = badNumbers.length;
    return result;
}


let inputAges = [2, 2, -34];
if (Array.isArray(inputAges) == true) {
    const output = findingBadData(inputAges);
}
else {
    console.log("Please insert an array ");
}





// Fifth Problem gemsToDiamond

// Let's name a function gemsToDiamond with three different parameters.the parameters are the number of gems of three friends.There are special powers if each friend to convert their gems to diamonds.Now within the function calculate the total diamond. if the diamond number is greater then 2000 then subtract 2000 from the total diamonds and return it . otherwise return the total diamond amount.



function gemsToDiamond(first, second, third) {
    let firstFriendDiamond = first * 21;
    let secondFriendDiamond = second * 32;
    let thirdFriendDiamond = third * 43;
    const totalDiamonds = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    let result = 0;
    if (totalDiamonds >= 1000 * 2) {
        result = totalDiamonds - 2000;
    }
    else {
        result = result + totalDiamonds;
    }
    return result;
   }
let firstFriendGems = 100;
let secondFriendGems = 23;
let thirdFriendGems = 54;
if (typeof firstFriendGems == "number" && typeof secondFriendGems == "number" && typeof thirdFriendGems == "number") {
    const result = gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems);
    }
    else{
        console.log("Please insert a number in three parameters ");
    }
    // -----------End