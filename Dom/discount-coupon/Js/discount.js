document.getElementById('discount-btn').addEventListener('click',function(){

    const firstPricInput = pricInputValu('enter-price-fild');
        paramiterCallWithFuntion('firsttalprice',firstPricInput); 
        
        
// if(inputfieldIdget === 'DISC30'){
//     const documentPrice30 = firstPricInput - (firstPricInput * 0.3) ;
//         paramiterCallWithFuntion('firsttalprice', documentPrice30);
// }
// else{
//     const priceInputGrowPrice = priceInner('firsttalprice');
//     paramiterCallWithFuntion('firsttalprice',priceInputGrowPrice);
// }

})
document.getElementById('confmbtn').addEventListener('click', function() {
    const confromIDget = document.getElementById('confmbtn');
    if (confromIDget == 'DISC30') {
      const priceInputGrowPrice = priceInner('firsttalprice');
    //   -----------------------------------------------------------------------
      const documentPrice30 = priceInputGrowPrice - (priceInputGrowPrice * 0.3);
    //   ------------------------------------------------------------------------
      const documentPrice3080 = documentPrice30 + 80;
      paramiterCallWithFuntion('total-payment', documentPrice3080);
    } else {
      const priceInputGrowPrice = priceInner('firsttalprice');
    //   const price = priceInputGrowPrice + 80;
    const documentPrice30 = priceInputGrowPrice - (priceInputGrowPrice * 0.3);
    const documentPrice3080 = documentPrice30 + 80;
      paramiterCallWithFuntion('total-payment', documentPrice3080);
    }
  });
  