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
const OutpuResultCallHand = mindGame (50)
console.log (OutpuResultCallHand);


// --------------------------------------
/*solving-Problem 2:Finding even or odd 
-----------------------------------------
 function name And  function Called evenOdd() & input- string Type The output should be given based on the total number of characters in the String. Output will be 'even' or 'odd'.
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

const ouput2 = evenOdd ('Phero');
console.log(ouput2);
// ------------------------------------------------


/*solving-Problem 3: Is Less or Greater than seven
---------------------------------------------------
function Name =  “isLGSeven()” Function called  “isLGSeven()” Find the difference between the input value and 7. If this difference is less than 7, return the subtraction. Otherwise double of the input must be returned. Means twice the number you took as input
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
const Call3problesmsolved = isLGSeven(15);
console.log(Call3problesmsolved);
// --------------------------------------------------

/*solving-Problem 4: Finding Bad data
---------------------------------------------------

-----------------------------------------------------------
*/