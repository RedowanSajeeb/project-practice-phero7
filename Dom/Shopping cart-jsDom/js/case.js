document.getElementById('case-plus-id').addEventListener('click',function(){
    const caseClickvalue = getElementByIdByBtn('input-valucase');
    const caseclickCount = caseClickvalue + 1;
    getSetpriceValue('input-valucase',caseclickCount);

    const casePrice = caseclickCount * 59;
    getSetprice('case-price',casePrice);

// ------------------------
const subtaka = priceSet('iphone-price');
const subA = priceSet('case-price');
const totalsubAndtaka = subtaka + subA ;
getSetprice('subtotal',totalsubAndtaka);
getSetprice('total',totalsubAndtaka);
// ---------------------------- 

})


document.getElementById('case-minus-id').addEventListener('click',function(){
    const caseminusValu = getElementByIdByBtn('input-valucase');
    const valuMinus = caseminusValu - 1;
    getSetpriceValue('input-valucase',valuMinus);

    const minusPrice = priceSet('case-price');
    const priceminus = minusPrice -59;
    getSetprice('case-price',priceminus);

// -----------------------------
const subtaka = priceSet('iphone-price');
const subA = priceSet('case-price');
const totalsubAndtaka = subtaka + subA ;
getSetprice('subtotal',totalsubAndtaka);
getSetprice('total',totalsubAndtaka);
// ---------------------------
})










// 1. add event listener to the case plus button
// 2. get the value inside the case number field (input field)
// 3. convert the number to an integer
// 4. calculate the new case number
// 5. set the value to the case number field
// */

// function updateCaseNumber(isIncrease){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);

//     let newCaseNumber;

//     if(isIncrease === true){
//         newCaseNumber = previousCaseNumber + 1;
//     }
//     else{
//         newCaseNumber = previousCaseNumber - 1;
//     }

//     caseNumberField.value = newCaseNumber;

//     return newCaseNumber;
// }

// function updateCaseTotalPrice(newCaseNumber){
//     const caseTotalPrice = newCaseNumber * 59;
//     const caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice;
// } 

// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const newCaseNumber = updateCaseNumber(true);

//     updateCaseTotalPrice(newCaseNumber);
//     calculateSubTotal();
// });

// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const newCaseNumber = updateCaseNumber(false);
    
//     updateCaseTotalPrice(newCaseNumber);
//     calculateSubTotal();
// })