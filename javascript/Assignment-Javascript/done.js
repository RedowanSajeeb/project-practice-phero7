/*solving-Problem 1: Let’s play a mind game
-------------------------------------------
function Name “mindGame()” & input- positive number multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output.
--------------------------------------------
*/
function mindGame(InputPositiveNumber){
    if (typeof InputPositiveNumber == "number"){
    if( InputPositiveNumber < 0){
    return "Plz Input a Positive-Number"
    }
    let FirstMultiplication = InputPositiveNumber * 3;
    let SecAdditionReslut = FirstMultiplication + 10;
    let divisionPartResult = SecAdditionReslut / 2;
    let SubtractionpartReslut = divisionPartResult - 5;
    return SubtractionpartReslut;
    }
    else {
    return "plz-input Push TypeOf-Number likewise:50,10,.."
    }
    }
    const OutpuTResultCallHand = mindGame ()
    // --------------------------------------
    /*solving-Problem 2:Finding even or odd
    -----------------------------------------
    function name And function Called evenOdd() & input- string Type The output should be given based on the total number of characters in the String. Output will be 'even' or 'odd'.
    -------------------------------------------------------------------------------
    */
    function evenOdd(InputString){
    if (typeof InputString == "string"){
    let StringCharacterslength = InputString.length;
    if( StringCharacterslength % 2 == 0 ){
    return "even";
    }
    else {
    return "odd"
    }
    }
    else {
    return "plz-input Push TypeOf-String likewise:'Phero7' "
    }
    }
    const ouput2 = evenOdd ();
    // -----------------------------
    /*solving-Problem 3: Is Less or Greater than seven
    ---------------------------------------------------
    function Name = “isLGSeven()” & Function called “isLGSeven()” Find the difference between the input value and 7. If this difference is less than 7, return the subtraction. Otherwise double of the input must be returned. Means twice the number you took as input
    -----------------------------------------------------------
    */
    function isLGSeven(InputValueNumber){
    if( typeof InputValueNumber == "number"){
    const DifferenceInputValue = InputValueNumber - 7;
    if( DifferenceInputValue < 7){
    return DifferenceInputValue ;
    }
    else {
    return InputValueNumber * 2;
    }
    }
    else {
    return 'plz-input Push TypeOf-Number likewise:50,10,..'
    }
    }
    const Call3problesmsolved = isLGSeven();
    // ------------------------------------
    /*solving-Problem 4: Finding Bad data
    ---------------------------------------------------
    function Name = findingBadData() & function called findingBadData(). It will take an array as input. Any number of numbers will be in the array. Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero). If any number is negative we will call it "Bad Data". If a number is positive, it will be called "Good Data".
    ** How many bad data are there in the array and must return that number.
    -----------------------------------------------------------
    */
    function findingBadData(array){
    if ( Array.isArray(array) == true) {
    let BadDataCount = 0;
    for (let i = 0; i<array.length; i++){
    if(array[i] < 0){
    BadDataCount++;
    }
    }
    return BadDataCount;
    }
    else {
    return "plz-input Push TypeOf-String likewise:'array=[2,3,-3]'";
    }
    }
    const input = [ -4, -9, -5, -33, -55,-6 ];
    const InputArrayCall = findingBadData(input)
    
    // -------------------------------------------
    /*solving-Problem 5: Convert gems into diamond
    ---------------------------------------------------
    function Name = gemsToDiamond() & function called gemsToDiamond() Three numbers
    will be taken as input.
    Power of gems per 1st friend = 21
    Power of gems per 2nd friend = 32
    Power of gems per 3rd friend = 43
    figure out how many diamonds you will get in total by combining the gems of all friends. If the number of total diamond exceeds 1000 then 2000 will be subtracted from the total diamond and the number of remaining diamonds will be received.
    --------------------------
    */
    function gemsToDiamond(FirstFriendGems, secFriednGems,ThirdFriendGems){
    if(typeof FirstFriendGems == 'number'
    && typeof secFriednGems == 'number'
    && typeof ThirdFriendGems == 'number'){
    let FdsGemsCountToMultiplication = (FirstFriendGems * 21) +
    (secFriednGems * 32) + (ThirdFriendGems * 43);
    if(1000*2 <= FdsGemsCountToMultiplication){
    const conditionCkToTalCount = FdsGemsCountToMultiplication - 2000;
    return conditionCkToTalCount;
    }
    else {
    return FdsGemsCountToMultiplication ;
    }
    }
    else {
    return "plz-input Push TypeOf-Number likewise:50,10,43.."
    }
    }
    const CalFriendsGems = gemsToDiamond ( );
    /*
    -------------------------
    ----------------------END
    */