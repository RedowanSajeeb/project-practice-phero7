// iPhone 11 128GB Black
document.getElementById('plus-btn').addEventListener('click',function(){
  const iphonePrice = getElementByIdByBtn ('input-id');
  const iphonePlushPrice = iphonePrice + 1 ;
  getSetpriceValue('input-id',iphonePlushPrice);
  
  const iphoneMinPriceTotal = 1219 * iphonePlushPrice;
  getSetprice('iphone-price',iphoneMinPriceTotal);

// --------------------------
    const subtaka = priceSet('iphone-price');
    const subA = priceSet('case-price');
    const totalsubAndtaka = subtaka + subA ;
    getSetprice('subtotal',totalsubAndtaka);
    getSetprice('total',totalsubAndtaka);
   
// --------------------

})
  // -----------------
  document.getElementById('minus-btn').addEventListener('click',function(){

    const iphoneMainasClick = getElementByIdByBtn('input-id');
    const minusPrice = iphoneMainasClick- 1;
    getSetpriceValue('input-id',minusPrice);

    const iScockPrice = priceSet('iphone-price');
    const iphoneMinusPrice = iScockPrice - 1219;
    getSetprice('iphone-price',iphoneMinusPrice);

    // --------------------------------------
    const subtaka = priceSet('iphone-price');
    const subA = priceSet('case-price');
    const totalsubAndtaka = subtaka + subA ;
    getSetprice('subtotal',totalsubAndtaka);
    getSetprice('total',totalsubAndtaka);
   
// ----------------------------------------
})