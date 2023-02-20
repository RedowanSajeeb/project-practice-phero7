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





// function updatePhoneNumber (isIncrease){
//     const phoneNumberField = document.getElementById('phone-number-field');
//     const phoneNumberString = phoneNumberField.value;
//     const previousPhoneNumber = parseInt(phoneNumberString);

//     let newPhoneNumber;

//     if(isIncrease){
//         newPhoneNumber = previousPhoneNumber + 1;
//     }
//     else{
//         newPhoneNumber = previousPhoneNumber - 1;
//     }
//     phoneNumberField.value = newPhoneNumber;
    
//     return newPhoneNumber;
// }

// function updatePhoneTotalPrice(newPhoneNumber){
//     const phoneTotalPrice = newPhoneNumber * 1219;
//     const phoneTotalElement = document.getElementById('phone-total');
//     phoneTotalElement.innerText = phoneTotalPrice;
// }


// document.getElementById('btn-phone-plus').addEventListener('click', function(){
//     const newPhoneNumber = updatePhoneNumber(true);
    
//     updatePhoneTotalPrice(newPhoneNumber);
//     calculateSubTotal();
    

// });

// document.getElementById('btn-phone-minus').addEventListener('click', function(){
//     const newPhoneNumber = updatePhoneNumber(false);

//     updatePhoneTotalPrice(newPhoneNumber);
//     calculateSubTotal();
// })