document.getElementById('discount-btn').addEventListener('click',function(){

    const firstPricInput = pricInputValu('enter-price-fild');
        paramiterCallWithFuntion('firsttalprice',firstPricInput); 

})
document.getElementById('confmbtn').addEventListener('click', function() {
    const confromIDget = document.getElementById('inputfield').value
    console.log(confromIDget);
        if (confromIDget == 'DISC30') {
      const priceInputGrowPrice = priceInner('firsttalprice');
    //   -----------------------------------------------------------------------
      const documentPrice30 = priceInputGrowPrice - (priceInputGrowPrice * 0.3);
    //   ------------------------------------------------------------------------
      const documentPrice3080 = documentPrice30 + 80;
      paramiterCallWithFuntion('total-payment', documentPrice3080);
    } else  {


      
    }
  });
  document.getElementById('place-order-btn').addEventListener('click',function(){

    // const getElementByIdif = document.getElementById('place-order-btn');
    window.location.href ="oder.html";
  })
  