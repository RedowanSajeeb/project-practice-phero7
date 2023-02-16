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