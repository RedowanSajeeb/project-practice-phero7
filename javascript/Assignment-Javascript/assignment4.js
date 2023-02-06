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

const OutpuResultCallHand = mindGame ("50")
console.log (OutpuResultCallHand);
// ------------------------------------------------------------------