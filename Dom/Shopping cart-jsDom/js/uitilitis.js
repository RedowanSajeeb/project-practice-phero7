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