function pricInputValu (inputPrice){
    const getElementByIdCount = document.getElementById(inputPrice);
    const stringPriceValu = getElementByIdCount.value;
    const inputvalu = parseFloat(stringPriceValu);
    // stringPriceValu.value = ' ';
    return inputvalu ;
}
function paramiterCallWithFuntion(paramiter, setCall){

    const paramiterIdgetCall = document.getElementById(paramiter);
    paramiterIdgetCall.innerText = setCall;
}

function priceInner (priceInnerParametar){
    const getElementByIdCountInnerText = document.getElementById(priceInnerParametar);
    const stringPriceValuInner = getElementByIdCountInnerText.innerText;
    const inputvaluInner = parseFloat(stringPriceValuInner);
    
    return inputvaluInner ;
}