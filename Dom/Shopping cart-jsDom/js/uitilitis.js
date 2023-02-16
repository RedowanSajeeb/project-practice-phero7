 function getElementByIdByBtn(inputid){
    const inputValuGet = document.getElementById(inputid);
 const inputValue = inputValuGet.value;
 const inputPureValue = parseInt(inputValue);
 return inputPureValue;
 }

//  set-price---------
function priceSet(iphoneprice){
    const priceId = document.getElementById(iphoneprice);
const priceString = priceId.innerText;
const price = parseFloat (priceString);
return price;
}

// atLestPrice_set
function getSetprice(setID, finnal){
    const getLocationprice = document.getElementById(setID);
    getLocationprice.innerText = finnal;
}
function getSetpriceValue(setIDsec, finnalset){
    const getLocationprice = document.getElementById(setIDsec);
    getLocationprice.value = finnalset;
}








// function getTextElementValueById(elementId){
//     const phoneTotalElement = document.getElementById(elementId);
//     const currentPhoneTotalString = phoneTotalElement.innerText;
//     const currentPhoneTotal = parseInt(currentPhoneTotalString);
//     return currentPhoneTotal;
// }

// function setTextElementValueById(elementId, value){
//     const subTotalElement = document.getElementById(elementId);
//     subTotalElement.innerText = value;
// }

// function calculateSubTotal(){
//     // calculate total
//     const currentPhoneTotal = getTextElementValueById('phone-total');
//     const currentCaseTotal = getTextElementValueById('case-total');
    
//     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
//     setTextElementValueById('sub-total', currentSubTotal);

//     // calculate tax
//     const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
//     const taxAmount = parseFloat(taxAmountString);
//     setTextElementValueById('tax-amount', taxAmount);

//     const finalAmount = currentSubTotal + taxAmount;
//     setTextElementValueById('final-total', finalAmount);
// }


