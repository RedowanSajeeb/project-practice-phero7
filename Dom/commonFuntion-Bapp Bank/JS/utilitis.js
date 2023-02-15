function inputValueUserBox (uservaluebox){
    const inputValuElement = document.getElementById(uservaluebox);
    const inputValu = inputValuElement.value;
    const valuspure = parseFloat(inputValu);
    inputValuElement.value = ' ';
    return valuspure ;
}
// --------------
    // -------------
function innerTextFunction (elements){
    const innerTextElement = document.getElementById(elements);
    const outPuttInner = innerTextElement.innerText;
    const outValuer = parseFloat(outPuttInner);
    return outValuer ;
}
function valueSetFuntion (setlocation, valueresult){
    const inputElementsSetIDget = document.getElementById(setlocation);
    inputElementsSetIDget.innerText = valueresult;

}