//First I declare a function, then take a parameter, then do some mathematical calculations with that parameter and return the result.
function mindGame(numbers){
    if(typeof numbers !== "number"){
    return "please, provide a valid number!";
    }else{
    let number = numbers * 3;
    number = number + 10;
    number = number / 2;
    number = number -5;
    const result = number;
    return result;
    }
    }
    const OutpuResultCallHand = mindGame (-50)
console.log (OutpuResultCallHand);
    // Here if length is an even number then it will show even or if it is an odd number then it will show odd.
    function evenOdd(string) {
    if (typeof string !== "string") {
    return "Sorry! This is not valid";
    } else {
    const stringOfLength = string.length;
    if (stringOfLength % 2 == 0) {
    return "even";
    }
    else {
    return "odd";
    }
    }
    }
    /* If this difference is smaller than 7, I must return the subtraction. Otherwise I must return double of the input. Means twice the number you took as input. */
    function isLGSeven(inputNum) {
    if (typeof inputNum !== "number") {
    return "Apni kita fatlami koren mia taratari ekta number dein";
    }
    else {
    const subtraction = inputNum - 7;
    if (subtraction <= 7) {
    return subtraction;
    }
    else {
    return inputNum * 2;
    }
    }
    }
    // First a function has to be declared and then the number of negative numbers in a parameter is shown.
    function findingBadData(array) {
    if (Array.isArray(array) !== true) {
    return "Provide a valid input";
    }
    else {
    let negatives = [];
    for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
    negatives.push(array[i]);
    }
    }
    return negatives.length;
    }
    }
    // After taking a function I have taken three parameters and if the sum of three parameters is more than two thousand then I will subtract 2000. And if it is less than two thousand then I will just return it.
    function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    if (typeof firstFriend != 'number' || typeof secondFriend != 'number' || typeof thirdFriend != 'number') {
    return "you should be use only number type as a input and take three parameters.";
    }else{
    let totalFriends = (firstFriend * 21) + (secondFriend * 32) + (thirdFriend * 43);
    if (totalFriends >= 2000) {
    return totalFriends - 2000;
    } else {
    return totalFriends;
    }
    }
    }